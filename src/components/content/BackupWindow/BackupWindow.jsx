import React, {useState, useRef, useEffect} from 'react'
import classNames from 'classnames'
import './BackupWindow.css'
import { getLang, getLangVarable } from '../../../core/ELanguage/ELanguage'
import Card from '../../ui/Card/Card.jsx'
import Icon from '../../ui/Icon/Icon.jsx'
import Dropdown from '../../ui/Dropdown/Dropdown.jsx'
import CardDetails from '../CardDetails/CardDetails.jsx'
import Draggable from 'react-draggable'
import { getNewBackupData } from '../../../core/DefaultData/ParseDefaultData.js'
import { getUserData_BackupsArray } from '../../../core/ParseUserData.js'

function BackupWindow({ showCardDetails, setShowCardDetails, navItemSelectedId, showAppWindow,
                        contextMenuShow, setContextMenuShow, setContextMObject, setContextMPos, previousValue, setPreviousValue,
                        setDialogType, setDialogText, setShowDialog, cardDetailsData, setCardDetailsData}) {

    const eLang = getLang();
    const backupsUserData = getUserData_BackupsArray()

    console.log(backupsUserData)


    if(navItemSelectedId === "ni_backup"){
      showAppWindow = true;
    }


  const defaultCardData = getNewBackupData()

  const addNewBackup = () => {
    setShowCardDetails(true)
    setCardDetailsData(Object.assign({}, defaultCardData))
  }

  const [backupIcon, setBackupIcon] = useState()
  const [backups, setBackups] = useState(backupsUserData)
  const [toolbar_showDeleteIcon, toolbar_setShowDeleteIcon] = useState(false);

  // https://www.freecodecamp.org/news/how-to-work-with-multiple-checkboxes-in-react/#:~:text=Whenever%20we%20click%20on%20the,the%20isChecked%20value%20to%20false%20.
  //handle check übergeben
  // Wenn alle werte im array auf false stehen, dann Lösch Item verstecken / ab 1 auf true -> anzeigen
  const [backupCardsCheck, setBackupCardsCheck] = useState(new Array(backups.length).fill(false));
  const handleChangeCardCheck = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
  }

  function deleteSelectedBackup() {
    setShowDialog(true)
    setDialogType('warning')
    setDialogText('Test Löschbestätigung')
  }

  useEffect(() => {

    backupIcon?
      setCardDetailsData((prev) => {
        const newState = prev
        newState.icon = backupIcon
        return { ...newState}
      }):''

  }, [backupIcon]);

  let buttonLaunch_Label = 'Start'

    return (
        <div className={classNames('appmainwindow backup-window ', {'appmainwindow--active': showAppWindow , "" : !showAppWindow })} id="window-backup">

            {/* BackupWindow Main Body */}
            <div className="appmainwindow-titlesection">
              <h1 className="h1-window">{eLang.windowtitle_backup}</h1>
              <div className={classNames('appmainwindow-toolbar ', {'appmainwindow-toolbar-active': showAppWindow & !showCardDetails , '' : !showAppWindow })}>
                <div className="launchbutton-container">
                  <button className="button-submit launch_button">{eLang.button_launch}</button>
                </div>
                <div className="functionButton-container dFlex">
                  <button className="functionButton button-addBackup" onClick={() => {addNewBackup()}}><Icon name="addDashed" color="" size={20} /></button>
                  <button className="functionButton button-selectAllBackups" onClick={() => {setCheckAllCards(!checkAllCards)}} ><Icon name="selectAllDashed" color="" size={20} /></button>
                  <button className="functionButton button-addToLayer" disabled><Icon name="addLayer" color="" size={20} /></button>
                  <button className="functionButton button-deleteBackup" disabled={toolbar_showDeleteIcon? null : 'disabled'} onClick={() => {deleteSelectedBackup();}}><Icon name="trash" color="" size={20} /></button>
                </div>
              </div>
            </div>
            <div className={classNames('appmainwindow-container backup-container ', {'appmainwindow-container--active': showAppWindow , "" : !showAppWindow })}>
              <div className="appmainwindow-content">
                 <CardDetails setShowCardDetails={setShowCardDetails} showCardDetails={showCardDetails}
                              setCardDetailsData={setCardDetailsData} contextMenuShow={contextMenuShow}
                              setContextMenuShow={setContextMenuShow} setContextMObject={setContextMObject} setContextMPos={setContextMPos}
                              previousValue={previousValue} setPreviousValue={setPreviousValue} defaultCardData={defaultCardData} cardDetailsData={cardDetailsData}
                              setShowDialog={setShowDialog} setDialogText={setDialogText} setDialogType={setDialogType}
                              backupIcon={backupIcon} setBackupIcon={setBackupIcon} backups={backups} setBackups={setBackups}/>
                  <div className={classNames('cards-container ', {"dNone": showCardDetails , "" : !showCardDetails })}>
                  {
                    backups.map((backupItems) => {
                      return <Card cardIcon={backupItems.icon} cardLabel={backupItems.name} cardSubText={backupItems.date} key={backupItems.id} toolbar_setShowDeleteIcon={toolbar_setShowDeleteIcon}/>
                    })
                  }


                  </div>
              </div>
                {/* <div className="appmainwindow-bottomcontent backup-window_bottom_content"> */}
                  {/* <div className="layerselect-container"> */}
                    {/* Put Layer Tabs here */}
                  {/* </div> */}
                {/* </div> */}
            </div>
        </div>
    )
}

export default BackupWindow

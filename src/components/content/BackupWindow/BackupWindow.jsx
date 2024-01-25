import React, {useState, useRef, useEffect, createRef} from 'react'
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
import CheckArray from '../../../core/CheckArray.jsx'
import Toolbar from '../../ui/Toolbar/Toolbar.jsx'

function BackupWindow({ showCardDetails, setShowCardDetails, navItemSelectedId, showAppWindow,
                        contextMenuShow, setContextMenuShow, setContextMObject, setContextMPos, previousValue, setPreviousValue,
                        setDialogType, setDialogText, setShowDialog, cardDetailsData, setCardDetailsData,
                        setCardDetailsWinTitle, cardDetailsWinTitle}) {

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
    setCardDetailsWinTitle('Create Backup')
  }

  // click card item functions
  const cardClick = (cardData) => {
    console.log('cardId '+cardData.id)
    console.log('cardName '+cardData.name)
    setShowCardDetails(true)
    setCardDetailsData(cardData)
    setCardDetailsWinTitle('Edit Backup')
  }

  const [backupIcon, setBackupIcon] = useState()
  const [backups, setBackups] = useState(backupsUserData)

  //----------------- Toggle BackupCards -------------------//
  const [toolbar_showDeleteIcon, toolbar_setShowDeleteIcon] = useState(false);
  const [toogleCheckAllbCards, setToogleCheckAllbCards] = useState(false)
  const [checkedBackupCards, setCheckedBackupCards] = useState(backups.map(() => false));
  const [launchButtonStartSelected, setlaunchButtonStartSelected] = useState(false)
  // Check all function for check-all button
  const toggleCheckAll = () => {
    setToogleCheckAllbCards(!toogleCheckAllbCards);
    // console.log(toogleCheckAllbCards)
    let toggleBooleans = checkedBackupCards.map(() => !toogleCheckAllbCards);
    setCheckedBackupCards(toggleBooleans)
    // console.log(checkedBackupCards)
    checkbackupCardsToggleBoleans(toggleBooleans)
  };
  // toogle check function -> used when single card was selected via shift+click or check box
  const toggleCheck = (index) => {
    console.log('Item-Index: '+index)
    let toggleBooleans = checkedBackupCards.map((check, i) => (i === index ? !check : check));
    setCheckedBackupCards(toggleBooleans)
    checkbackupCardsToggleBoleans(toggleBooleans)
    //Use CheckArray Asset to check, if all booleans are true/ false -> turn select all knob on/off
    let checkArr = CheckArray()
    checkArr(toggleBooleans) ? setToogleCheckAllbCards(true) : setToogleCheckAllbCards(false)
  };
  //Check if card-items boolean array contains any true and make some effects
  function checkbackupCardsToggleBoleans(toggleBooleans){
    if(toggleBooleans.includes(true)){
      toolbar_setShowDeleteIcon(true)
      setlaunchButtonStartSelected(true)
    }else {
      toolbar_setShowDeleteIcon(false)
      setlaunchButtonStartSelected(false)
    }
  }
  // --------------------------------------------------- //
  // Delete selected backups
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

  let buttonLaunch_Label = eLang.button_launch
  let buttonLaunch_selecedLabel = "Auswahl Starten"



    return (
        <div className={classNames('appmainwindow backup-window ', {'appmainwindow--active': showAppWindow , "" : !showAppWindow })} id="window-backup">
            {/* BackupWindow Main Body */}
            <div className="appmainwindow-titlesection">
              <h1 className="h1-window">{eLang.windowtitle_backup}</h1>
              <Toolbar showAppWindow={showAppWindow} showCardDetails={showCardDetails} launchButtonStartSelected={launchButtonStartSelected}
                      buttonLaunch_selecedLabel={buttonLaunch_selecedLabel} buttonLaunch_Label={buttonLaunch_Label} addNewBackup={addNewBackup}
                      toogleCheckAllbCards={toogleCheckAllbCards} toggleCheckAll={toggleCheckAll} toolbar_showDeleteIcon={toolbar_showDeleteIcon}
                      deleteSelectedBackup={deleteSelectedBackup}
              />
            </div>
            <div className={classNames('appmainwindow-container backup-container ', {'appmainwindow-container--active': showAppWindow , "" : !showAppWindow })}>
              <div className="appmainwindow-content">
                 <CardDetails setShowCardDetails={setShowCardDetails} showCardDetails={showCardDetails}
                              setCardDetailsData={setCardDetailsData} contextMenuShow={contextMenuShow}
                              setContextMenuShow={setContextMenuShow} setContextMObject={setContextMObject} setContextMPos={setContextMPos}
                              previousValue={previousValue} setPreviousValue={setPreviousValue} defaultCardData={defaultCardData} cardDetailsData={cardDetailsData}
                              setShowDialog={setShowDialog} setDialogText={setDialogText} setDialogType={setDialogType}
                              backupIcon={backupIcon} setBackupIcon={setBackupIcon} backups={backups} setBackups={setBackups}
                              cardDetailsWinTitle={cardDetailsWinTitle}
                              />
                  <div className={classNames('cards-container ', {"dNone": showCardDetails , "" : !showCardDetails })}>
                  {
                    backups.map((backupItems, i) => {
                      return <Card cardIcon={backupItems.icon} cardLabel={backupItems.name}
                                    cardSubText={backupItems.date} key={backupItems.id} toolbar_setShowDeleteIcon={toolbar_setShowDeleteIcon}
                                    check={checkedBackupCards[i]} toggleCheck={() => toggleCheck(i)} cardClick={() => cardClick(backupItems)}/>
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

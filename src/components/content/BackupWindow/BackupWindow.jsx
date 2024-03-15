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
                        setDialogType, setDialogText, setShowDialog, setDialogButtonTextWarnConfirm, setDialogButtonTextWarnConfirmAboard, cardDetailsData, setCardDetailsData,
                        setCardDetailsEditMode, cardDetailsEditMode}) {

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
    setCardDetailsEditMode(false)
  }

  // click card item functions
  const cardClick = (cardData) => {
    console.log('cardId '+cardData.id)
    console.log('cardName '+cardData.name)
    setShowCardDetails(true)
    setCardDetailsData(cardData)
    setCardDetailsEditMode(true)
  }

  const [backupIcon, setBackupIcon] = useState()
  const [backupName, setBackupName] = useState()
  const [backups, setBackups] = useState(backupsUserData)
  const [showWarnDialogs, setShowWarnDialogs] = useState(true)
  //----------------- Toggle BackupCards -------------------//
  const [toolbar_showDeleteIcon, toolbar_setShowDeleteIcon] = useState(false);
  const [toolbar_showSelectAllIcon, toolbar_setShowSelectAllIcon] = useState(false);
  const [toggleCheckAllbCards, setToggleCheckAllbCards] = useState(false)
  const [checkedBackupCards, setCheckedBackupCards] = useState(backups.map(() => false));
  const [launchButtonStartSelected, setlaunchButtonStartSelected] = useState(false)
  // Check all function for check-all button
  const toggleCheckAll = () => {
    setToggleCheckAllbCards(!toggleCheckAllbCards);
    // console.log(toggleCheckAllbCards)
    let toggleBooleans = checkedBackupCards.map(() => !toggleCheckAllbCards);
    setCheckedBackupCards(toggleBooleans)
    // console.log(checkedBackupCards)
    checkbackupCardsToggleBoleans(toggleBooleans)
  };
  // toggle check function -> used when single card was selected via shift+click or check box
  const toggleCheck = (index) => {
    console.log('Item-Index: '+index)
    let toggleBooleans = checkedBackupCards.map((check, i) => (i === index ? !check : check));
    setCheckedBackupCards(toggleBooleans)
    checkbackupCardsToggleBoleans(toggleBooleans)
    //Use CheckArray Asset to check, if all booleans are true/ false -> turn select all knob on/off
    let checkArr = CheckArray()
    checkArr(toggleBooleans) ? setToggleCheckAllbCards(true) : setToggleCheckAllbCards(false)
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
  function deleteSelectedBackupWarn() {

    if(showWarnDialogs) {
      setShowDialog(true)
      setDialogType('warnconfirm')
      setDialogText('Delete selected Items?')
      setDialogButtonTextWarnConfirm('Delete')
      setDialogButtonTextWarnConfirmAboard('Aboard')
    }else {
      deleteSelectedBackups()
    }
  }

  function deleteSelectedBackups() {
    alert('delete')
  }



  useEffect(() => {

    backupIcon?
      setCardDetailsData((prev) => {
        const newState = prev
        newState.icon = backupIcon
        return { ...newState}
      }):''

      // Show Select-All Button only if 2 or more items exists
      if(backups.length >= 2) {
        toolbar_setShowSelectAllIcon(true)
      }
  }, [backupIcon, backups]);

  let buttonLaunch_Label = eLang.button_launch
  let buttonLaunch_selecedLabel = "Auswahl Starten"

    return (
        <div className={classNames('appmainwindow backup-window ', {'appmainwindow--active': showAppWindow , "" : !showAppWindow })} id="window-backup">
            {/* BackupWindow Main Body */}
            <div className="appmainwindow-titlesection">
              <h1 className="h1-window">{eLang.windowtitle_backup}</h1>
              <Toolbar showAppWindow={showAppWindow} showCardDetails={showCardDetails} launchButtonStartSelected={launchButtonStartSelected}
                      buttonLaunch_selecedLabel={buttonLaunch_selecedLabel} buttonLaunch_Label={buttonLaunch_Label} addNewBackup={addNewBackup}
                      toggleCheckAllbCards={toggleCheckAllbCards} toggleCheckAll={toggleCheckAll} toolbar_showDeleteIcon={toolbar_showDeleteIcon}
                      deleteSelectedBackupWarn={deleteSelectedBackupWarn} toolbar_showSelectAllIcon={toolbar_showSelectAllIcon}
              />
            </div>
            <div className={classNames('appmainwindow-container backup-container ', {'appmainwindow-container--active': showAppWindow , "" : !showAppWindow })}>
              <div className="appmainwindow-content">
                 <CardDetails setShowCardDetails={setShowCardDetails} showCardDetails={showCardDetails}
                              setCardDetailsData={setCardDetailsData} contextMenuShow={contextMenuShow}
                              setContextMenuShow={setContextMenuShow} setContextMObject={setContextMObject} setContextMPos={setContextMPos}
                              previousValue={previousValue} setPreviousValue={setPreviousValue} defaultCardData={defaultCardData} cardDetailsData={cardDetailsData}
                              setShowDialog={setShowDialog} setDialogText={setDialogText} setDialogType={setDialogType}
                              backupIcon={backupIcon} setBackupIcon={setBackupIcon} setBackupName={setBackupName} backups={backups} setBackups={setBackups}
                              cardDetailsEditMode={cardDetailsEditMode} setCardDetailsEditMode={setCardDetailsEditMode} setCheckedBackupCards={setCheckedBackupCards} setToggleCheckAllbCards={setToggleCheckAllbCards}
                              toolbar_setShowDeleteIcon={toolbar_setShowDeleteIcon} setlaunchButtonStartSelected={setlaunchButtonStartSelected}/>
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

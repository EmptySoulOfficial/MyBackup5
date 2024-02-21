import './CardDetails.css'
import React, {useState, useEffect} from 'react'
import classNames from 'classnames'
import { BlockDefault, BlockInfoSmall } from '../../ui/Block/Block.jsx'
import Icon from '../../ui/Icon/Icon.jsx'
import FileItem from './lib/FileItem/FileItem.jsx'
import { getUserData_Backups } from '../../../core/ParseUserData.js'
import JsonContains from '../../../core/JsonContains.jsx'
// import IconSwitch from '../../ui/IconSwitch/IconSwitch.js'

function CardDetails ({showCardDetails, setShowCardDetails, cardDetailsData, cardDetailsDataTemp, setCardDetailsData,
                      contextMenuShow, setContextMenuShow, setContextMObject, setContextMPos, defaultCardData,
                      currentBackupItem, setShowDialog, setDialogText, setDialogType, backupIcon, setBackupIcon, setBackupName,
                      backups, setBackups, cardDetailsEditMode, setCheckedBackupCards, setToggleCheckAllbCards,toolbar_setShowDeleteIcon, setlaunchButtonStartSelected}) {

  const fs = require('fs');
  // New Item Defaults
  let currentCardPlaceHolder = "Name"
  let userDataBackups = getUserData_Backups()
  // custom image
  const [TestSrc, setTestSrc] = useState('')
  const [backupCustomImageFileExt, setBackupCustomImageFileExt] = useState('')
  const [backupCustomImageFileName, setBackupCustomImageFileName] = useState('')
  // Edit backup Save Button
  const [disableEditBackupSaveButton, setDisableEditBackupSaveButton] = useState(true)
  // set context menu Items for add backup item
  let contextMObject_CardDetailsAddItem = [
    {contextMKey:'addfileselect', contextMName: 'Add File'},
    {contextMKey:'addfolderselect', contextMName: 'Add Folder'}
  ];

  const handleContextClick = (p) => {
    setContextMPos(p);
    setContextMenuShow(true);
    setContextMObject(contextMObject_CardDetailsAddItem);
  }

  // Set Save Button Disabled or Enabled when editmode
  useEffect(() => {
    if (cardDetailsEditMode) {
      setDisableEditBackupSaveButton(true)
    } else {
      setDisableEditBackupSaveButton(false)
    }
  },[cardDetailsEditMode]
  )

  function handleEditBackupOnChange() {
    if(cardDetailsEditMode){
      alert('enable saving')
      setDisableEditBackupSaveButton(false)
    }
  }

  const resetLoadedData = () => {
    //set timeout for data reset, so we can't see the content changing
    setTimeout(function(){setCardDetailsData(null), setBackupIcon(null)},300)
    // setBackupName(null)
    document.getElementById('currentCardName').innerHTML = null
    setShowIconSelection(false)
    if(cardDetailsEditMode){
      setDisableEditBackupSaveButton(true)
    }
  }

  const [showIconSelection, setShowIconSelection] = useState(false)
  const [showCustomIcon, setShowCustomIcon] = useState(false)

  const loadedItem = cardDetailsData

  let cardItemId
  let cardItemName
  let cardItemDate
  let cardItemIcon
  let cardItemSize
  let cardFiles

  if(loadedItem){
    cardItemId = loadedItem['id']
    cardItemName = loadedItem['name']
    cardItemDate = loadedItem['date']
    cardItemIcon = loadedItem['icon']
    cardItemSize = loadedItem['size']
    cardFiles = loadedItem['files']

  }else {
    cardItemId = '000'
    cardItemName = ''
    cardItemDate = '/'
    cardItemIcon = 'test'
    cardItemSize = '(no data found)'
    cardFiles = ''
  }

  // if(cardItemIcon.includes('_icons')){
    // console.log('contains icons')
    // customIcon = true
  // }else{
    // customIcon = false
  // }

  let currentCardName = document.getElementById('currentCardName')
  let currentCardPathChilds = document.getElementById('filesContainer')

  function saveNewbackup() {

    let newBackupName = document.getElementById('currentCardName').innerHTML
    let newBackUpId = newBackupName.replace(/\s/g, '').toLowerCase()
    let getSelectedIcon = cardItemIcon
    const fs = require('fs')

    if(showCustomIcon){
      fs.rename("./data/backups/_icons/_tempIcon.svg", './data/backups/_icons/' + newBackUpId + '.svg', err => {
        if (err) {
          setShowDialog(true)
          setDialogType("warning")
          setDialogText("Unable to rename custom icon! [cd:001]  | '" + newBackupName +"'" )};
      });
      getSelectedIcon = newBackUpId+".svg"
    }

    setCardDetailsData((prev) => {
      let newState = prev
      newState.id = newBackUpId
      newState.name = newBackupName
      newState.icon = getSelectedIcon
      newState.size = "NOT USEABLEN NOW"
      return { ...newState}
    })

    // Save new Data
    console.log('🟢 Triggered: '+newBackUpId)
    let newBackupsArr = backups
    console.log(backups)

    // Use JsonContains custom function to check if id exists
    if(JsonContains(backups, "id", newBackUpId)){
      setShowDialog(true)
      setDialogType("warning")
      setDialogText("File ID '" + newBackUpId +"' already exists!" )
    } else {
      newBackupsArr = [...newBackupsArr,cardDetailsData]
      console.log('----NEW PACKUP ARR----')
      console.log(newBackupsArr)
      let newBackupData = userDataBackups
      newBackupData['$MyBackup1'] = [...newBackupsArr]
      setBackups(newBackupData['$MyBackup1'])
      fs.writeFile("./data/backups/backups.mb1", JSON.stringify(newBackupData), err => {
        if (err) console.log("Error writing file:", err);
      });
      // update boolean array
      setCheckedBackupCards(newBackupData['$MyBackup1'].map(() => false))
      // reset toolbar buttons
      setToggleCheckAllbCards(false)
      toolbar_setShowDeleteIcon(false)
      setlaunchButtonStartSelected(false)
      }
    }

  function cardUserInputValidation() {
    let validationCount = 0
    if (currentCardPathChilds.querySelectorAll(".fileItem").length === 0 ) {
      setShowDialog(true)
      setDialogType("warning")
      setDialogText("Add at least one file/folder!")
    } else {
      validationCount ++
    }
    if (currentCardName.innerHTML === '' ) {
      setShowDialog(true)
      setDialogType("warning")
      setDialogText("Enter a valid name!")
    } else {
      validationCount ++
    }
    if (validationCount === 2) {
      saveNewbackup()
      // Hide CardDetails and reset data for it
      setShowCardDetails(false)
      resetLoadedData()
    }
  }

  function selectIcon(prop) {
    setShowIconSelection(false)
    setBackupIcon(prop)
    setShowCustomIcon(false)
    handleEditBackupOnChange()
  }

  function checkCustomIcon({target: {files}}) {
    const maxSize = 200000;
    const [file] = files;
    const backupCustomIconUploadPath = "./data/backups/_icons/"
    const backupCustomIconTempName = "_tempIcon"
    let backupCustomIconFileExtension = '.'+file.path.split('.')[1]
    // set backup custom image states for saving
    // setBackupCustomImageFileExt(backupCustomIconFileExtension)
    // setBackupCustomImageFileName(backupCustomIconFileExtension)

    if (file.size >= maxSize){
      console.log('Uploaded custom icon size is too big')
    } else {
      console.log('Uploaded custom icon size is ok')
      setShowIconSelection(false)
      console.log('copy file to: '+backupCustomIconUploadPath+backupCustomIconTempName+backupCustomIconFileExtension)

      let backupCurrentCustomTempIcon = backupCustomIconUploadPath+backupCustomIconTempName+backupCustomIconFileExtension;
      let remTempImagePng = backupCustomIconUploadPath+backupCustomIconTempName+".png"
      let remTempImageSvg = backupCustomIconUploadPath+backupCustomIconTempName+".svg"
      // clean up existing temp images in icons
      fs.existsSync(remTempImagePng) ?
        fs.unlink(remTempImagePng, (err) => {
          if(err) throw err;
          console.log("unable to delete "+remTempImagePng)
        }) :
          fs.existsSync(remTempImageSvg) ?
            fs.unlink(remTempImageSvg, (err) => {
              if(err) throw err;
              console.log("unable to delete "+remTempImageSvg)
            }) :
              console.log('No Temp Image to clean up')
      // copy selected backup image to icons as temp
      fs.copyFile(file.path, backupCurrentCustomTempIcon, (err) => {
        if (err) throw err;
        console.log('custom icon was copied to destination');
        setBackupIcon(backupCurrentCustomTempIcon)
        setShowCustomIcon(true)
        // const path = require('path')
        // const resolvedBackuptempImage = path.resolve(backupCurrentCustomTempIcon)
        // let loadedTempImage = require(resolvedBackuptempImage)
        // Hier noch mit path resolve ect die richtige Image url setzen
        setTestSrc(backupCurrentCustomTempIcon)
      });
        console.log('unable to copy image')
      }
      handleEditBackupOnChange()
  }

  return (
    <div className={classNames({'': showCardDetails, 'CardDetails--hidden' : !showCardDetails }, 'CardDetails')}>
      <div className="cardDetails-headline-row">
        <h3>{cardDetailsEditMode? "Edit Backup" : "Create Backup"}</h3>
      </div>
      <div className="cardDetails-main-row">
        <div className="cardDetails-info-column flex">
          <div className="cardDetails-infos">
            {showIconSelection ? <div className="close-changeIcon flex" onClick={() =>{setShowIconSelection(false)}}>
                                  <Icon name={'error'} color="var(--color-low)" size={12} />
                                </div>:
            null}
            <div className={classNames({'cardDetails-icon-container--active':showIconSelection, '':!showIconSelection},'cardDetails-icon-container icon-light flex')}>
              {
                showIconSelection ? null : <div className="cardDetails-selected-icon flex" onClick={() =>{setShowIconSelection(true)}}>
                                            {showCustomIcon? <img src={TestSrc} /> : <Icon name={cardItemIcon} color="var(--color-low)" size={80} />}
                                          </div>
              }
              <div className={classNames({'':showIconSelection, 'dNone': !showIconSelection}, 'icon-select-container')}>
                <div className="icon-select-box">
                  <div className="icon-select-icon flex" onClick={() =>{selectIcon('folder')}}>
                    <Icon name={'folder'} color="var(--color-low)" size={24} />
                    </div>
                  <div className="icon-select-icon flex" onClick={() =>{selectIcon('file')}} >
                    <Icon name={'file'} color="var(--color-low)" size={24}/>
                  </div>
                  <div className="icon-select-icon flex" onClick={() =>{selectIcon('drive')}}>
                    <Icon name={'drive'} color="var(--color-low)" size={24}/>
                  </div>
                  <div className="icon-select-icon flex" onClick={() =>{selectIcon('diskette')}}>
                    <Icon name={'diskette'} color="var(--color-low)" size={24} />
                  </div>
                </div>
                <div className="icon-select-custom-container">
                <label className="button-submit--small select_custom_icon flex">
                  <input type="file" id="select_custom_icon"  multiple={false} accept="image/png, image/jpeg,.svg" onChange={checkCustomIcon}/>
                    Custom Icon
                  </label>
                </div>
              </div>
            </div>
            <div id="currentCardName" placeholder={currentCardPlaceHolder} className="cardDetails-name"
                contentEditable="true" data-placeholder="Enter Name" onInput={e => handleEditBackupOnChange()}>
            {cardItemName}
            </div>
          </div>
          <div className="cardDetails-info-column-devider"></div>
        </div>
      <div className="cardDetails-files-column">
        <p className="box-default-title padding-10">Files</p>
          <div className="cardDetails-files-container" id="filesContainer"  onCompositionUpdate={e => handleEditBackupOnChange()}>
          {
            cardFiles.length > 0 ? cardFiles.map((fileItem) => {
              return <FileItem fileItem={fileItem} key={fileItem.id}
                                loadedItem={loadedItem} setCardDetailsData={setCardDetailsData}/>
            }) : <BlockInfoSmall>Click [+] to add new files / folders</BlockInfoSmall>
          }
          </div>
        <button className="cardDetails-addBackupItem" onClick={(p) => { handleContextClick(p);}} ><Icon name="add" color="var(--color-icon-light)" size={20} /></button>
      </div>
      </div>

      <div className="cardDetails-bottom-row">
        <BlockDefault blockClass={"cardDetails-bottomBox"}>
          <div className="flex-space-between">
            <div className="cardDetails-BackupInfoText">
            <p className="subtext user-selectable">Letztes Backup: {cardItemDate} | {cardItemSize}</p>
            </div>
            <div className="flex-space-between cardDetails-bottom-row-button-container">
              <button className="button-reset" onClick={() => {setShowCardDetails(false),resetLoadedData()}}>Aboard</button>
              <button className="button-submit" onClick={()=>{cardUserInputValidation()}} disabled={disableEditBackupSaveButton? true: false}>Save</button>
            </div>
          </div>
        </BlockDefault>
      </div>
    </div>
  )
}

export default CardDetails

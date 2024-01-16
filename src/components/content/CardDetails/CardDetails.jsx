import './CardDetails.css'
import React, {useState} from 'react'
import classNames from 'classnames'
import { BlockDefault, BlockInfoSmall } from '../../ui/Block/Block.jsx'
import Icon from '../../ui/Icon/Icon.jsx'
import FileItem from './lib/FileItem/FileItem.jsx'
import { getUserData_Backups } from '../../../core/ParseUserData.js'
import IconSwitch from '../../ui/IconSwitch/IconSwitch.js'

function CardDetails ({showCardDetails, setShowCardDetails, cardDetailsData, cardDetailsDataTemp, setCardDetailsData,
                      contextMenuShow, setContextMenuShow, setContextMObject, setContextMPos, defaultCardData,
                      currentBackupItem, setShowDialog, setDialogText, setDialogType, backupIcon, setBackupIcon,
                      backups, setBackups, cardDetailsWinTitle}) {

  let currentCardPlaceHolder = "Name"
  let userDataBackups = getUserData_Backups()

  // set context menu Items for add backup item
  let contextMObject_CardDetailsAddItem = [
    {contextMKey:'addfileselect', contextMName: 'Add File'},
    {contextMKey:'addfolderselect', contextMName: 'Add Folder'}
  ];

    // set context menu Items for change backup icon
    let contextMObject_CardDetailsChangeIcon = [
      {contextMKey:'folder', contextMName: ''},
      {contextMKey:'drive', contextMName: ''}
    ];

  const handleContextClick = (p) => {
    setContextMPos(p);
    setContextMenuShow(true);
    setContextMObject(contextMObject_CardDetailsAddItem);
  }

  const resetLoadedData = () => {
    //set timeout for data reset, so we can't see the content changing
    setTimeout(function(){setCardDetailsData(null), setBackupIcon(null)},300)
    document.getElementById('currentCardName').value =  cardItemName
    setShowIconSelection(false)

  }

  const [showIconSelection, setShowIconSelection] = useState(false)
  const [cardItemIconCustom, setCardItemIconCustom] = useState(false)

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

    // cardItemIcon.includes('_icons') ? setCardItemIconCustom(true): setCardItemIconCustom(false)

  }else {
    cardItemId = '000'
    cardItemName = ''
    cardItemDate = '/'
    cardItemIcon = 'test'
    cardItemSize = '(no data found)'
    cardFiles = ''
  }

  let currentCardName = document.getElementById('currentCardName')
  let currentCardPathChilds = document.getElementById('filesContainer')

  function saveNewbackup() {

    setCardDetailsData((prev) => {

      let newBackupName = document.getElementById('currentCardName').value
      let newBackUpId = newBackupName.replace(/\s/g, '').toLowerCase()

      let newState = prev
      newState.id = newBackUpId
      newState.name = newBackupName
      newState.size = "NOT USEABLEN NOW"
      return { ...newState}
    })
    console.log(cardDetailsData)
    let newBackupsArr = backups
    newBackupsArr = [...newBackupsArr,cardDetailsData]
    console.log('----NEW PACKUP ARR----')
    console.log(newBackupsArr)
    let newBackupData = userDataBackups
    newBackupData['$MyBackup1'] = [...newBackupsArr]
    const fs = require('fs')

    setBackups(newBackupData['$MyBackup1'])

    // DATA ID Validation um dublicate names zu vermeiden!
      fs.writeFile("./data/backups/backups.mb1", JSON.stringify(newBackupData), err => {
        if (err) console.log("Error writing file:", err);
      });

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
    if (currentCardName.value === '' ) {
      setShowDialog(true)
      setDialogType("warning")
      setDialogText("Enter a valid name!")
    }else
    {
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
  }

  function checkCustomIcon({target: {files}}) {
    const maxSize = 200000;
    const [file] = files;
    const backupCustomIconUploadPath = "./data/backups/_icons/"
    const backupCustomIconTempName = "_tempIcon"
    let backupCustomIconFileExtension = '.'+file.path.split('.')[1]

    if (file.size >= maxSize){
      console.log('Uploaded custom icon size is too big')
    }else {
      console.log('Uploaded custom icon size is ok')
      setShowIconSelection(false)
      console.log('copy file to: '+backupCustomIconUploadPath+backupCustomIconTempName+backupCustomIconFileExtension)

      const fs = require('fs');
      let backupCurrentCustomTempIcon = backupCustomIconUploadPath+backupCustomIconTempName+backupCustomIconFileExtension;
      fs.copyFile(file.path, backupCurrentCustomTempIcon, (err) => {
        if (err) throw err;
        console.log('custom icon was copied to destination');
        setBackupIcon(backupCurrentCustomTempIcon)
      });
        console.log('unable to copy image')
      }
  }

  return (
    <div className={classNames({'': showCardDetails, 'CardDetails--hidden' : !showCardDetails }, 'CardDetails')}>
      <div className="cardDetails-headline-row">
        <h3>{cardDetailsWinTitle}</h3>
      </div>
      <div className="cardDetails-main-row">
        <div className="cardDetails-info-column flex">
          <div className="cardDetails-infos">
            {showIconSelection? <div className="close-changeIcon flex" onClick={() =>{setShowIconSelection(false)}}>
                                  <Icon name={'error'} color="var(--color-low)" size={12} />
                                </div>:
            null}
            <div className={classNames({'cardDetails-icon-container--active':showIconSelection, '':!showIconSelection},'cardDetails-icon-container icon-light flex')}>
              {
                showIconSelection? '':<div className="cardDetails-selected-icon flex" onClick={() =>{setShowIconSelection(true)}}>
                                        {/* <IconSwitch iconPathOrName={cardItemIcon}/> */}
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
            <textarea id="currentCardName" placeholder={currentCardPlaceHolder} className="cardDetails-name" defaultValue={cardItemName}>
            </textarea>
          </div>
          <div className="cardDetails-info-column-devider"></div>
        </div>
      <div className="cardDetails-files-column">
        <p className="box-default-title padding-10">Files</p>
          <div className="cardDetails-files-container" id="filesContainer">
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
              <button className="button-submit" onClick={()=>{cardUserInputValidation()}}>Save</button>
            </div>
          </div>
        </BlockDefault>
      </div>
    </div>
  )
}

export default CardDetails

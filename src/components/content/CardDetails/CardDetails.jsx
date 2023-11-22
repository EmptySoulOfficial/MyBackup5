import './CardDetails.css'
import React, {useState} from 'react'
import classNames from 'classnames'
import { BlockDefault, BlockInfoSmall } from '../../ui/Block/Block.jsx'
import Icon from '../../ui/Icon/Icon.jsx'
import FileItem from './lib/FileItem/FileItem.jsx'

function CardDetails ({showCardDetails, setShowCardDetails, cardDetailsData, cardDetailsDataTemp, setCardDetailsData,
                        contextMenuShow, setContextMenuShow, setContextMObject, setContextMPos, defaultCardData,
                        currentBackupItem, setShowDialog, setDialogText, setDialogType}) {

  let currentCardPlaceHolder = "Name"

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
    setTimeout(function(){setCardDetailsData(null)},300)
    document.getElementById('currentCardName').value =  cardItemName
  }

  const [showIconSelection, setShowIconSelection] = useState(false)


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

  let currentCardName = document.getElementById('currentCardName')
  let currentCardPathChilds = document.getElementById('filesContainer')

  function cardUserInputValidation() {
    if (currentCardPathChilds.querySelectorAll(".fileItem").length === 0 ) {
      setShowDialog(true)
      setDialogType("warning")
      setDialogText("Add at least one file/folder!")
    }
    if (currentCardName.value === '' ) {
      setShowDialog(true)
      setDialogType("warning")
      setDialogText("Enter a valid name!")
    }
  }

  return (
    <div className={classNames({'': showCardDetails, 'CardDetails--hidden' : !showCardDetails }, 'CardDetails')}>
      <div className="cardDetails-headline-row">
        <h3>Create Backup</h3>
      </div>
      <div className="cardDetails-main-row">
        <div className="cardDetails-info-column flex">
          <div className="cardDetails-infos">
            {showIconSelection? <div className="close-changeIcon flex" onClick={() =>{setShowIconSelection(false)}}>
                                  <Icon name={'error'} color="var(--color-low)" size={12} />
                                </div>:
            ''}
            <div className={classNames({'cardDetails-icon-container--active':showIconSelection, '':!showIconSelection},'cardDetails-icon-container icon-light flex')} onClick={() =>{setShowIconSelection(true)}}>
              {showIconSelection? '': <Icon name={cardItemIcon} color="var(--color-low)" size={80} /> }
              <div className={classNames({'':showIconSelection, 'dNone': !showIconSelection}, 'icon-select-container')}>
                <div className="icon-select-box">
                  <div className="icon-select-icon flex">
                    <Icon name={'folder'} color="var(--color-low)" size={24} />
                    </div>
                  <div className="icon-select-icon flex">
                    <Icon name={'drive'} color="var(--color-low)" size={24} />
                  </div>
                  <div className="icon-select-icon flex">
                    <Icon name={'diskette'} color="var(--color-low)" size={24} />
                  </div>
                  <div className="icon-select-icon flex">
                    <Icon name={'restore'} color="var(--color-low)" size={24} />
                  </div>
                </div>
                <div className="icon-select-custom-container">
                <label className="button-submit--small select_custom_icon flex">
                  <input type="file" id="select_custom_icon"  multiple={false}/>
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

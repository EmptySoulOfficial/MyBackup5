import './CardDetails.css'
import React, {useState} from 'react'
import classNames from 'classnames'
import { BlockDefault, BlockInfoSmall } from '../../ui/Block/Block.jsx'
import Icon from '../../ui/Icon/Icon.jsx'
import FileItem from './lib/FileItem/FileItem.jsx'
import { newBackupItem } from '../../../core/DefaultData/NewBackupItem/NewBackupItem'

function CardDetails ({showCardDetails, setShowCardDetails, contextMenuShow, setContextMenuShow, setContextMObject, setContextMPos, currentBackupItem }) {


  let currentCardPlaceHolder = "Type name"

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

  //Pass reacl index from all cards here
  let cardIndexMock = 0

  //currentBackupItem muss noch übergeben werden
  const [loadedItem, setLoadedItem] = useState(currentBackupItem ?? newBackupItem)

  let cardItemId = loadedItem['id']
  let cardItemName = loadedItem['name']
  let cardItemDate = loadedItem['date']
  let cardItemIcon = loadedItem['icon']
  let cardItemSize = loadedItem['size']
  let cardFiles = loadedItem['files']

  let currentCardName = document.getElementById('currentCardName')
  let currentCardPathChilds = document.getElementById('filesContainer')

  function cardUserInputValidation() {
    currentCardName.value ? '': console.log('Kein Text input')
    currentCardPathChilds.querySelectorAll(".fileItem").length > 0 ? console.log('Es gibt paths'):console.log('Keine paths')

  }

  return (
    <div className={classNames({'': showCardDetails, 'CardDetails--hidden' : !showCardDetails }, 'CardDetails')}>
      <div className="cardDetails-headline-row">
        <h3>Create Backup</h3>
      </div>
      <div className="cardDetails-main-row">
        <div className="cardDetails-info-column flex">
          <div className="cardDetails-infos">
            <div className="cardDetails-icon-container icon-light flex">
              <Icon name={cardItemIcon} color="var(--color-low)" size={80} />
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
            return <FileItem fileItem={fileItem} key={fileItem.id} cardIndex={cardIndexMock}
                              loadedItem={loadedItem} setLoadedItem={setLoadedItem}/>
          }) : <BlockInfoSmall>Click [+] to add new files / folders</BlockInfoSmall>
        }

        </div>
        <button className="cardDetails-addBackupItem" onClick={(p) => { handleContextClick(p);}}><Icon name="add" color="var(--color-icon-light)" size={20} /></button>
      </div>
      </div>

      <div className="cardDetails-bottom-row">
        <BlockDefault blockClass={"cardDetails-bottomBox"}>
          <div className="flex-space-between">
            <div className="cardDetails-BackupInfoText">
            <p className="subtext user-selectable">Letztes Backup: {cardItemDate} | {cardItemSize}</p>
            </div>
            <div className="flex-space-between cardDetails-bottom-row-button-container">
              <button className="button-reset" onClick={() => {setShowCardDetails(false)}}>Aboard</button>
              <button className="button-submit" onClick={()=>{cardUserInputValidation()}}>Save</button>
            </div>
          </div>
        </BlockDefault>
      </div>
    </div>
  )
}

export default CardDetails

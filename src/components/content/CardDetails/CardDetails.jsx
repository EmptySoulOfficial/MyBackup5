import './CardDetails.css'
import React, {useState} from 'react'
import classNames from 'classnames'
import BlockDefault from '../../ui/Block/Block.jsx'
import Icon from '../../ui/Icon/Icon.jsx'
import FileItem from './lib/FileItem/FileItem.jsx'
import { name } from 'file-loader'

function CardDetails ({showCardDetails, setShowCardDetails, contexMenuShow, setContexMenuShow, setContexMObject, setContexMPos, currentBackupItem }) {


  let currentCardPlaceHolder = "Type name"


  // set contex menu Items for add backup item
  let contexMObject_CardDetailsAddItem = [
    {contexMKey:'addfileselect', contexMName: 'Add File'},
    {contexMKey:'addfolderselect', contexMName: 'Add Folder'}
  ];

  const handleContexClick = (p) => {
    setContexMPos(p);
    setContexMenuShow(true);
    setContexMObject(contexMObject_CardDetailsAddItem);
  }

  const [newBackupItem, setNewBackupItem] = useState([
    {
      id: "",
      name: "",
      date: "New",
      icon: "folder",
      files: [
              {id: 1, type: "folder", from: "C:/MyData", to: "E:/"},
              {id: 2, type: "file", from: "C:/MyData/test.jpg", to: "E:/"}
            ],
      size: "--"
    }
  ])

  //currentBackupItem muss noch übergeben werden
  const loadedItem = currentBackupItem ?? newBackupItem

  const backupItemMapped = new Map(Object.entries(loadedItem[0]));

  let cardItemId = backupItemMapped.get('id')
  let cardItemName = backupItemMapped.get('name')
  let cardItemDate = backupItemMapped.get('date')
  let cardItemIcon = backupItemMapped.get('icon')
  let cardItemSize = backupItemMapped.get('size')
  let cardFiles = backupItemMapped.get('files')

  // const [fileItemVal, setFileItemVal] = useState([]);
  // const handleAdd = () => {
    // const abc=[...fileItemVal,[]]
    // setFileItemVal(abc)
  // }

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
            <textarea placeholder={currentCardPlaceHolder} className="cardDetails-name">{cardItemName}
            </textarea>
          </div>
          <div className="cardDetails-info-column-devider"></div>
        </div>
      <div className="cardDetails-files-column">
        <p className="box-default-title padding-10">Files</p>
        <div className="cardDetails-files-container">
        {
          cardFiles.map((backupFileItems) => {

            console.log("[CardDetails] Backupitem Mapped: "+backupFileItems.type)
            return <FileItem pathType={backupFileItems.type}
                            from={backupFileItems.from} to={backupFileItems.to} key={backupFileItems.id}
                            id={backupFileItems.id} loadedItem={loadedItem} newBackupItem={newBackupItem} setNewBackupItem={setNewBackupItem}/>

          })
        }
        </div>
        <button className="cardDetails-addBackupItem" onClick={(p) => { handleContexClick(p);}}><Icon name="add" color="var(--color-icon-light)" size={20} /></button>
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
              <button disabled className="button-submit">Save</button>
            </div>
          </div>
        </BlockDefault>
      </div>
    </div>
  )
}

export default CardDetails

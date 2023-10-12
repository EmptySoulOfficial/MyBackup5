import './CardDetails.css'
import React from 'react'
import classNames from 'classnames'
import BlockDefault from '../../ui/Block/Block.jsx'
import Icon from '../../ui/Icon/Icon.jsx'
import FileItem from './lib/FileItem/FileItem.jsx'

function CardDetails ({showCardDetails, setShowCardDetails, contexMenuShow, setContexMenuShow}) {

  let currentCardIcon = "folder"
  let currentCardPlaceHolder = "Type name"
  let contexMObject_CardDetailsAddItem = [
    {contexMKey:'addfileselect', contexMName: 'Add File'},
    {contexMKey:'addfolderselect', contexMName: 'Add Folder'}
  ];

  return (
    <div className={classNames({'': showCardDetails, 'CardDetails--hidden' : !showCardDetails }, 'CardDetails')}>
      <div className="cardDetails-headline-row">
        <h3>Create Backup</h3>
      </div>
      <div className="cardDetails-main-row">
        <div className="cardDetails-info-column flex">
          <div className="cardDetails-infos">
            <div className="cardDetails-icon-container icon-light flex">
              <Icon name={currentCardIcon} color="var(--color-low)" size={80} />
            </div>
            <textarea placeholder={currentCardPlaceHolder} className="cardDetails-name">
            </textarea>
          </div>
          <div className="cardDetails-info-column-devider"></div>
        </div>
      <div className="cardDetails-files-column">
        <p className="box-default-title padding-10">Files</p>
        <div className="cardDetails-files-container">
          <FileItem />
          <FileItem />
          <FileItem />
          <FileItem />
        </div>

        <button className="cardDetails-addBackupItem" onClick={() => {setContexMenuShow(true)}}><Icon name="add" color="var(--color-icon-light)" size={20} /></button>
      </div>
      </div>

      <div className="cardDetails-bottom-row">
        <BlockDefault blockClass={"cardDetails-bottomBox"}>
          <div className="flex-space-between">
            <div className="cardDetails-BackupInfoText">
            <p className="subtext user-selectable">Letztes Backup: 24.12.2024 | 300 MB | Skyllein PC</p>
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

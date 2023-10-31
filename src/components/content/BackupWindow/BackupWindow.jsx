import React, {useState, useRef} from 'react'
import classNames from 'classnames'
import './BackupWindow.css'
import { getLang, getLangVarable } from '../../../core/ELanguage/ELanguage'
import Card from '../../ui/Card/Card.jsx'
import Icon from '../../ui/Icon/Icon.jsx'
import Dropdown from '../../ui/Dropdown/Dropdown.jsx'
import CardDetails from '../CardDetails/CardDetails.jsx'
import Draggable from 'react-draggable'

function BackupWindow({ setquickinfovis, setquickinfoTitle, setquickinfoText ,
                        showCardDetails, setShowCardDetails, navItemSelectedId, showAppWindow,
                        contexMenuShow, setContexMenuShow, setContexMObject, setContexMPos}) {

    const eLang = getLang();

    if(navItemSelectedId === "ni_backup"){
      showAppWindow = true;
    }

    const [backups, setbackups] = useState([
      {
        id: "mydata", name: "My Data",
        date: "no backups yet",
        icon: "folder",
        files: [
                {type: "folder", from: "C:/MyData", to: "E:/"},
                {type: "file", from: "C:/MyData/test.jpg", to: "E:/"}
              ],
        size: "320"
      },
      {
        id: "backupfromc", name: "Backup from C",
        date: "no backups yet",
        icon: "drive",
        files: [
                {type: "folder", from: "C:/", to: "F:/"}
              ],
        size: "320"
      }
    ])

    return (
        <div className={classNames('appmainwindow backup-window ', {'appmainwindow--active': showAppWindow , "" : !showAppWindow })} id="window-backup">

            {/* BackupWindow Main Body */}
            <div className="appmainwindow-titlesection">
              <h1>{eLang.windowtitle_backup}</h1>
              <div className={classNames('appmainwindow-toolbar ', {'appmainwindow-toolbar-active': showAppWindow & !showCardDetails , '' : !showAppWindow })}>
                <div className="launchbutton-container">
                  <button className="button-submit launch_button">{eLang.button_launch}</button>
                </div>
                  <div className="functionButton-container dFlex">
                    <button className="functionButton button-addBackup" onClick={() => {setShowCardDetails(true)}}><Icon name="addDashed" color="var(--color-low)" size={20} /></button>
                    <button className="functionButton button-selectAllBackups" onClick={() => {setCheckAllCards(!checkAllCards)}} ><Icon name="selectAllDashed" color="var(--color-low)" size={20} /></button>
                    <button className="functionButton button-addToLayer" disabled><Icon name="addLayer" color="var(--color-low)" size={20} /></button>
                    <button className="functionButton button-deleteBackup" disabled><Icon name="trash" color="var(--color-low)" size={20} /></button>
                  </div>
                </div>
              </div>
            <div className={classNames('appmainwindow-container backup-container ', {'appmainwindow-container--active': showAppWindow , "" : !showAppWindow })}>
              <div className="appmainwindow-content">
                <CardDetails setShowCardDetails={setShowCardDetails} showCardDetails={showCardDetails} contexMenuShow={contexMenuShow}
                              setContexMenuShow={setContexMenuShow} setContexMObject={setContexMObject} setContexMPos={setContexMPos}/>
                  <div className={classNames('cards-container ', {"dNone": showCardDetails , "" : !showCardDetails })}>
                  {
                    backups.map((backupItems) => {
                      return <Card cardIcon={backupItems.icon} cardLabel={backupItems.name} cardSubText={backupItems.date} key={backupItems.id}/>
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

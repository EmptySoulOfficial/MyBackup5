import React, {useState, useRef} from 'react'
import classNames from 'classnames'
import './BackupWindow.css'
import { getLang, getLangVarable } from '../../../core/ELanguage/ELanguage'
import Card from '../../ui/Card/Card.jsx'
import Icon from '../../ui/Icon/Icon.jsx'
import Dropdown from '../../ui/Dropdown/Dropdown.jsx'

function BackupWindow({ setquickinfovis, setquickinfoTitle, setquickinfoText , addBackupItem, setaddBackupItem, navItemSelectedId, showAppWindow}) {

    const eLang = getLang();

    if(navItemSelectedId === "ni_backup"){
      showAppWindow = true;
    }

    return (
        <div className={classNames('appmainwindow backup-window ', {'appmainwindow--active': showAppWindow , "" : !showAppWindow })} id="window-backup">

            {/* BackupWindow Main Body */}
            <div className="appmainwindow-titlesection">
                <h1>{eLang.windowtitle_backup}</h1>
                <div className="appmainwindow-toolbar">
                    <button className="addNodeItem" onClick={() => {setaddBackupItem(false);setTimeout(function(){setaddBackupItem(true)},100)}}><Icon name="add" color="var(--color-low)" size={20} /></button>
                </div>
            </div>
            <div className={classNames('appmainwindow-container backup-container ', {'appmainwindow-container--active': showAppWindow , "" : !showAppWindow })}>
                <div className="appmainwindow-content backupWindow-content">
                      <Card cardIcon="folder" cardLabel="1" cardSubText="Ein Langer Subtext"/>
                      <Card cardIcon="folder" cardLabel="2" cardSubText="Ein Langer Subtext Zwei"/>
                      <Card cardIcon="folder" cardLabel="3" cardSubText="Ein Langer Subtext Drei"/>
                      <Card cardIcon="diskette" cardLabel="4" cardSubText="Ein Langer Subtext Vier"/>
                      <Card cardIcon="folder" cardLabel="5" cardSubText="Ein Langer Subtext Fünf"/>
                      <Card cardIcon="drive" cardLabel="6" cardSubText="Ein Langer Subtext Sechs"/>
                      <Card cardIcon="folder" cardLabel="7"/>
                      <Card cardIcon="folder" cardLabel="8"/>
                      <Card cardIcon="folder" cardLabel="5" cardSubText="Ein Langer Subtext Fünf"/>
                      <Card cardIcon="drive" cardLabel="6" cardSubText="Ein Langer Subtext Sechs"/>
                      <Card cardIcon="folder" cardLabel="7"/>
                      <Card cardIcon="folder" cardLabel="8"/>
                </div>
                <div className="appmainwindow-bottomcontent backup-window_bottom_content">
                  <div className="layerselect-container">
                    {/* Put Layer Tabs here */}
                  </div>

                    <div className="launchbutton-container">
                        <button className="button-submit launch_button">{eLang.button_launch}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BackupWindow

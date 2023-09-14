import React, {useState} from 'react'
import classNames from 'classnames'
import './BackupWindow.css'
import { getLang, getLangVarable } from '../../../core/ELanguage/ELanguage'
import Card from '../../ui/Card/Card.jsx'
import Icon from '../../ui/Icon/Icon.jsx'

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
                    {/* <BackupNode nodeItemLabel="Backupname-Mock" setquickinfovis={setquickinfovis} setquickinfoTitle={setquickinfoTitle} setquickinfoText={setquickinfoText} />
                    <BackupNode nodeItemLabel="Backupname-Mock" setquickinfovis={setquickinfovis} setquickinfoTitle={setquickinfoTitle} setquickinfoText={setquickinfoText} />
                      */}
                      <Card cardIcon="folder" cardLabel="My Big Balls Backup"/>
                      <Card cardIcon="folder" cardLabel="My Data"/>
                      <Card cardIcon="drive" cardLabel="PC Main Drive" />
                      <Card cardIcon="folder" cardLabel="A folder with a very long name"/>
                      <Card cardIcon="folder" cardLabel="Folder Two"/>
                      <Card cardIcon="diskette" cardLabel="Diskette"/>
                      <Card cardIcon="folder" cardLabel="Folder 3"/>
                      <Card cardIcon="drive" cardLabel="Skyllein PC"/>
                      <Card cardIcon="folder" cardLabel="New"/>
                </div>
                <div className="appmainwindow-bottomcontent backup-window_bottom_content">
                    <div className="launchbutton-container">
                        <button className="button-submit launch_button">{eLang.button_launch}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BackupWindow

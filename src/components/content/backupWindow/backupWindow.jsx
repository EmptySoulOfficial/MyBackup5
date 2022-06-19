import React, {useState} from 'react'
import classNames from 'classnames'
import './backupWindow.css'
import parseLanguages from '../../../assets/js/parseLanguages.asset.jsx'
import BackupNode from '../../Items/backupNode/backupNode.jsx'
import Icon from '../../../assets/js/icon.asset.jsx'


function BackupWindow({ setquickinfovis, setquickinfoTitle, setquickinfoText , addBackupItem, setaddBackupItem}) {

    const lang_text = parseLanguages();

    return ( 
        
    <div className="appmainwindow backup-window" >
        
    {/* BackupWindow Main Body */}

    <div className="appmainwindow-titlesection">
            <h1>{lang_text.windowtitle_backup}</h1>
            <div className="appmainwindow-toolbar">
                <button className="addNodeItem" onClick={() => {setaddBackupItem(false);setTimeout(function(){setaddBackupItem(true)},100)}}><Icon name="add" color="var(--color-low)" size={20} /></button>
            </div>
        </div>
        <div className="appmainwindow-container backup-container">
        <div className="appmainwindow-content backup-window_content">
            {/* <BackupNode nodeItemLabel="Backupname-Mock" setquickinfovis={setquickinfovis} setquickinfoTitle={setquickinfoTitle} setquickinfoText={setquickinfoText} /> */}

        </div>
        <div className="appmainwindow-bottomcontent backup-window_bottom_content">
            <div className="launchbutton-container">
            <button className="button-submit launch_button">{lang_text.button_launch}</button>
            </div>
        </div>
        </div>
    </div>
    )
}

export default BackupWindow
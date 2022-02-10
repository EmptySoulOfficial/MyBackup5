import React, {useState} from 'react'
import classNames from 'classnames'
import './backupWindow.css'
import parseLanguages from '../../../assets/js/parseLanguages.asset.jsx'
import BackupNode from '../../Items/backupNode/backupNode.jsx'



function BackupWindow({ setquickinfovis, setquickinfoTitle, setquickinfoText}) {

    const lang_text = parseLanguages();

    return ( 
        
    <div className="appmainwindow backup-window" >
        <h1>{lang_text.windowtitle_backup}</h1>
        <div className="appmainwindow-container backup-container">
        <div className="appmainwindow-content backup-window_content">
            <BackupNode setquickinfovis={setquickinfovis} setquickinfoTitle={setquickinfoTitle} setquickinfoText={setquickinfoText} />
            <BackupNode setquickinfovis={setquickinfovis} setquickinfoTitle={setquickinfoTitle} setquickinfoText={setquickinfoText} />

        </div>
        <div className="appmainwindow-bottomcontent backup-window_bottom_content">
            <div className="launchbutton-container">
            <button className="button-submit launch_button">Launch</button>
            </div>
        </div>
        </div>
    </div>
    )
}

export default BackupWindow
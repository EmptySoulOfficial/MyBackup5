import React, {useState} from 'react'
import classNames from 'classnames'
import './backupWindow.css'
import parseLanguages from '../../../assets/js/parseLanguages.asset.jsx'
import BackupNode from '../../Items/backupNode/backupNode.jsx'
import Icon from '../../../assets/js/icon.asset.jsx'


function BackupWindow({ setquickinfovis, setquickinfoTitle, setquickinfoText}) {

    const lang_text = parseLanguages();

    return (    
        <div className="appmainwindow backup-window" id="window-backup">

            {/* BackupWindow Main Body */}
            <div className="appmainwindow-titlesection">
                <h1>{lang_text.windowtitle_backup}</h1>
                <div className="appmainwindow-toolbar">
                    <button className="addNodeItem"><Icon name="add" color="var(--color-icon-light)" size={20} /></button>
                </div>
            </div>
            <div className="appmainwindow-container backup-container">
                <div className="appmainwindow-content backup-window_content">
                    <BackupNode nodeItemLabel="Backupname-Mock" setquickinfovis={setquickinfovis} setquickinfoTitle={setquickinfoTitle} setquickinfoText={setquickinfoText} />
                    <BackupNode nodeItemLabel="Backupname-Mock" setquickinfovis={setquickinfovis} setquickinfoTitle={setquickinfoTitle} setquickinfoText={setquickinfoText} />
                </div>
                <div className="appmainwindow-bottomcontent backup-window_bottom_content">
                    <div className="backuplayer-container">
                        <select name="backuplayer" id="backuplayer_select">
                            <option value="alllayers">{lang_text.defaults_layer}</option>
                        </select>
                    </div>
                    <div className="launchbutton-container">
                        <button className="button-submit launch_button">{lang_text.button_launch}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BackupWindow
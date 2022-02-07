import React from 'react'
import './backupWindow.css'
import parseLanguages from '../../../assets/js/parseLanguages.asset.jsx'


function BackupWindow() {
    const lang_text = parseLanguages();
    return ( 
        
    <div className="appmainwindow backup-window" >
        <h1>{lang_text.windowtitle_backup}</h1>
        <div className="appmainwindow-container backup-container">
        <div className="appmainwindow-content backup-window_content">
            <div className="backup-node">
                <div className="backup-node_dragable"></div>
                <div className="backup-node_mainsection">
                    <div className="backup-node_label">My BackupName</div>
                </div>
                <div className="backup-node_switchsection"></div>
                <div className="backup-node_editsection"></div>
            </div>

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
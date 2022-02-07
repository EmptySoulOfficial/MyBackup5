import React from 'react'
import './backupWindow.css'
import parseLanguages from '../../../assets/js/parseLanguages.asset.jsx'
import Icon from '../../../assets/js/icon.asset.jsx'


function BackupWindow({quickinfovis, setquickinfovis, setquickinfoTitle}) {

    const nodename = "My backup name";
    const backupfrom = "C:\\MyFolder\\Mydata";
    const backupto = "E:\\";

    const lang_text = parseLanguages();
    return ( 
        
    <div className="appmainwindow backup-window" >
        <h1>{lang_text.windowtitle_backup}</h1>
        <div className="appmainwindow-container backup-container">
        <div className="appmainwindow-content backup-window_content">
            <div className="backup-node">
                <div className="backup-node_dragable">
                <Icon name="test" color="#fff" size={25} />
                </div>
                <div className="backup-node_mainsection">
                    <div className="backup-node_label" onMouseOver={() => {setquickinfovis(true); setquickinfoTitle(nodename) }} onMouseLeave={() => setquickinfovis(false)}>Nade Label</div>
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
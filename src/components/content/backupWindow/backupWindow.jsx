import React, {useState} from 'react'
import classNames from 'classnames'
import './backupWindow.css'
import parseLanguages from '../../../assets/js/parseLanguages.asset.jsx'
import Icon from '../../../assets/js/icon.asset.jsx'


function BackupWindow({quickinfovis, setquickinfovis, setquickinfoTitle, setquickinfoText}) {

    const nodename = "My backup name";
    const backupfrom = "From: C:\\MyFolder\\Mydata";
    const backupto = "To: E:\\";

    const lang_text = parseLanguages();

    const [backupCheck, setbackupCheck] = useState(true);

    return ( 
        
    <div className="appmainwindow backup-window" >
        <h1>{lang_text.windowtitle_backup}</h1>
        <div className="appmainwindow-container backup-container">
        <div className="appmainwindow-content backup-window_content">
            <div className={classNames('backup-node', {'': backupCheck,'backup-node--inactive': !backupCheck })}>
                <div className="backup-node_dragable">
                <Icon name="anfasser" color="var(--color-low)" size={20} />
                </div>
                <div className="backup-node_mainsection">
                    <div className="backup-node_label" 
                        onMouseOver={() => {setquickinfovis(true); setquickinfoTitle(nodename); setquickinfoText(backupfrom + `\n` + backupto)}} 
                        onMouseLeave={() => setquickinfovis(false)}>Node Label</div>
                </div>
                <div className="backup-node_switchsection">
                    {/* Backup Switch */}
                    <label className="switch">
                        <input type="checkbox" defaultChecked={true} className="switch-input" onChange={() => setbackupCheck(prev => !prev)}></input>
                        <span className="switch-inner"></span>
                    </label>
                </div>

                <div className="backup-node_editsection">
                <Icon name="test" color="#fff" size={20} />
                </div>
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
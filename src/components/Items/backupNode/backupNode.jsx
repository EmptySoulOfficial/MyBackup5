import React, {useState} from 'react'
import classNames from 'classnames'
import './backupNode.css'
import Icon from '../../../assets/js/icon.asset.jsx'
import parseLanguages from '../../../assets/js/parseLanguages.asset.jsx'
import './lib/setbackupNodeEditMode.jsx'


function BackupNode({ setquickinfovis, setquickinfoTitle, setquickinfoText}){

    // Quickinfo and backup mock infos
    const nodename = "My backup name";
    const backupfrom = "From: C:\\Program Files (x86)\\My Folder";
    const backupto = "To: E:\\";

    const lang_text = parseLanguages();

    const [backupCheck, setbackupCheck] = useState(true);
    const [nodeItemCheck, setnodeItemCheck] = useState(false);

    return (
        <div className={classNames('backup-node', {'': backupCheck,'backup-node--inactive': !backupCheck }, {'backup-node--selected': nodeItemCheck,'': !nodeItemCheck })}>
            {/* Node Dragable */}
            <div className={classNames('backup-node_dragable', {'backup-node_dragable--disabled': nodeItemCheck,'': !nodeItemCheck })}>
                <Icon name="anfasser" color="var(--color-low)" size={20} />
            </div>
            {/* Item select */}
            <div className="backup-node_select">
                <label className={classNames('checkbox', {'checkbox-checked_js': nodeItemCheck,'': !nodeItemCheck })}>
                    <input type="checkbox" className="select-switch-input" className="checkbox-input" onChange={() => setnodeItemCheck(prev => !prev)}  checked={(nodeItemCheck)? "checked" : ""}/>
                    <span className="checkbox-hook"></span>
                </label>
            </div>
            {/* Item main */}
            <div className="backup-node_mainsection">
                <div className="backup-node_label" 
                    onMouseOver={() => {setquickinfovis(true); setquickinfoTitle(nodename); setquickinfoText(backupfrom + `\n` + backupto)}} 
                    onMouseLeave={() => setquickinfovis(false)}>Node Label</div>
            </div>
            {/* Item switch */}
            <div className="backup-node_switchsection"
              onMouseOver={() => {setquickinfovis(true); setquickinfoTitle("Backup  Switch"); setquickinfoText("Turn backup on/off for this Item (NO LANG)")}} 
              onMouseLeave={() => setquickinfovis(false)}>
                <label className="switch">
                    <input type="checkbox" defaultChecked={true} disabled = {(nodeItemCheck)? "disabled" : ""} className="switch-input" onChange={() => setbackupCheck(prev => !prev)}></input>
                        <span className="switch-inner"></span>
                </label>
            </div>
            {/* Edit Item */}
            <div className={classNames('backup-node_editsection', {'editsection--disabled': nodeItemCheck,'': !nodeItemCheck })}>
                <Icon name="test" color="#fff" size={20} />
            </div>
        </div>
    )
}

export default BackupNode
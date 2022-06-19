import React, {useState} from 'react'
import classNames from 'classnames'
import './backupNode.css'
import Icon from '../../../assets/js/icon.asset.jsx'
import parseLanguages from '../../../assets/js/parseLanguages.asset.jsx'
import './lib/setbackupNodeEditMode.jsx'


function BackupNode({ setquickinfovis, setquickinfoTitle, setquickinfoText, nodeItemLabel}){

    // Quickinfo and backup mock infos
    const nodename = "My backup name";
    const backuplast = "Last: 01.01.2022";
    const backupto = "Drive: E:\\";

    const lang_text = parseLanguages();

    const [backupCheck, setbackupCheck] = useState(true);
    const [nodeItemCheck, setnodeItemCheck] = useState(false);
    const [nodeItemEdit, setnodeItemEdit] = useState(false);

    return (
        <>
        <div className={classNames('backup-node', {'': backupCheck,'backup-node--inactive': !backupCheck }, {'backup-node--selected': nodeItemCheck,'': !nodeItemCheck })}>
            {/* Node Dragable */}
            <div className={classNames('backup-node_dragable', {'backup-node_dragable--disabled': nodeItemCheck,'': !nodeItemCheck })}>
                <Icon name="anfasser" color="var(--color-low)" size={20} />
            </div>
            {/* Item select */}
            <div className="backup-node_select">
                <label className={classNames('checkbox', {'checkbox-checked_js': nodeItemCheck,'': !nodeItemCheck })}>
                    <input type="checkbox" className="select-switch-input checkbox-input"  onChange={() => setnodeItemCheck(prev => !prev)}  checked={(nodeItemCheck)? "checked" : ""}/>
                    <span className="checkbox-hook"></span>
                </label>
            </div>
            {/* Item main */}
            <div className="backup-node_mainsection">
                <div className="backup-node_label" 
                    onMouseOver={() => {setquickinfovis(true); setquickinfoTitle(nodename); setquickinfoText(backuplast + `\n` + backupto)}} 
                    onMouseLeave={() => setquickinfovis(false)}>{nodeItemLabel}</div>
            </div>
            {/* Item switch */}
            <div className="backup-node_switchsection"
              onMouseOver={() => {setquickinfovis(true); setquickinfoTitle(lang_text.quickinfo_backupswitch_title); setquickinfoText(lang_text.quickinfo_backupswitch_text)}} 
              onMouseLeave={() => setquickinfovis(false)}>
                <label className="switch">
                    <input type="checkbox" defaultChecked={true} disabled = {(nodeItemCheck)? "disabled" : ""} className="switch-input" onChange={() => setbackupCheck(prev => !prev)}></input>
                        <span className="switch-inner"></span>
                </label>
            </div>
            {/* Edit Item */}
            <div className={classNames('backup-node_editsection', {'editsection--disabled': nodeItemCheck,'': !nodeItemCheck })} onClick={() => {setnodeItemEdit(false);setTimeout(function(){setnodeItemEdit(true)},100)}} >
                <Icon name="design_edit" color="var(--color-low)" size={20} />
            </div>
        </div>
        <div className={classNames('clickMenu-box', {'clickMenu-box--visible': nodeItemEdit,'': !nodeItemEdit })} onMouseLeave={() => {setnodeItemEdit(false);}}>
        <div className="clickMenu-item">
            <label className="clickMenu-item-label">{lang_text.nodeItem_edit_edit}</label>
        </div>
        <div className="clickMenu-item clickMenu-item-red">
            <label className="clickMenu-item-label">{lang_text.nodeItem_edit_delete}</label>
        </div>
        </div>
    </>
    )
}

export default BackupNode
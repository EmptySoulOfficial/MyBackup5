import React, {useState} from 'react'
import classNames from 'classnames'
import './backupNode.css'
import Icon from '../../../assets/js/icon.asset.jsx'
// import parseLanguages from '../../../assets/js/parseLanguages.asset.jsx'
import './lib/setbackupNodeEditMode.js'


function BackupNode({ setquickinfovis, setquickinfoTitle, setquickinfoText, nodeItemLabel}){

    // Quickinfo and backup mock infos
    const nodename = "My backup name";
    const backuplast = "Last: 01.01.2022";
    const backupto = "Drive: E:\\";

    const lang_text = parseLanguages();

    const [backupCheck, setbackupCheck] = useState(true);
    const [nodeItemCheck, setnodeItemCheck] = useState(false);
    const [nodeItemEdit, setnodeItemEdit] = useState(false);
    const [nodeItemDropdown, setnodeItemDropdown] = useState(false);

    return (
        <>
        {/* backup item */}
        <div className="backup-node--container">
            <div className={classNames('backup-node', {'': backupCheck,'backup-node--inactive': !backupCheck }, {'backup-node--selected': nodeItemCheck,'': !nodeItemCheck }, {'editmode': nodeItemEdit,'': !nodeItemEdit })}>
                {/* Node Dragable */}
                <div className={classNames('backup-node_dragable', {'backup-node_dragable--disabled': nodeItemCheck,'': !nodeItemCheck })}>
                    <Icon name="anfasser" color="var(--color-icon-light)" size={20} />
                </div>
                {/* Item select */}
                <div className="backup-node_select">
                    <label className={classNames('checkbox', {'checkbox-checked_js': nodeItemCheck,'': !nodeItemCheck })}>
                        <input type="checkbox" className="select-switch-input checkbox-input"  onChange={() => setnodeItemCheck(prev => !prev)}  checked={(nodeItemCheck)? "checked" : ""}/>
                        <span className="checkbox-hook"></span>
                    </label>
                </div>
                {/* Item main */}
                <div className="backup-node_mainsection" onDoubleClick={() => setnodeItemEdit(prev => !prev)}>
                    <div className={classNames('backup-node_label', {'divtextedit': nodeItemEdit, '' : !nodeItemEdit})}
                        onMouseOver={() => {setquickinfovis(true); setquickinfoTitle(nodename); setquickinfoText(backuplast + `\n` + backupto)}}
                        onMouseLeave={() => setquickinfovis(false)}>
                        <input type="text" className="backup-node_label_textinput" placeholder={lang_text.defaults_nodeItem_name} spellCheck="false" readOnly={!nodeItemEdit}/>
                        </div>
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
                <div className={classNames('backup-node_editsection', {'editsection--disabled': nodeItemCheck,'': !nodeItemCheck }, {'backup-node_editsection--active': nodeItemDropdown,'': !nodeItemDropdown })} onClick={() => {setnodeItemDropdown(nodeItemDropdown => !nodeItemDropdown)}} >
                    <Icon name="morearrow" color="var(--color-icon-light)" size={20} />
                </div>
            </div>

        {/* edit box */}
        {/* <div className={classNames('clickMenu-box', {'clickMenu-box--visible': nodeItemEdit,'': !nodeItemEdit })} onMouseLeave={() => {setnodeItemEdit(false);}}> */}
        {/* <div className="clickMenu-item"> */}
            {/* <label className="clickMenu-item-label">{lang_text.nodeItem_edit_edit}</label> */}
        {/* </div> */}
        {/* <div className="clickMenu-item clickMenu-item-red"> */}
            {/* <label className="clickMenu-item-label">{lang_text.nodeItem_edit_delete}</label> */}
        {/* </div> */}
        {/* </div> */}
            <div className={classNames('backup-node-detail-box', {'backup-node-detail-box--active': nodeItemDropdown,'': !nodeItemDropdown })}>
                <div className="backup-node-detail-box-container">
                    <div className="backup-node-detail-box-container-selections">
                        <div className="detail-box-selections-left">
                            <p className="main-label">{lang_text.nodeItem_from_folder}</p>
                            <div className="backup-node-detail-box-container-row detail-box-filetobackup">
                                <button className="button-submit--small">{lang_text.button_select}</button>
                                <p className="subtext detail-box-filetobackup-subtext">{lang_text.nodeItem_noFrom_folder_selected}</p>
                            </div>
                        </div>
                        <div className="detail-box-selections-right">
                            <p className="main-label">{lang_text.nodeItem_to_folder}</p>
                            <div className="backup-node-detail-box-container-row detail-box-filedestination">
                                <button className="button-submit--small">{lang_text.button_select}</button>
                                <p className="subtext detail-box-filetobackup-subtext">{lang_text.nodeItem_noTo_folder_selected}</p>
                            </div>
                        </div>
                    </div>
                    <div className="backup-node-detail-box-container-details">
                        <p className="main-label">{lang_text.label_details}</p>
                        <div className="p-container-10">
                            <div className="infobox">
                            {lang_text.label_last_backup}: 01.01.2022
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </>
    )
}

export default BackupNode

import React from 'react'
import './homeWindow.css'
import parseLanguages from '../../../assets/js/parseLanguages.asset.jsx'
import packageJson from '../../../../package.json';

function BackupWindow() {
    const lang_text = parseLanguages();
    return ( 
        
    <div className="appmainwindow home-window" id="window-backup">
        <h1>{lang_text.windowtitle_home}</h1>
        <div className="appmainwindow-container home-container">
            <div className="appmainwindow-content home-window_content">
                anleitung,infos, wo sprache und design anpassen, updates
            </div>
            <p className="main-label version-label">Version: {packageJson.version}</p>
        </div>
    </div>
    )
}

export default BackupWindow
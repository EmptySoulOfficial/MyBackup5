import React from 'react'
import './homeWindow.css'
import { getLang, getLangVarable } from '../../../assets/js/ELanguage/ELanguage.js'


function BackupWindow() {
    const eLang = getLang();

    return (

    <div className="appmainwindow home-window" id="window-backup">
        <h1>{eLang.windowtitle_home}</h1>
        <div className="appmainwindow-container home-container">
        <div className="appmainwindow-content home-window_content">
            anleitung,infos, wo sprache und design anpassen, updates
        </div>
        </div>
    </div>
    )
}

export default BackupWindow

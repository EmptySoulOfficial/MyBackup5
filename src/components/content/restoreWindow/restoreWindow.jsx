import React from 'react'
import './restoreWindow.css'
import { getLang, getLangVarable } from '../../../assets/js/ELanguage/ELanguage.js'


function RestoreWindow() {
    const eLang = getLang();
    return (

    <div className="appmainwindow restore-window" >
        <h1>{eLang.windowtitle_restore}</h1>
        <div className="appmainwindow-container restore-container">
        <div className="appmainwindow-content backup-window_content">

        </div>
        <div className="appmainwindow-bottomcontent backup-window_bottom_content">
            <div className="launchbutton-container">
            <button className="button-submit launch_button">{eLang.button_launch}</button>
            </div>
        </div>
        </div>
    </div>
    )
}

export default RestoreWindow

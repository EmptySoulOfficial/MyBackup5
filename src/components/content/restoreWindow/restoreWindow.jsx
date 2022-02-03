import React from 'react'
import './restoreWindow.css'
import parseLanguages from '../../../assets/js/parseLanguages.asset.jsx'


function RestoreWindow() {
    const lang_text = parseLanguages();
    return ( 
        
    <div className="appmainwindow restore-window" >
        <h1>{lang_text.windowtitle_restore}</h1>
        <div className="appmainwindow-container restore-container">
        <div className="appmainwindow-content backup-window_content">

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

export default RestoreWindow
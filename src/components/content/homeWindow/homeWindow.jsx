import React from 'react'
import './homeWindow.css'
import parseLanguages from '../../../assets/js/parseLanguages.asset.jsx'


function BackupWindow() {
    const lang_text = parseLanguages();
    return ( 
        
    <div className="appmainwindow home-window" >
        <h1>{lang_text.windowtitle_home}</h1>
        <div className="appmainwindow-content home-window_content">

        </div>
        <div className="appmainwindow-bottomcontent home-window_bottom_content">
            
        </div>
    </div>
    )
}

export default BackupWindow
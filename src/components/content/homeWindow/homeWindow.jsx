import React from 'react'
import './homeWindow.css'
import parseLanguages from '../../../assets/js/parseLanguages.asset.jsx'


function BackupWindow() {
    const lang_text = parseLanguages();
    return ( 
        
    <div className="appmainwindow home-window appmainwindow--active" >
        <h1>{lang_text.windowtitle_home}</h1>
        <div className="appmainwindow-container home-container appmainwindow-container--active">
        <div className="appmainwindow-content home-window_content">
            anleitung,infos, wo sprache und design anpassen, updates
        </div>
        </div>
    </div>
    )
}

export default BackupWindow
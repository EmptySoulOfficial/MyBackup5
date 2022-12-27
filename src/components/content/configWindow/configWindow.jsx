import React from 'react'
import './configWindow.css'
import parseLanguages from '../../../assets/js/parseLanguages.asset.jsx'


function ConfigWindow() {
    const lang_text = parseLanguages();
    return ( 
        
    <div className="appmainwindow config-window" >
        <h1>{lang_text.windowtitle_config}</h1>
        <div className="appmainwindow-container config-container">
        <div className="appmainwindow-content config-window_content">

        </div>
        </div>
    </div>
    )
}

export default ConfigWindow
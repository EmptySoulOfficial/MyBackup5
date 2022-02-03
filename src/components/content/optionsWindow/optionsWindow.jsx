import React from 'react'
import './optionsWindow.css'
import parseLanguages from '../../../assets/js/parseLanguages.asset.jsx'


function OptionsWindow() {
    const lang_text = parseLanguages();
    return ( 
        
    <div className="appmainwindow options-window" >
        <h1>{lang_text.windowtitle_options}</h1>
        <div className="appmainwindow-container options-container">
        <div className="appmainwindow-content options-window_content">

        </div>
        </div>
    </div>
    )
}

export default OptionsWindow
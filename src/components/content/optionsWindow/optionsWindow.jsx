import React from 'react'
import './optionsWindow.css'
import { getLang, getLangVarable } from '../../../assets/js/ELanguage/ELanguage.js'


function OptionsWindow() {
    const eLang = getLang();
    return (

    <div className="appmainwindow options-window" >
        <h1>{eLang.windowtitle_options}</h1>
        <div className="appmainwindow-container options-container">
        <div className="appmainwindow-content options-window_content">

        </div>
        </div>
    </div>
    )
}

export default OptionsWindow

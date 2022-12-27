import React from 'react'
import './titleBar.css'

import appTitle from '../../assets/js/appTitle.jsx'

function TitleBar({titel_bar_backgroundcolor}) {

    const defaultAppTitle = appTitle();
    
    return (
    <div className="TitleBar" style={{backgroundColor: titel_bar_backgroundcolor}}>
        <div className="titleBar-DragAble">
        <label className="titleLabel">{defaultAppTitle}</label>
        </div>
        <div className="title-buttons_container">

            <div className="title-button minimize-button" id="min-button" onClick={minAction}>
                <span className="minimize-button-span"></span>
            </div>
            <div className="title-button close-button" id="close-button" onClick={closeAction}>
                <span className="close-button-span"></span>
                <span className="close-button-span cl2"></span>
            </div>

        </div>
    </div>
)
}

//this functions ar send to main.js
function closeAction(e) {
    e.preventDefault();
    const {ipcRenderer} = require('electron');
        ipcRenderer.send('close-me')
}

function minAction(e) {
    e.preventDefault();
    const {ipcRenderer} = require('electron');
    ipcRenderer.send('minimize')
}

export default TitleBar
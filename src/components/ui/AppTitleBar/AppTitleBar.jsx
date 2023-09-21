import React from 'react'
import './AppTitleBar.css'

import AppTitle from '../../../core/AppTitle.jsx'

function AppTitleBar({titel_bar_backgroundcolor, navItemSelectedId}) {

    const defaultAppTitle = AppTitle();

    return (
    <div className="TitleBar" style={{backgroundColor: titel_bar_backgroundcolor}}>
        <div className="titleBar-DragAble">
        <label className="titleLabel">{defaultAppTitle}</label>
        </div>
        <div className="title-buttons_container">

            <div className="title-button minimize-button" id="min-button" onClick={minAction}>
                <span className="minimize-button-span"></span>
            </div>
            <div className="title-button close-button" id="close-button" onClick={(e) => {closeAction(e,navItemSelectedId)}}>
                <span className="close-button-span"></span>
                <span className="close-button-span cl2"></span>
            </div>

        </div>
    </div>
  )
}

function saveLocalStorage(navItemSelectedId) {
  if(localStorage.getItem("selectedNavItem")){
  localStorage.setItem("selectedNavItem", navItemSelectedId)
  }
}

//this functions ar send to main.js
function closeAction(e, navItemSelectedId) {
  saveLocalStorage(navItemSelectedId);
    e.preventDefault();
    const {ipcRenderer} = require('electron');
        ipcRenderer.send('close-me')
}

function minAction(e) {
    e.preventDefault();
    const {ipcRenderer} = require('electron');
    ipcRenderer.send('minimize')
}

export default AppTitleBar

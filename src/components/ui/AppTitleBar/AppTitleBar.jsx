import React from 'react'
import './AppTitleBar.css'
import { appversiondata } from '../../../core/AppVersion';
import {CloseWindow, MinimizeWindow} from '../../../core/WindowFunctions.jsx';

function AppTitleBar({titel_bar_backgroundcolor, navItemSelectedId, initialThemeValue}) {

    const appVData = appversiondata();

    return (
    <div className="TitleBar" style={{backgroundColor: titel_bar_backgroundcolor}}>
        <div className="titleBar-DragAble">
        <label className="titleLabel">{appVData.product_name}</label>
        </div>
        <div className="title-buttons_container">
            <div className="title-button minimize-button" id="min-button" onClick={(e) => {MinimizeWindow(e)}}>
                <span className="minimize-button-span"></span>
            </div>
            <div className="title-button close-button" id="close-button" onClick={(e) => {CloseWindow(e, navItemSelectedId, initialThemeValue)}}>
                <span className="close-button-span"></span>
                <span className="close-button-span cl2"></span>
            </div>
        </div>
    </div>
  )
}

export default AppTitleBar

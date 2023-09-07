import React, { useState } from "react";
import './configWindow.css'
import parseLanguages from '../../../assets/js/parseLanguages.asset.jsx'


function ConfigWindow({themeValue, setthemeValue,langValue,setlangValue}) {

    const lang_text = parseLanguages();

    const changeTheme = (e) => {
        setthemeValue(e.target.value);
    };

    const changeLang = (e) => {
        setlangValue(e.target.value);
    };


    return ( 
        
    <div className="appmainwindow config-window" >
        <h1>{lang_text.windowtitle_config}</h1>
        <div className="appmainwindow-container config-container">
        <div className="appmainwindow-content config-window_content">
            <select value={themeValue} onChange={changeTheme} name="apptheme" id="apptheme_select">
                <option value="mb5darktheme">MB5 Dark Theme</option>
                <option value="mb5lighttheme">MB5 Light Theme</option>          
            </select>
            <p>{`You selected ${themeValue}`}</p>

            <select value={langValue} onChange={changeLang} name="applang" id="apptlang_select">
                <option value="en">English</option>
                <option value="de">Deutsch</option>
            </select>
            <p>{`You selected ${langValue}`}</p>
        </div>
        </div>
    </div>
    )
}

export default ConfigWindow
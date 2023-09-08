import React, { useState } from "react";
import './configWindow.css'
import { getLang, getLangVarable } from '../../../assets/js/ELanguage/ELanguage.js'


function ConfigWindow({themeValue, setthemeValue,langValue,setlangValue}) {

    const eLang = getLang();

    const changeTheme = (e) => {
        setthemeValue(e.target.value);
    };

    const changeLang = (e) => {
        setlangValue(e.target.value);
    };


    return (

    <div className="appmainwindow config-window" >
        <h1>{eLang.windowtitle_config}</h1>
        <div className="appmainwindow-container config-container">
        <div className="appmainwindow-content config-window_content">
            <select value={themeValue} onChange={changeTheme} name="apptheme" id="apptheme_select">
                <option value="oceansground">Oceans Ground</option>
                <option value="gamergirl">Gamer Girl</option>
            </select>
            <p>{`Selected Theme ${themeValue}`}</p>

            <select value={langValue} onChange={changeLang} name="applang" id="apptlang_select">
                <option value="en">English</option>
                <option value="de">Deutsch</option>
            </select>
            <p>{`Selected Language ${langValue}`}</p>
        </div>
        </div>
    </div>
    )
}

export default ConfigWindow

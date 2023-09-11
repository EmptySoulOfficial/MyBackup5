import React, { useState } from "react";
import classNames from "classnames";
import './configWindow.css'
import { getLang, getLangVarable } from '../../../assets/js/ELanguage/ELanguage.js'


function ConfigWindow({themeValue, setthemeValue,langValue,setlangValue, navItemSelectedId, showAppWindow}) {

    const eLang = getLang();

    const changeTheme = (e) => {
        setthemeValue(e.target.value);
    };
    const changeLang = (e) => {
        setlangValue(e.target.value);
    };

    if(navItemSelectedId === "ni_config"){
      showAppWindow = true;
    }

    return (

    <div className={classNames('appmainwindow config-window ', {'appmainwindow--active': showAppWindow , "" : !showAppWindow })}>
      <h1>{eLang.windowtitle_config}</h1>
      <div className={classNames('appmainwindow-container config-container ', {'appmainwindow-container--active': showAppWindow , "" : !showAppWindow })}>
        <div className="appmainwindow-content config-window_content">
          <div className="box-default">
            <p>App Theme</p>
            <select value={themeValue} onChange={changeTheme} name="apptheme" id="apptheme_select">
              <option value="oceansground">Oceans Ground</option>
              <option value="gamergirl">Gamer Girl</option>
            </select>
            <p>{`Selected Theme ${themeValue}`}</p>
          </div>
          <div className="box-default">
            <p>Language</p>
            <select value={langValue} onChange={changeLang} name="applang" id="apptlang_select">
              <option value="en">English</option>
              <option value="de">Deutsch</option>
            </select>
            <p>{`Selected Language ${langValue}`}</p>
          </div>
          <div className="box-default">
            <p> Delete App Data</p>
            <button className="button-submit" onClick={clearLocalStorage}>Clear Cache</button>
          </div>
        </div>
      </div>
    </div>
    )
}

function clearLocalStorage(){
  console.log('NavItemStorage: '+localStorage.getItem('selectedNavItem'))
  localStorage.clear();
  console.log('NavItemStorage: '+localStorage.getItem('selectedNavItem'))
}

export default ConfigWindow

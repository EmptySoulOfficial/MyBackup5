import React, { useState } from "react";
import classNames from "classnames";
import './configWindow.css'
import { getLang, getLangVarable } from '../../../assets/js/ELanguage/ELanguage.js'
import BlockDefault from "../../Items/block/block.jsx";


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
          <BlockDefault blocktitle={eLang.block_label_apptheme}>
            <select value={themeValue} onChange={changeTheme} name="apptheme" id="apptheme_select">
                <option value="oceansground">Oceans Ground</option>
                <option value="gamergirl">Gamer Girl</option>
              </select>
            <p>{`Selected Theme ${themeValue}`}</p>
          </BlockDefault>
          <BlockDefault blocktitle={eLang.block_label_applanguage}>
            <select value={langValue} onChange={changeLang} name="applang" id="apptlang_select">
                <option value="en">English</option>
                <option value="de">Deutsch</option>
            </select>
            <p>{`Selected Language ${langValue}`}</p>
          </BlockDefault>
          <BlockDefault blocktitle={eLang.block_label_appdata}>
            <button className="button-submit" onClick={clearLocalStorage}>Clear Cache</button>
          </BlockDefault>

        </div>
      </div>
    </div>
    )
}

function clearLocalStorage(){
  localStorage.clear();
  console.log('NavItemStorage (cleared): '+localStorage.getItem('selectedNavItem'))
}

export default ConfigWindow

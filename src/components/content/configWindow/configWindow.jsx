import React, { useState, useRef } from "react";
import classNames from "classnames";
import './ConfigWindow.css'
import { getLang, getLangVarable } from '../../../core/ELanguage/ELanguage.js'
import BlockDefault from "../../ui/Block/Block.jsx";
import Dropdown from '../../ui/Dropdown/Dropdown.jsx'


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

    let dropdownItems = [
      {dIKey:'select1', dIName: 'Select Item 1'},
      {dIKey:'select2', dIName: 'Select Item 2'},
      {dIKey:'select3', dIName: 'Select Item 3'},
    ];

    const dropdownRef = useRef(null);
    const customFunction = (prop) => {
       alert(prop);
    };

    return (

    <div className={classNames('appmainwindow config-window ', {'appmainwindow--active': showAppWindow , "" : !showAppWindow })}>
      <h1>{eLang.windowtitle_config}</h1>
      <div className={classNames('appmainwindow-container config-container ', {'appmainwindow-container--active': showAppWindow , "" : !showAppWindow })}>
        <div className="appmainwindow-content config-window_content">
        <BlockDefault blocktitle={'Object Playground'}>
          <p>Test Select:</p>
          <Dropdown dropdownItems={dropdownItems}  initialValue={dropdownItems[0].dIKey} refFunction={dropdownRef} changeFunction={customFunction} dropdownId={'test-id'} dropdownClass={'dropdown-small'}/>
          <button className="button-submit" onClick={customFunction}>Hello World</button>
        </BlockDefault>
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

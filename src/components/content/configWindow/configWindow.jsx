import React, { useState, useRef } from "react";
import classNames from "classnames";
import './ConfigWindow.css'
import { getLang, getLangVarable } from '../../../core/ELanguage/ELanguage.js'
import BlockDefault from "../../ui/Block/Block.jsx";
import Dropdown from '../../ui/Dropdown/Dropdown.jsx'
import ClickOutside from "../../../core/ClickOutside.jsx";


function ConfigWindow({themeValue, setthemeValue,langValue,setlangValue, navItemSelectedId, showAppWindow}) {

    const eLang = getLang();

    const changeTheme = (e) => {
        setthemeValue(e.target.value);
    };

    if(navItemSelectedId === "ni_config"){
      showAppWindow = true;
    }

    // test Dropdown
    let dropdownItems = [
      {dIKey:'select1', dIName: 'Select Item 1'},
      {dIKey:'select2', dIName: 'Select Item 2'},
      {dIKey:'select3', dIName: 'Select Item 3'},
    ];
    const dropdownRef = useRef(null);
    const customFunction = (prop) => {
       alert(prop);
    };

    //Language Dropdown
    let dLangItems = [
      {dIKey:'de', dIName: 'Deutsch'},
      {dIKey:'en', dIName: 'English'},
    ];
    const dLangRef = useRef(null);
    const dLangFunction = (prop) => {
      setlangValue(prop);
    };
    let [dLangState, setdLangState] = useState(false)
    let getDropdownState = (state) => {
        setdLangState(state)
    }

    console.log('DLangState: '+dLangState)

    //App Theme Dropdown
    let dThemeItems = [
      {dIKey:'gamergirl', dIName: 'Gamer Girl'},
      {dIKey:'oceansground', dIName: 'Oceans Ground'},
    ];
    const dThemeRef = useRef(null);
    const dThemeFunction = (prop) => {
      setthemeValue(prop);
    };


    console.log('! Dropdown dLanState: '+dLangState)

    return (

    <div className={classNames('appmainwindow config-window ', {'appmainwindow--active': showAppWindow , "" : !showAppWindow })}>
      <h1>{eLang.windowtitle_config}</h1>
      <div className={classNames('appmainwindow-container config-container ', {'appmainwindow-container--active': showAppWindow , "" : !showAppWindow })}>
        <div className="appmainwindow-content config-window_content">
          <BlockDefault blocktitle={eLang.block_label_apptheme}>
          <Dropdown dropdownItems={dThemeItems}  initialValue={themeValue} refFunction={dThemeRef} changeFunction={dThemeFunction} dropdownId={'dropdown-theme'} dropdownClass={'dropdown-medium'}/>
            <p className="subtext">{`Selected Theme (value): ${themeValue}`}</p>
          </BlockDefault>
          <BlockDefault blocktitle={'🌐'+eLang.block_label_applanguage}>
            <ClickOutside activateCO={dLangState} setCOState={setdLangState}>
              <Dropdown dropdownItems={dLangItems}
                        initialValue={langValue}
                        refFunction={dLangRef}
                        changeFunction={dLangFunction}
                        sendCurrentState={getDropdownState}
                        clickOutsideFunction={dLangState}
                        dropdownId={'dropdown-language'}
                        dropdownClass={'dropdown-small'}/>
              </ClickOutside>
            <p  className="subtext">{`Language (short): ${langValue}`}</p>
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

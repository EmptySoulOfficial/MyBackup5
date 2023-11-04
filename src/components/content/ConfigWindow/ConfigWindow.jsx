import React, { useState, useRef, useEffect, useMemo } from "react";
import classNames from "classnames";
import './ConfigWindow.css'
import { getLang, getLangVarable } from '../../../core/ELanguage/ELanguage.js'
import { BlockDefault} from "../../ui/Block/Block.jsx";
import Dropdown from '../../ui/Dropdown/Dropdown.jsx'
import ClickOutside from "../../../core/ClickOutside.jsx";
import { appversiondata } from "../../../core/AppVersion";
import AppStyle from "../../../core/AppStyle.jsx";

function ConfigWindow({themeValue, setthemeValue,langValue,setlangValue, navItemSelectedId, showAppWindow}) {

    const eLang = getLang();
    const appVData = appversiondata();

    console.log('APPVData: '+appVData.product_name)


    const changeTheme = (e) => {
        setthemeValue(e.target.value);
    };

    if(navItemSelectedId === "ni_config"){
      showAppWindow = true;
    }

    //App Theme Dropdown
    const themeSelectArray = useMemo(() => AppStyle(),[])
    let dThemeItems = themeSelectArray.themeArray
    const dThemeRef = useRef(null);
    const dThemeFunction = (prop) => {
      setthemeValue(prop);
    };

    let [dThemeState, setdThemeState] = useState(false)
    let getDropdownThemeState = (state) => {
        setdThemeState(state)
    }

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
    let getDropdownLangState = (state) => {
        setdLangState(state)
    }

    console.log('DLangState: '+dLangState)

    return (

    <div className={classNames('appmainwindow config-window ', {'appmainwindow--active': showAppWindow , "" : !showAppWindow })}>
      <h1>{eLang.windowtitle_config}</h1>
      <div className={classNames('appmainwindow-container config-container ', {'appmainwindow-container--active': showAppWindow , "" : !showAppWindow })}>
        <div className="appmainwindow-content config-window_content">
          <BlockDefault blocktitle={eLang.block_label_apptheme}>
            <ClickOutside activateCO={dThemeState} setCOState={setdThemeState}>
              <Dropdown dropdownItems={dThemeItems}
                        initialValue={themeValue}
                        refFunction={dThemeRef}
                        changeFunction={dThemeFunction}
                        sendCurrentState={getDropdownThemeState}
                        clickOutsideFunction={dThemeState}
                        dropdownId={'dropdown-theme'}
                        dropdownClass={'dropdown-medium'}/>
              <p className="subtext">{`Selected Theme (value): ${themeValue}`}</p>
            </ClickOutside>
          </BlockDefault>
          <BlockDefault blocktitle={'🌐'+eLang.block_label_applanguage}>
            <ClickOutside activateCO={dLangState} setCOState={setdLangState}>
              <Dropdown dropdownItems={dLangItems}
                        initialValue={langValue}
                        refFunction={dLangRef}
                        changeFunction={dLangFunction}
                        sendCurrentState={getDropdownLangState}
                        clickOutsideFunction={dLangState}
                        dropdownId={'dropdown-language'}
                        dropdownClass={'dropdown-small dropdown-negative'}/>
              </ClickOutside>
            <p  className="subtext">{`Language (short): ${langValue}`}</p>
          </BlockDefault>
          <BlockDefault blocktitle={eLang.block_label_appdata}>
            <button className="button-submit" onClick={clearLocalStorage}>Clear Cache</button>
          </BlockDefault>
          <BlockDefault blocktitle={"App Version"}>
          <p>{appVData.product_name}</p>
            <p className="subtext user-selectable">App Version: {appVData.product_version}</p>
            <p className="subtext user-selectable">Build number: {appVData.build_version}</p>
            <br/>
            <p className="subtext user-selectable">Created by:</p>
            <p className="subtext user-selectable">{appVData.app_author}</p>
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

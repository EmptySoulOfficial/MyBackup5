import React, { useState, useRef, useEffect, useMemo } from "react";
import classNames from "classnames";
import './ConfigWindow.css'
import { getLang, getLangVarable } from '../../../core/ELanguage/ELanguage.js'
import { BlockDefault, BlockSecond} from "../../ui/Block/Block.jsx";
import Dropdown from '../../ui/Dropdown/Dropdown.jsx'
import ClickOutside from "../../../core/ClickOutside.jsx";
import { appversiondata } from "../../../core/AppVersion";
import AppThemeMap from "../../../core/AppThemeMap.jsx";

function ConfigWindow({themeValue, setthemeValue,setInitialThemeValue,langValue,setlangValue, navItemSelectedId, showAppWindow}) {

  const eLang = getLang();
  const appVData = appversiondata();
  const changeTheme = (e) => {
      setthemeValue(e.target.value);
  };

  if(navItemSelectedId === "ni_config"){
    showAppWindow = true;
  }

  const themeSelectArray = useMemo(() => AppThemeMap(),[])
  let dThemeItems = themeSelectArray.themeArray
  const dThemeRef = useRef(null);
  const dThemeFunction = (prop) => {
    //get complete array from AppStyle (improve later with just one pass from top!)
    const themeSelectArray = AppThemeMap()
    const dThemeItems = themeSelectArray.themeArray
    //Find needed Object by selected prop (dIKey)
    const selecteThemeObject = dThemeItems.find(({ dIKey }) => dIKey === prop)
    setthemeValue(selecteThemeObject);
    setInitialThemeValue(selecteThemeObject.dIKey)
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

  //Navigation Dropdown
  let navValue = "nav_normal"
  let dNavItems = [
    {dIKey:'nav_normal', dIName: 'Normal'},
    {dIKey:'nav_small', dIName: 'Klein'},
    {dIKey:'nav_extended', dIName: 'Extended'}
  ];

  const dNavRef = useRef(null);
  const dNavFunction = (prop) => {

  };

  let [dNavState, setdNavState] = useState(false)
  let getDropdownNavState = (state) => {
      setdNavState(state)
  }

  return (
    <div className={classNames('appmainwindow config-window ', {'appmainwindow--active': showAppWindow , "" : !showAppWindow })}>
      <h1 className="h1-window">{eLang.windowtitle_config}</h1>
      <div className={classNames('appmainwindow-container config-container ', {'appmainwindow-container--active': showAppWindow , "" : !showAppWindow })}>
        <div className="appmainwindow-content config-window_content">
          <div className="multi-block-container config-window-theme-container dFlex">
          <BlockDefault blocktitle={eLang.block_label_display}>
          <h3>{eLang.block_label_apptheme}</h3>
          <br/>
            <ClickOutside activateCO={dThemeState} setCOState={setdThemeState}>
            {/* IMPORTANT: To read initial state for this dropdown, we have to use themeValue with .dIKey extension */}
              <Dropdown dropdownItems={dThemeItems}
                        initialValue={themeValue.dIKey}
                        refFunction={dThemeRef}
                        changeFunction={dThemeFunction}
                        sendCurrentState={getDropdownThemeState}
                        clickOutsideFunction={dThemeState}
                        dropdownId={'dropdown-theme'}
                        dropdownClass={'dropdown-medium'}/>
                        <br/>
              </ClickOutside>
              <p className="subtext"><b>Author: </b>{`${themeValue.themeAuthor}`}</p>
              <p className="subtext"><b>Release:  </b>{`${themeValue.themeRelease}`}</p>
              <p className="subtext"><b>Version:  </b>{`${themeValue.themeVersion}`}</p>
              <p className="subtext"><b>Informations:  </b>{`${themeValue.themeNotes}`}</p>
          </BlockDefault>
          <BlockSecond>
              <p className="subtext">Turn on "Custom-Theme" to use your own Themes.<br/>
              (It will replace the current theme)
              </p>
          </BlockSecond>
        </div>
        <div className="multi-block-container--small-left config-window-navigationtheme-container dFlex">
          <BlockDefault blocktitle="">
          <h3>Navigation</h3>
            <br/>
            <ClickOutside activateCO={dNavState} setCOState={setdNavState}>
              <Dropdown dropdownItems={dNavItems}
                        initialValue={navValue}
                        refFunction={dNavRef}
                        changeFunction={dNavFunction}
                        sendCurrentState={getDropdownNavState}
                        clickOutsideFunction={dNavState}
                        dropdownId={'dropdown-navigation-size'}
                        dropdownClass={'dropdown-small'}/>
              </ClickOutside>
          </BlockDefault>
          <BlockSecond blockClass='block-second--noTitle block-bigger'>
              <p className="subtext">Enable/Disable extended Navigation on hover.
              </p>
          </BlockSecond>

        </div>

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

import React, {useState, useEffect, useRef} from 'react'
import ReactCursorPosition from 'react-cursor-position';
import './App.css'
import HtmlTitle from '../core/HtmlTitle.jsx';
import AppTitleBar from './ui/AppTitleBar/AppTitleBar.jsx'
import Navigation from './ui/Navigation/Navigation.jsx'
import HomeWindow from './content/HomeWindow/HomeWindow.jsx'
import BackupWindow from './content/BackupWindow/BackupWindow.jsx'
import RestoreWindow from './content/RestoreWindow/RestoreWindow.jsx'
import OptionsWindow from './content/OptionsWindow/OptionsWindow.jsx'
import ConfigWindow from './content/ConfigWindow/ConfigWindow.jsx'
import AutoLang from '../core/ELanguage/AutoLanguage.jsx'
import ContextMenu from './ui/ContextMenu/ContextMenu.jsx'
import ClickOutside from '../core/ClickOutside.jsx'
import AppStyle from '../core/AppStyle.jsx';
import LoadLocalStorage from '../core/LocalStorage/LoadLocalStorage.jsx';


function App() {

  const [showCardDetails, setShowCardDetails] = useState(false);
  let [showAppWindow, setShowAppWindow] = useState()

  useEffect(() => {
    HtmlTitle()
  }, []);

  // local storages
  let s_selectedNavItem = LoadLocalStorage().s_selectedNavItem
  let s_selectedTheme = LoadLocalStorage().s_selectedTheme

  //Initial Vars
  let initNavItem = "ni_home"
  let initThemeValue = "oceansground"

  let [ navItemSelectedId, setnavItemSelectedId ] = useState(s_selectedNavItem);
  let [ initialThemeValue, setInitialThemeValue ] = useState(s_selectedTheme);
  // Check Navigation Values
  !s_selectedNavItem ?
    localStorage.setItem("selectedNavItem", initNavItem) : ''
   !navItemSelectedId ?
     navItemSelectedId = initNavItem : ''
  //Check Theme values
  !s_selectedTheme ?
    localStorage.setItem("selectedTheme", initThemeValue) : ''
   !initialThemeValue ?
   initialThemeValue = initThemeValue : ''

  //Init default Theme via arry and pass it into themeValue
  const InitTheme = () => {
    const themeSelectArray = AppStyle()
    const selectedThemeObject = themeSelectArray.themeArray.find(({ dIKey }) => dIKey === initialThemeValue)
    console.log(themeSelectArray.themeArray)
    const themeValue = selectedThemeObject
    return themeValue;
  };

  const [themeValue, setthemeValue] = useState(InitTheme)

  useEffect(() => {
    const currentThemeFolder = themeValue.themeFolder
    //If factory theme style tag exists -> remove
    if (document.getElementById('factory_themes')){
      document.getElementById('factory_themes').remove()
    }
    //Add <style> tag with current theme css (inner as text)
    const fs = require('fs')
    const path = require('path')
    //Path kann auf windows 2 steps weniger sein -> checken!
    const factoryThemeCss = fs.readFileSync(path.resolve(__dirname, '../../../../../../../../src/themes/'+currentThemeFolder+'/style.css'), 'utf8')
    document.head.insertAdjacentHTML("beforeend", `<style id='factory_themes'>`+factoryThemeCss+`</style>`)
  }, [themeValue]);

  //Language
  const autoLang = AutoLang()
  //select default language
  const InitialLangValue = () => {
    const langValue = autoLang;
    return langValue;
  };

  const [langValue, setlangValue] = useState(InitialLangValue)
  //Context Menu
  const [contextMObject, setContextMObject] = useState('');
  const [contextMenuShow, setContextMenuShow] = useState(false);
  const [contextMPos, setContextMPos] = useState('')
  const contextMRef = useRef(null);
  const contextMCustomFunction = (prop) => {
    console.log("[🧩APP]Context Menu Custom Function "+prop)
  };

  console.log('💽 Default Storage: '+ s_selectedNavItem + " "+s_selectedTheme)

  return (
    <ReactCursorPosition>
      <ClickOutside activateCO={contextMenuShow} setCOState={setContextMenuShow}>
        <ContextMenu contextMObject={contextMObject} contextMenuDisabled={false}
                          contextMenuShow={contextMenuShow} setContextMenuShow={setContextMenuShow}
                          setContextMObject={setContextMObject} contextMPos={contextMPos} contextMRef={contextMRef} contextMCustomFunction={contextMCustomFunction}/>
      </ClickOutside>
      <div className="app-container" >
      {/* Pass local storages via AppTitleBar to WindowFunctions */}
      <AppTitleBar navItemSelectedId={navItemSelectedId} initialThemeValue={initialThemeValue}/>
        {/* titel_bar_backgroundcolor={jStyle.titel_bar_backgroundcolor} */}
        <div className="app-background" >
        {/* style={{backgroundColor: appbgcolor,backgroundImage: 'url('+appbgwallpaper+')',}} */}
          <Navigation s_selectedNavItem={s_selectedNavItem} navItemSelectedId={navItemSelectedId} setnavItemSelectedId={setnavItemSelectedId} />
          {/* blur={jStyle.blur} */}
          <div className="app-content">
            <BackupWindow showAppWindow={showAppWindow} setShowAppWindow={setShowAppWindow}
                          navItemSelectedId={navItemSelectedId} showCardDetails={showCardDetails}
                          setShowCardDetails={setShowCardDetails} contextMenuShow={contextMenuShow}
                          setContextMenuShow={setContextMenuShow} setContextMObject={setContextMObject} setContextMPos={setContextMPos}/>
            <HomeWindow showAppWindow={showAppWindow} navItemSelectedId={navItemSelectedId} />
            <RestoreWindow showAppWindow={showAppWindow} navItemSelectedId={navItemSelectedId} />
            <OptionsWindow showAppWindow={showAppWindow} navItemSelectedId={navItemSelectedId} />
            <ConfigWindow showAppWindow={showAppWindow} navItemSelectedId={navItemSelectedId} themeValue={themeValue}
                          setthemeValue={setthemeValue} setInitialThemeValue={setInitialThemeValue} langValue={langValue} setlangValue={setlangValue}/>
          </div>
        </div>
      </div>
    </ReactCursorPosition>
  )
}

export default App

import React, {useState, useEffect, useRef} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactCursorPosition from 'react-cursor-position';
import './App.css'
import AppPreload from './AppLoad/AppLoad.js';
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
import AppThemeMap from '../core/AppThemeMap.jsx';
import LoadLocalStorage from '../core/LocalStorage/LoadLocalStorage.jsx';
import Dialog from './ui/Dialog/Dialog.jsx';

function App() {

  const [previousValue, setPreviousValue] = useState(null)
  const [showCardDetails, setShowCardDetails] = useState(false);
  const [showAppWindow, setShowAppWindow] = useState()

  const [showDialog, setShowDialog] = useState(false)
  const [dialogType, setDialogType] = useState('')
  const [dialogText, setDialogText] = useState('')

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
    const themeSelectArray = AppThemeMap()
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
    // const fs = require('electron').remote.require('fs')

    const factoryThemeCssPath = './src/themes/'+currentThemeFolder+'/style.css'
    //-----------⛔ Für RELEASE "path.resolve" zu folgendem code ändern -> path.join(__dirname,'../src/themes/',currentThemeFolder,'/style.css') ⛔
    const resolvedThemeCssPath = path.resolve(factoryThemeCssPath)
    //-----------⛔ ⛔ ---------------//
    if(fs.existsSync(resolvedThemeCssPath)){
      const factoryThemeCss = fs.readFileSync(resolvedThemeCssPath, 'utf8')
      document.head.insertAdjacentHTML("beforeend", `<style id='factory_themes'>`+factoryThemeCss+`</style>`)
    }else{
      setShowDialog(true)
      setDialogType("error")
      setDialogText("Factory theme resolve error! [e001]")
      return
    }
  }, [themeValue]);
  //Language
  const autoLang = AutoLang()
  //select default language
  const InitialLangValue = () => {
    const langValue = autoLang;
    return langValue;
  };

  //Backup Window
  const [cardDetailsData, setCardDetailsData] = useState()

  const [langValue, setlangValue] = useState(InitialLangValue)
  //Context Menu Card Details
  const [contextMObject, setContextMObject] = useState('');
  const [contextMenuShow, setContextMenuShow] = useState(false);
  const [contextMPos, setContextMPos] = useState('')
  const contextMRef = useRef(null);

  const contextMCustomFunction = (prop) => {
    console.log("[🧩APP]Context Menu Custom Function "+prop)

    if(prop === 'addfileselect'){

      setCardDetailsData((prev) => {
        let currentFileItemsCount = prev.files.length
        let countFileItemId = currentFileItemsCount++
        const newState = prev
        const newFileItem = {
          "id": countFileItemId, "type": "file",
            "from":[],
            "to":[]
            }
        newState.files = [...newState.files,newFileItem]
        return { ...newState}
      })

      document.getElementById('filesContainer').lastElementChild.scrollIntoView({behavior: "smooth", block: "center"})
      document.getElementById('filesContainer').scrollBy(0,100);
    }
    if(prop === 'addfolderselect'){

      setCardDetailsData((prev) => {
        let currentFileItemsCount = prev.files.length
        let countFileItemId = currentFileItemsCount++
        const newState = prev
        const newFileItem = {
          "id": countFileItemId, "type": "folder",
            "from":[],
            "to":[]
            }
        newState.files = [...newState.files,newFileItem]
        return { ...newState}
      })
      document.getElementById('filesContainer').lastElementChild.scrollIntoView({behavior: 'smooth'})
    }
  };

  const changeBackupIcon = (backupIcon) => {
    console.log('-----> backupIcon: '+backupIcon)
  }

  return (
    <main id="app">
      {showDialog? <Dialog dialogType={dialogType} dialogText={dialogText} setShowDialog={setShowDialog}/>:''}
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
                            setContextMenuShow={setContextMenuShow} setContextMObject={setContextMObject} setContextMPos={setContextMPos}
                            previousValue={previousValue} setPreviousValue={setPreviousValue} setShowDialog={setShowDialog} setDialogType={setDialogType} setDialogText={setDialogText}
                            cardDetailsData={cardDetailsData} setCardDetailsData={setCardDetailsData}/>

              <HomeWindow showAppWindow={showAppWindow} navItemSelectedId={navItemSelectedId} />
              <RestoreWindow showAppWindow={showAppWindow} navItemSelectedId={navItemSelectedId} />
              <OptionsWindow showAppWindow={showAppWindow} navItemSelectedId={navItemSelectedId} />
              <ConfigWindow showAppWindow={showAppWindow} navItemSelectedId={navItemSelectedId} themeValue={themeValue}
                            setthemeValue={setthemeValue} setInitialThemeValue={setInitialThemeValue} langValue={langValue} setlangValue={setlangValue}/>
            </div>
          </div>
        </div>
      </ReactCursorPosition>
    </main>
  )

}

export default App

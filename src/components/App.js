import React, {useState, useEffect, useRef} from 'react'
import ReactCursorPosition from 'react-cursor-position';
import './App.css'
import HtmlTitle from '../core/HtmlTitle.jsx';
import AppTitleBar from './ui/AppTitleBar/AppTitleBar.jsx'
// import parseStyle from '../core/AppStyle-old.jsx'

// import wallpaperimage from '/data/user/walllpaper/wallpaper.jpg' //doesnt work -> fix or create a new electron project

import Navigation from './ui/Navigation/Navigation.jsx'
import HomeWindow from './content/HomeWindow/HomeWindow.jsx'
import BackupWindow from './content/BackupWindow/BackupWindow.jsx'
import RestoreWindow from './content/RestoreWindow/RestoreWindow.jsx'
import OptionsWindow from './content/OptionsWindow/OptionsWindow.jsx'
import ConfigWindow from './content/ConfigWindow/ConfigWindow.jsx'
import QuickInfo from './ui/QuickInfo--notUsed/QuickInfo.jsx'
import AutoLang from '../core/ELanguage/AutoLanguage.jsx'
import ContexMenu from './ui/ContexMenu/ContexMenu.jsx'
import ClickOutside from '../core/ClickOutside.jsx'
import AppStyle from '../core/AppStyle.jsx';


function App() {

  const [ quickinfovis, setquickinfovis ] = useState(false);
  const [ quickinfoTitle, setquickinfoTitle ] = useState('');
  const [ quickinfoText, setquickinfoText ] = useState('');
  const [showCardDetails, setShowCardDetails] = useState(false);
  let [showAppWindow, setShowAppWindow] = useState()

  useEffect(() => {
    console.log("----> APP START <----")
    HtmlTitle()
  }, []);


  // local storages
  let s_selectedNavItem = localStorage.getItem("selectedNavItem")
  let s_selectedTheme = localStorage.getItem("selectedTheme")

  // set / load selected NavItem (default Load)
  let [ navItemSelectedId, setnavItemSelectedId ] = useState(s_selectedNavItem);
  let [ initialThemeValue, setInitialThemeValue ] = useState(s_selectedTheme);
  if (!s_selectedNavItem) {
   localStorage.setItem("selectedNavItem", "ni_home");
  }
  // if no Items are setted, set Home as default
  if(!navItemSelectedId){
    navItemSelectedId = "ni_home";
  }

  if (!s_selectedTheme) {
    localStorage.setItem("selectedTheme", "oceansground");
   }
   if(!initialThemeValue){
    initialThemeValue = "oceansground";
  }
  //--------------- Theme muss noch gespeichert werden, close save-setLocalStorage in core auslagern, variablen wie ni_home ebenfalls vereinfachen

  console.log("kein THEME VAL->" + initialThemeValue)
  console.log('💽 storage default: '+ s_selectedNavItem + " "+s_selectedTheme)
  //Init default Theme via arry and pass it into themeValue
  const InitTheme = () => {
    const themeSelectArray = AppStyle()
    const selecteThemeObject = themeSelectArray.themeArray.find(({ dIKey }) => dIKey === initialThemeValue)
    const themeValue = selecteThemeObject
    console.log(themeValue)
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
    const factoryThemeCss = fs.readFileSync(path.resolve(__dirname, '../../../../../../src/themes/'+currentThemeFolder+'/style.css'), 'utf8')
    document.head.insertAdjacentHTML("beforeend", `<style id='factory_themes'>`+factoryThemeCss+`</style>`)

  }, [themeValue]);

    //set language
    const autoLang = AutoLang()
    //select default language
    const InitialLangValue = () => {
      const langValue = autoLang;
      return langValue;
    };

    const [langValue, setlangValue] = useState(InitialLangValue)

    //check if file exists (DONT WORK)
    const fs = require("fs");
    const path = "./data/user/backup.mybackup5";

    if (fs.existsSync(path)) {
      // path exists
      console.log("exists:", path);
    } else {
      console.log("DOES NOT exist:", path);
    }

    //Contex Menu
    const [contexMObject, setContexMObject] = useState('');
    const [contexMenuShow, setContexMenuShow] = useState(false);
    const [contexMPos, setContexMPos] = useState('')

    const contexMRef = useRef(null);
    const contexMCustomFunction = (prop) => {
      console.log("------ CONTEX MENU VAL: "+prop)
    };

  return (
    <ReactCursorPosition>
      <QuickInfo quickinfovis={quickinfovis} setquickinfovis={setquickinfovis} quickinfoTitle={quickinfoTitle} quickinfoText={quickinfoText}/>
      <ClickOutside activateCO={contexMenuShow} setCOState={setContexMenuShow}>
        <ContexMenu contexMObject={contexMObject} contexMenuDisabled={false}
                          contexMenuShow={contexMenuShow} setContexMenuShow={setContexMenuShow}
                          setContexMObject={setContexMObject} contexMPos={contexMPos} contexMRef={contexMRef} contexMCustomFunction={contexMCustomFunction}/>
      </ClickOutside>
      <div className="app-container" >

        <AppTitleBar navItemSelectedId={navItemSelectedId}/>
        {/* titel_bar_backgroundcolor={jStyle.titel_bar_backgroundcolor} */}
        <div className="app-background" >
        {/* style={{backgroundColor: appbgcolor,backgroundImage: 'url('+appbgwallpaper+')',}} */}
          <Navigation s_selectedNavItem={s_selectedNavItem} navItemSelectedId={navItemSelectedId} setnavItemSelectedId={setnavItemSelectedId} />
          {/* blur={jStyle.blur} */}
          <div className="app-content">
            <BackupWindow showAppWindow={showAppWindow} setShowAppWindow={setShowAppWindow}
                          navItemSelectedId={navItemSelectedId} showCardDetails={showCardDetails}
                          setShowCardDetails={setShowCardDetails} contexMenuShows={contexMenuShow}
                          setContexMenuShow={setContexMenuShow} setContexMObject={setContexMObject} setContexMPos={setContexMPos}/>
            <HomeWindow showAppWindow={showAppWindow} navItemSelectedId={navItemSelectedId} />
            <RestoreWindow showAppWindow={showAppWindow} navItemSelectedId={navItemSelectedId} />
            <OptionsWindow showAppWindow={showAppWindow} navItemSelectedId={navItemSelectedId} />
            <ConfigWindow showAppWindow={showAppWindow} navItemSelectedId={navItemSelectedId} themeValue={themeValue}
                          setthemeValue={setthemeValue} langValue={langValue} setlangValue={setlangValue}/>
          </div>
        </div>
      </div>
    </ReactCursorPosition>
  )
}

export default App

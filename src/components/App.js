import React, {useState, useEffect} from 'react'
import ReactCursorPosition from 'react-cursor-position';
import './App.css'
import HtmlTitle from '../core/HtmlTitle.jsx';
import AppTitleBar from './ui/AppTitleBar/AppTitleBar.jsx'

import parseStyle from '../core/AppStyle.jsx'

// import wallpaperimage from '/data/user/walllpaper/wallpaper.jpg' //doesnt work -> fix or create a new electron project

import Navigation from './ui/Navigation/Navigation.jsx'
import AddPopUp from './ui/AddPopUp--demo/AddPopUp.jsx'
import HomeWindow from './content/HomeWindow/HomeWindow.jsx'
import BackupWindow from './content/BackupWindow/BackupWindow.jsx'
import RestoreWindow from './content/RestoreWindow/RestoreWindow.jsx'
import OptionsWindow from './content/OptionsWindow/OptionsWindow.jsx'
import ConfigWindow from './content/ConfigWindow/ConfigWindow.jsx'
import QuickInfo from './ui/QuickInfo--notUsed/QuickInfo.jsx'
import AutoLang from '../core/ELanguage/AutoLanguage.jsx'


function App() {

  const [ quickinfovis, setquickinfovis ] = useState(false);
  const [ quickinfoTitle, setquickinfoTitle ] = useState('');
  const [ quickinfoText, setquickinfoText ] = useState('');
  const [showCardDetails, setShowCardDetails] = useState(false);
  let [showAppWindow, setShowAppWindow] = useState()

  useEffect(() => {
    HtmlTitle()
  }, []);

  // local storages
  let s_selectedNavItem = localStorage.getItem("selectedNavItem")

  // set / load selected NavItem (default Load)
  let [ navItemSelectedId, setnavItemSelectedId ] = useState(s_selectedNavItem);
  if (!s_selectedNavItem) {
   localStorage.setItem("selectedNavItem", "ni_home");

  }
  // if no Items are setted, set Home as default
  if(!navItemSelectedId){
    navItemSelectedId = "ni_home";
  }
  console.log('💽 storage default: '+ s_selectedNavItem)

  // set Theme state/select
  //select default theme
  const initialThemeValue = "oceansground"

  const InitialThemeValue = () => {
    const themeValue = initialThemeValue;
    return themeValue;
  };
  const [themeValue, setthemeValue] = useState(InitialThemeValue)

  //get Parsed Style
  const jStylesParsed = parseStyle();

  let SelectedStyle = () => {

    if (themeValue == initialThemeValue) {
      let selectedStyle = jStylesParsed.jStyleOceansGround
      return selectedStyle
    }

    if (themeValue == "gamergirl") {
      let selectedStyle = jStylesParsed.jStyleGamerGirl
      return selectedStyle
    }

    if (themeValue == null) {
      let selectedStyle = jStylesParsed.jStyleOceansGround
      return selectedStyle
    }
  }

  let jStyle = SelectedStyle();

  if (jStyle.wallpaper == "true") {
      var appbgcolor = ""
      var appbgwallpaper = wallpaperimage
  } else {
      var appbgcolor = jStyle.backgroundcolor
      var appbgwallpaper = ""
  }

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


    return (
        <ReactCursorPosition>
            <QuickInfo quickinfovis={quickinfovis} setquickinfovis={setquickinfovis} quickinfoTitle={quickinfoTitle} quickinfoText={quickinfoText}/>

    <div className="app-container" >

  <AppTitleBar titel_bar_backgroundcolor={jStyle.titel_bar_backgroundcolor} navItemSelectedId={navItemSelectedId} />
    <div className="app-background" style={{backgroundColor: appbgcolor,backgroundImage: 'url('+appbgwallpaper+')',}}>
        <Navigation blur={jStyle.blur} s_selectedNavItem={s_selectedNavItem} navItemSelectedId={navItemSelectedId} setnavItemSelectedId={setnavItemSelectedId} />
            <div className="app-content">
            {/* <AddPopUp addBackupItem={addBackupItem} setaddBackupItem={setaddBackupItem}/> */}
                    <BackupWindow showAppWindow={showAppWindow} setShowAppWindow={setShowAppWindow} navItemSelectedId={navItemSelectedId} showCardDetails={showCardDetails} setShowCardDetails={setShowCardDetails} quickinfovis={quickinfovis} setquickinfovis={setquickinfovis} setquickinfoTitle={setquickinfoTitle} setquickinfoText={setquickinfoText} />
                    <HomeWindow showAppWindow={showAppWindow} navItemSelectedId={navItemSelectedId} />
                    <RestoreWindow showAppWindow={showAppWindow} navItemSelectedId={navItemSelectedId} />
                    <OptionsWindow showAppWindow={showAppWindow} navItemSelectedId={navItemSelectedId} />
                    <ConfigWindow showAppWindow={showAppWindow} navItemSelectedId={navItemSelectedId} themeValue={themeValue} setthemeValue={setthemeValue} langValue={langValue} setlangValue={setlangValue}/>
                    </div>
                    </div>
                </div>

        </ReactCursorPosition>
    )
}

export default App

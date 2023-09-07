import React, {useState} from 'react'
import ReactCursorPosition from 'react-cursor-position';
import './App.css'
import TitleBar from './titleBar/titleBar.jsx'

import parseStyle from '../assets/js/parseStyle.asset.jsx'
import useAutoLang from '../assets/js/useAutoLang.asset.jsx'

// import wallpaperimage from '/data/user/walllpaper/wallpaper.jpg' //doesnt work -> fix or create a new electron project

import Navigation from './navigation/navigation.jsx'
import HomeWindow from './content/homeWindow/homeWindow.jsx'
import BackupWindow from './content/backupWindow/backupWindow.jsx'
import RestoreWindow from './content/restoreWindow/restoreWindow.jsx'
import OptionsWindow from './content/optionsWindow/optionsWindow.jsx'
import ConfigWindow from './content/configWindow/configWindow.jsx'
import QuickInfo from './quickInfo/quickInfo.jsx'


function App() {

  const [ quickinfovis, setquickinfovis ] = useState(false);
  const [ quickinfoTitle, setquickinfoTitle ] = useState('');
  const [ quickinfoText, setquickinfoText ] = useState('');

  // set Theme state/select
  //select default theme
  const InitialThemeValue = () => {
    const themeValue = "mb5darktheme";
    return themeValue;
  };
  const [themeValue, setthemeValue] = useState(InitialThemeValue)


  
  //get Parsed Style
  const jStylesParsed = parseStyle();

  
  let SelectedStyle = () => {

    if (themeValue == "mb5darktheme") {
      let selectedStyle = jStylesParsed.jStyleDark
      return selectedStyle
    }

    if (themeValue == "mb5lighttheme") {
      let selectedStyle = jStylesParsed.jStyleLight
      return selectedStyle
    }

    if (themeValue == null) {
      let selectedStyle = jStylesParsed.jStyleDark
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

  const autoLang = useAutoLang()

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

  <TitleBar titel_bar_backgroundcolor={jStyle.titel_bar_backgroundcolor} />
    <div className="app-background" style={{backgroundColor: appbgcolor,backgroundImage: 'url('+appbgwallpaper+')',}}>    
        <Navigation blur={jStyle.blur} />
            <div className="app-content">
                    <BackupWindow quickinfovis={quickinfovis} setquickinfovis={setquickinfovis} setquickinfoTitle={setquickinfoTitle} setquickinfoText={setquickinfoText} />  
                    <HomeWindow /> 
                    <RestoreWindow />
                    <OptionsWindow /> 
                    <ConfigWindow themeValue={themeValue} setthemeValue={setthemeValue} langValue={langValue} setlangValue={setlangValue}/> 
                    </div>
                    </div>
                </div>

        </ReactCursorPosition> 
    )
}

export default App
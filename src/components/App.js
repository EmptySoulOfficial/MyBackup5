import React, {useState} from 'react'
import ReactCursorPosition from 'react-cursor-position';
import './App.css'
import TitleBar from './titleBar/titleBar.jsx'

import parseStyle from '../assets/js/parseStyle.asset.jsx'

import wallpaperimage from '../user/wallpaper/wallpaper.jpg'

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

    //set jStyle from user style json
    const jStyle = parseStyle();

    if (jStyle.wallpaper == "true") {

        var appbgcolor = ""
        var appbgwallpaper = wallpaperimage
    } else {
        var appbgcolor = jStyle.backgroundcolor
        var appbgwallpaper = ""
    }

    //check if file exists (DONT WORK)
    const fs = require("fs");

    const path = "../user/data/backup.mybackup5";
    
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
                    <ConfigWindow /> 
                    </div>
                    </div>
                </div>

        </ReactCursorPosition> 
    )
}

export default App
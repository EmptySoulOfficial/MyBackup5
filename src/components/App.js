import React, {useState} from 'react'
import './App.css'
import TitleBar from './titleBar/titleBar.jsx'

import parseStyle from '../assets/js/parseStyle.asset.jsx'
import wallpaperimage from '../user/wallpaper/wallpaper.jpg'

import Navigation from './navigation/navigation.jsx'
import HomeWindow from './content/homeWindow/homeWindow.jsx'
import BackupWindow from './content/backupWindow/backupWindow.jsx'
import RestoreWindow from './content/restoreWindow/restoreWindow.jsx'


function App() {

    //set jStyle from user style json
    const jStyle = parseStyle();

    if (jStyle.wallpaper == "true") {

        var appbgcolor = ""
        var appbgwallpaper = wallpaperimage
    } else {
        var appbgcolor = jStyle.backgroundcolor
        var appbgwallpaper = ""
    }

    return ( 
   
    <div className="app-container" >
         <TitleBar/>
        <div className="app-background" style={{backgroundColor: appbgcolor,backgroundImage: 'url('+appbgwallpaper+')',}}>
        
            <Navigation blur={jStyle.blur} />
            <div className="app-content">
            <BackupWindow />  
            <HomeWindow /> 
            <RestoreWindow /> 
            </div>
            </div>
        </div>
    )
}

export default App
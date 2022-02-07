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
        <ReactCursorPosition>
            <QuickInfo quickinfovis={quickinfovis} setquickinfovis={setquickinfovis} quickinfoTitle={quickinfoTitle} />

    <div className="app-container" >

  <TitleBar/>
    <div className="app-background" style={{backgroundColor: appbgcolor,backgroundImage: 'url('+appbgwallpaper+')',}}>
        <Navigation blur={jStyle.blur} />
            <div className="app-content">
                    <BackupWindow quickinfovis={quickinfovis} setquickinfovis={setquickinfovis} quickinfoTitle={quickinfoTitle} setquickinfoTitle={setquickinfoTitle} />  
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
import React, { useEffect, useState } from "react"
import './AppLoad.css'
import Logo from "../ui/Logo/Logo.jsx"

function AppLoad() {

  const [preloadState, setPreLoadState] = useState(false)
 let [currentLoadtext, setCurrentLoadText] = useState("loading...")
  let tryCount = 0

  let userConfigPath = './data/config.mb1'
  const [userConfigPathState, setUserConfigPathState] = useState(userConfigPath)


  useEffect(() => {
    const fs = require('fs')
    const path = require('path')
    let userConfigPathResolve = path.resolve(userConfigPathState)

    checkUserConfig()

    //Check User Config
    function checkUserConfig() {
      tryCount ++

      if (tryCount === 3) {
        //Set Errortext
          setCurrentLoadText("An error has occurred! (Unable to load or create data)")
      }else{

        if(fs.existsSync(userConfigPathResolve)){
          const userConfig = fs.readFileSync(userConfigPathResolve, 'utf8')
          setPreLoadState(true)
        }else {
          currentLoadtext = "set up user data..."

          const newUserData = new File(["text"], userConfigPath, {
            type: "text/plain",
          });
          setUserConfigPathState(null)
          setTimeout(function(){
            setUserConfigPathState(userConfigPath)
          }, 100)
          userConfigPathState? checkUserConfig(): null
        }
      }
    }

  },[])

  if (preloadState) {
    const {ipcRenderer} = require('electron');
    setTimeout(function(){
      currentLoadtext = "starting app..."
      ipcRenderer.send('apppreload-ok')
    },100)
  }


  return(
    <div className="AppLoad">
     {/* <Logo/> */}
     <div className="LoadingSpinner-container">
      <div className="LoadingSpinner-Background">
        <span className="LoadingSpinner"></span>
        <span className="LoadingSpinner-2"></span>
        <span className="LoadingSpinner-3"></span>
        <span className="LoadingSpinner-4"></span>
      </div>
     </div>
      <div className="Loading-main-container">
        <div className="LoadingHeadline">
          My Backup
        </div>
        <div className="LoadingText">
          {currentLoadtext}
        </div>
      </div>
    </div>
  )
}

export default AppLoad

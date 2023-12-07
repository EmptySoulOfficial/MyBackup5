import React, { useEffect, useState } from "react"
import classNames from "classnames"
import './AppLoad.css'
import Logo from "../ui/Logo/Logo.jsx"
import { Template_UCONFHeader, getNewUserConfData, Template_UBAHeader } from "../../core/DefaultData/ParseDefaultData.js"
import { appversiondata } from "../../core/AppVersion.js"

function AppLoad() {

  //ToDo: Create new Data Folder!


  const appVData = appversiondata()
  const appFileId = appVData.app_file_id

  const [preloadState, setPreLoadState] = useState(false)
  let [currentLoadtext, setCurrentLoadText] = useState("Welcome")
  let tryCount = 0

  let userConfigPath = './data/config.mb1'
  let userBackupsPath = './data/backups/backups.mb1'
  const [userConfigPathState, setUserConfigPathState] = useState(userConfigPath)
  const [userBackupsPathState, setUserBackupsPathState] = useState(userBackupsPath)
  const [disableLoadingSpinner, setDisableLoadingSpinner] = useState(false)
  let uConfFile_Header = Template_UCONFHeader()
  let uConfData = getNewUserConfData()
  let uBackupsFile_Header = Template_UBAHeader()

  useEffect(() => {
    const fs = require('fs')
    const path = require('path')
    let userConfigPathResolve = path.resolve(userConfigPathState)
    let userBackupsPathResolve = path.resolve(userBackupsPathState)

    checkUserConfig()

    //Check User Config
    function checkUserConfig() {
      tryCount ++

      if (tryCount === 3) {
        //Set Errortext
          setCurrentLoadText("An error has occurred!")
          setDisableLoadingSpinner(true)
          setTimeout(function(){
            const {ipcRenderer} = require('electron');
            ipcRenderer.send('close-loading')
          }, 5000)
      }else{
        setCurrentLoadText("loading...")

        if(fs.existsSync(userConfigPathResolve)){
          const userConfig = fs.readFileSync(userConfigPathResolve, 'utf8')
           setPreLoadState(true)
        }else {
          setCurrentLoadText("set up user data...")
          //Generate full File content
          let uConfFileContent = uConfFile_Header
          uConfFileContent[appFileId].push(uConfData)
          //Write File content
          fs.writeFile(userConfigPath, JSON.stringify(uConfFileContent), err => {
            if (err) setCurrentLoadText("Error writing file:", err);
          });
          setUserConfigPathState(null)
          setTimeout(function(){
            setUserConfigPathState(userConfigPath)
          }, 100)
          setTimeout(function(){
            userConfigPathState? checkUserConfig(): null
          },500)
        }
        if(fs.existsSync(userBackupsPathResolve)){
          // const userConfig = fs.readFileSync(userConfigPathResolve, 'utf8')
          //  setPreLoadState(true)
        }else {
          setCurrentLoadText("set up user data...")

          fs.writeFile(userBackupsPath, JSON.stringify(uBackupsFile_Header), err => {
            if (err) setCurrentLoadText("Error writing file:", err);
          });
          setUserBackupsPathState(null)
          setTimeout(function(){
            setUserBackupsPathState(userBackupsPath)
          }, 100)
          setTimeout(function(){
            userBackupsPathState? checkUserBackups(): null
          },500)
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
     <div  className={classNames({'VisibilityHidden': disableLoadingSpinner, '' : !disableLoadingSpinner }, 'LoadingSpinner-container')}>
      <div  className='LoadingSpinner-Background'>
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

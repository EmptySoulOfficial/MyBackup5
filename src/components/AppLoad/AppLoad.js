import React, { useEffect, useState } from "react"
import classNames from "classnames"
import './AppLoad.css'
import Logo from "../ui/Logo/Logo.jsx"
import { Template_UCONFHeader, getNewUserConfData, Template_UBAHeader, AppEnvData } from "../../core/DefaultData/ParseDefaultData.js"
import { appversiondata } from "../../core/AppVersion.js"

function AppLoad() {

  const appVData = appversiondata()
  const appFileId = appVData.app_file_id

  let appEnvData = AppEnvData()

  const [preloadState, setPreLoadState] = useState(false)
  let [currentLoadtext, setCurrentLoadText] = useState("Welcome")
  let tryCount = 0
  // Data Folder Structure
  let userDataFolderPath = appEnvData.path_dataRoot
  let userDataBackupsFolderPath = appEnvData.path_dataBackups
  let userDataBackupsIconsFolderPath = appEnvData.path_dataIcons
  //Data Files
  let userConfigPath = appEnvData.path_dataRoot+"/"+appEnvData.file_dataUserConfig
  let userBackupsPath = appEnvData.path_dataBackups+"/"+appEnvData.file_dataUserBackups
  let userbackupCustomTempIconSVG = appEnvData.file_dataTempIconSvg
  let userbackupCustomTempIconPNG = appEnvData.file_dataTempIconPng

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
    let userDataBackupIconPathsResolve = path.resolve(userDataBackupsIconsFolderPath)

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
            ipcRenderer.send('close-me')
            ipcRenderer.send('close-loading')
          }, 5000)
      }else{
        setCurrentLoadText("loading...")
        // check app root premissions (mac mostly)
        fs.access('./', fs.constants.R_OK | fs.constants.W_OK, (err) => {
          if (err) {
            setCurrentLoadText("Error: no R/W permission.", err);
            alert("Error: no R/W permission. "+ err)
            checkUserConfig()
          }
        })

        if(!fs.existsSync(userDataFolderPath)){
          setCurrentLoadText("creating data paths...")
          fs.mkdirSync(userDataFolderPath, err => {
            if (err) setCurrentLoadText("Error: unable to write "+userDataFolderPath, err);
          });
          fs.mkdirSync(userDataBackupsFolderPath, err => {
            if (err) setCurrentLoadText("Error: unable to write "+userDataBackupsFolderPath, err);
          });
          fs.mkdirSync(userDataBackupsIconsFolderPath,  err => {
            if (err) setCurrentLoadText("Error: unable to write "+userDataBackupsIconsFolderPath, err);
          });
          setTimeout(function(){
            tryCount = 0
            checkUserConfig()
          },500)
        }

        if(fs.existsSync(userConfigPathResolve)){
          const userConfig = fs.readFileSync(userConfigPathResolve, 'utf8')
        }else {
          setCurrentLoadText("set up user data...")
          //Generate full File content
          let uConfFileContent = uConfFile_Header
          uConfFileContent[appFileId].push(uConfData)
          //Write File content
          fs.writeFile(userConfigPath, JSON.stringify(uConfFileContent), err => {
            if (err) {
              setCurrentLoadText("Error writing file:", err);
              checkUserConfig()
            }
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
          //catch error if json is empty / unable to parse
          try {
             JSON.parse(userBackupsPathResolve);
          } catch (error) {
            setCurrentLoadText("unable to parse "+userBackupsPathResolve)
            setTimeout(function(){
              setCurrentLoadText("unlink " + userBackupsPathResolve + "...")
              fs.unlink(userBackupsPathResolve, err => {
                if (err) setCurrentLoadText("unable to remove file:", err);
              });
              checkUserConfig()
            },500)
          }

        }else {
          setCurrentLoadText("set up user data...")

          fs.writeFile(userBackupsPath, JSON.stringify(uBackupsFile_Header), err => {
            if (err) {
              setCurrentLoadText("Error writing file:", err)
              checkUserConfig()
            };
          });
          setUserBackupsPathState(null)
          setTimeout(function(){
            setUserBackupsPathState(userBackupsPath)
          }, 100)
          setTimeout(function(){
            userBackupsPathState? checkUserBackups(): null
          },500)
          setTimeout(function(){
            tryCount = 0
            checkUserConfig()
          },500)
        }
        // clean up temps
        // clean up _tempIcon svg/png
        if(fs.existsSync(userDataBackupIconPathsResolve+"/"+userbackupCustomTempIconSVG)){
          setCurrentLoadText("cleanup temp icon...")
          setTimeout(function(){
            fs.unlink(userDataBackupIconPathsResolve+"/"+userbackupCustomTempIconSVG, err => {
              if (err) setCurrentLoadText("Error clean up file:", err);
            });
          }, 100)
        }
        if(fs.existsSync(userDataBackupIconPathsResolve+"/"+userbackupCustomTempIconPNG)){
          setCurrentLoadText("cleanup temp icon...")
          setTimeout(function(){
            fs.unlink(userDataBackupIconPathsResolve+"/"+userbackupCustomTempIconPNG, err => {
              if (err) setCurrentLoadText("Error clean up file:", err);
            });
          }, 100)
        }
      }
      if(tryCount < 3){
        setPreLoadState(true)
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

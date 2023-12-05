'use strict'


// Import parts of electron to use
const { app, BrowserWindow, remote, globalShortcut } = require('electron')
const path = require('path')
const url = require('url')


let mainWindow
//ggf neue maße: 960 x 640
let myappwidth = 960;
let myappheight = 640
let appTitle = "My Backup";

let loadingwindowwidth = 660;
let loadingwindowheight = 340

// Keep a reference for dev mode
let dev = false

if (process.env.NODE_ENV !== undefined && process.env.NODE_ENV === 'development') {
  dev = true
}

if (process.platform === 'win32') {
  app.commandLine.appendSwitch('high-dpi-support', 'true')
  app.commandLine.appendSwitch('force-device-scale-factor', '1')
}
//fix performance lags via disable hardware accleration
  app.disableHardwareAcceleration();

//window operations (min/close)
const {ipcMain} = require('electron')
ipcMain.on('close-me', (evt, arg) => {
  app.quit()
})

ipcMain.on('minimize', () => {
  mainWindow.minimize();
})

function createWindow() {

  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: myappwidth ,
    height: myappheight ,
    show: false,
    autoHideMenuBar: true,
    icon: path.join(__dirname, 'public/appIcons/win/Icon_MyBackup5-Win.ico'),
    frame: false,
    title: appTitle,
    webPreferences: {
      zoomFactor: 1.0,
      nodeIntegration: true,
      contextIsolation: false,
      // enableRemoteModule: true
    }
  })

  mainWindow.setResizable(false);
  // and load the index.html of the app.
  let indexPath

  if (dev && process.argv.indexOf('--noDevServer') === -1) {
    indexPath = url.format({
      protocol: 'http:',
      host: 'localhost:8080',
      pathname: 'index.html',
      slashes: true
    })
  } else {
    indexPath = url.format({
      protocol: 'file:',
      pathname: path.join(__dirname, 'dist', 'index.html'),
      slashes: true
    })
  }

  mainWindow.loadURL(indexPath)

  // Don't show until we are ready and loaded
  mainWindow.once('ready-to-show', () => {
    mainWindow.show()

    // Open the DevTools automatically if developing
    if (dev) {
      const { default: installExtension, REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer')
      installExtension(REACT_DEVELOPER_TOOLS)
        .catch(err => console.log('Error loading React DevTools: ', err))
      mainWindow.webContents.openDevTools()
    }
  })

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    mainWindow = null
  })
}

app.on('ready', createWindow)

// ⛔⛔ TO DISABLE: Comment this part out and remove enableRemoteModule from BROWSERWINDOW! ⛔⛔
// app.whenReady().then(() => {
  // const { BrowserWindow } = require('electron')
  // globalShortcut.register('CommandOrControl+Shift+K', () => {
    // BrowserWindow.getFocusedWindow().webContents.openDevTools()
  // })
//
  // window.addEventListener('beforeunload', () => {
    // globalShortcut.unregisterAll()
  // })
// })

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

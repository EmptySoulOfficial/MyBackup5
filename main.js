// Modules to control application life and create native browser window
const {app, BrowserWindow, Menu} = require('electron')
const path = require('path')

let mainWindow
let myappwidth = 1000;
let myappheight = 600;

function createWindow () {
  // Create the browser window.

  mainWindow = new BrowserWindow({
    width: myappwidth,
    height: myappheight,
    autoHideMenuBar: true,
    frame: false,
    // show: false,
    webPreferences: {
      zoomFactor: 1.0,
      nodeIntegration: true,
      contextIsolation: false,
      
    }
  })

  // and load the index.html of the app.
  mainWindow.loadURL('http://localhost:3000')
  mainWindow.setResizable(false);
  Menu.setApplicationMenu(false);
  mainWindow.setMenu(null);

  //hide menu bar
  Menu.setApplicationMenu(Menu.buildFromTemplate([]))
 
}


app.whenReady().then(() => {
  createWindow()
  //Open Dev Tools
  mainWindow.webContents.openDevTools();

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

/
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

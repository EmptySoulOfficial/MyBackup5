import React from "react";
import SaveLocalStorage from "./LocalStorage/SaveLocalStorage.jsx";

export function CloseWindow (e, navItemSelectedId, initialThemeValue){
  //Call Set LocalStorage
  navItemSelectedId || initialThemeValue ?
    SaveLocalStorage(navItemSelectedId,initialThemeValue):''
  e.preventDefault();
  const {ipcRenderer} = require('electron');
  ipcRenderer.send('close-me')
}

export function MinimizeWindow (e) {
  e.preventDefault();
  const {ipcRenderer} = require('electron');
  ipcRenderer.send('minimize')
}

import React, { useEffect, useState, useMemo, useRef } from 'react'
import * as themeData from '../themes/themes.json'
import { useParams } from "react-router-dom";


const selectedStyleMock = "oceansground"


const getThemes = "themes"




//Funktion, die Ordner Inhalt mappt, daraus eine dIKey und dIName erstellt, das in ein array packt und an die theme select box schickt
//Zusätzlich werden die Folder Namen zusammen in ein extra objekt gepackt und als pfad-teil zum import/json read und css apply verwendet

function AppStyle () {

  //Generate id and key from themes.json obj
  const jsonObjThemes = JSON.parse(JSON.stringify(themeData)).default

  // Object.keys(jsonObjThemes).map(
    // (themeKey) => {
    // const themeValue = jsonObjThemes[themeKey];
//
//
    // setThemeSelectObject((prevstate) => ([...prevstate,{"dIKey":themeKey,"dIName":themeValue}]))
//
//
//
// });
    let themeArray = [];
    let themeFolder
    let currentThemePath
    let currentIdJsonPath
    let themeJson

    Object.keys(jsonObjThemes).map((themeKey, i) => {
      themeFolder = jsonObjThemes[themeKey]
      //dIName ersetz7en durch style_name jener theme.json
      themeJson = require('../themes/'+themeFolder+'/theme.json');
      themeArray.push({"dIKey":themeKey,"dIName":themeJson[themeKey].style_name})
    });

    //get folder name of themekey z.B. "Gamer Girl"

  const currentStyleCssPath = currentThemePath+"/style.css"


      // import('../themes/GamerGirl/theme.json').then(module => module.default);
      // let admins = require('../themes/Gamer Girl/theme.json');


    //  const currentThemeJson = JSON.parse(JSON.stringify(admins)).default
    //  const currentTheme = currentThemeJson["gamergirl"]
    //  console.log("Style NAME: "+admins["gamergirl"].style_name);

      // const currentThemeIdJson = JSON.parse(JSON.stringify(parseThemeJson)).default

  console.log("---> SELECT THEME ARRAY:")
   console.log(themeArray)


}



export default AppStyle

import React, { useEffect, useState, useMemo, useRef } from 'react'
import * as themeData from '../core/DefaultData/themes.json'
import { useParams } from "react-router-dom";

//Funktion, die Ordner Inhalt mappt, daraus eine dIKey und dIName erstellt, das in ein array packt und an die theme select box schickt
//Zusätzlich werden die Folder Namen zusammen in ein extra objekt gepackt und als pfad-teil zum import/json read und css apply verwendet

function AppStyle () {

  //Generate id and key from themes.json obj
  const jsonObjThemes = JSON.parse(JSON.stringify(themeData)).default
  let themeArray = [];
  let themeFolder
  let themeJson

  Object.keys(jsonObjThemes).map((themeKey, i) => {
    themeFolder = jsonObjThemes[themeKey]
    //dIName ersetz7en durch style_name jener theme.json
    themeJson = require('../themes/'+themeFolder+'/theme.json');
    themeArray.push({"dIKey":themeKey,"dIName":themeJson[themeKey].style_name,
                    "themeAuthor":themeJson[themeKey].style_author, "themeRelease":themeJson[themeKey].style_release,
                    "themeVersion":themeJson[themeKey].style_version, "themeNotes":themeJson[themeKey].style_notes,
                    "themeFolder":themeFolder})
  });

  console.log("[🧩AppStyle] Theme Array: "+themeArray+" ThemeFolder: "+themeFolder)
  return {themeArray}


}

export default AppStyle

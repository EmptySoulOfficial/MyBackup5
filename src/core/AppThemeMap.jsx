import React, { useEffect, useState, useMemo, useRef } from 'react'
import { useParams } from "react-router-dom";
import { FactoryThemeData } from './DefaultData/ParseDefaultData';

function AppThemeMap () {

  //Generate id and key from themes.json obj
  const factoryThemeData = FactoryThemeData()
  let themeArray = [];
  let themeFolder
  let themeJson

  Object.keys(factoryThemeData).map((themeKey, i) => {
    themeFolder = factoryThemeData[themeKey]
    //dIName ersetz7en durch style_name jener theme.json
    themeJson = require('../themes/'+themeFolder+'/theme.json');
    themeArray.push({"dIKey":themeKey,"dIName":themeJson[themeKey].style_name,
                    "themeAuthor":themeJson[themeKey].style_author, "themeRelease":themeJson[themeKey].style_release,
                    "themeVersion":themeJson[themeKey].style_version, "themeNotes":themeJson[themeKey].style_notes,
                    "themeFolder":themeFolder})
  });

  // console.log("[🧩AppThemeMap] Theme Array: "+themeArray+" ThemeFolder: "+themeFolder)
  return {themeArray}
}

export default AppThemeMap

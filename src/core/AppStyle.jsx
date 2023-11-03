import React, { useEffect, useState, conte } from 'react'
import * as themeData from '../themes/themes.json'
import { useParams } from "react-router-dom";


const selectedStyleMock = "oceansground"


const getThemes = "themes"

//Funktion, die Ordner Inhalt mappt, daraus eine dIKey und dIName erstellt, das in ein array packt und an die theme select box schickt
//Zusätzlich werden die Folder Namen zusammen in ein extra objekt gepackt und als pfad-teil zum import/json read und css apply verwendet

const AppStyle = () => {


      const jsonObjThemes = JSON.parse(JSON.stringify(themeData)).default

      const currentThemePath =  "src/themes/"+jsonObjThemes[selectedStyleMock]
      const currentIdJsonPath = currentThemePath+"/id.json"



        fetch(currentIdJsonPath, {
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => console.log(data));

      // const currentThemeIdJson = JSON.parse(JSON.stringify(parseThemeJson)).default

   console.log("Current Path: "+currentThemePath)
   console.log("Current ID PATH: "+currentIdJsonPath)

}



export default AppStyle

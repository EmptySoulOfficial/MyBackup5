import React, {useEffect, useState} from "react";
import Icon from "../Icon/Icon.jsx";

function IconSwitch({iconPathOrName, isImg}) {

  //-----------⛔ Für RELEASE "path.resolve" zu folgendem code ändern -> path.join(__dirname,'../src/themes/',currentThemeFolder,'/style.css') ⛔
// Code in CardDetails einbauen?
  const loadbackupTempImage = ''
  const resolvedBackuptempImage = path.resolve('../../../.'+iconPathOrName)
  if(fs.existsSync(resolvedBackuptempImage)){
    loadbackupTempImage = require(resolvedBackuptempImage)
    console.log('Image resolve: '+resolvedBackuptempImage)
  }
  //-----------⛔ ⛔ ---------------//
  // let test = require('../../../../data/backups/_icons/_tempIcon.png')
  // const [isImg, setIsImg] = useState(false)
  // iconPathOrName? console.log('path da: '+iconPathOrName): console.log('kein Path')
  // iconPathOrName.contains('_icons')? setIsImg(true): setIsImg(false): null

  return(
    <>
     {isImg ? <img src={loadbackupTempImage.default} />: <Icon name={iconPathOrName} color="var(--color-low)" size={80} />}
    </>
  )
}

export default IconSwitch

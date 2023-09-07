//ELanguage V 2.1
import * as languageData from './lang/lang.json'
import AutoLang from './AutoLanguage.jsx'

const langISOCode = AutoLang()
const jsonObj = JSON.parse(JSON.stringify(languageData)).default
const langObj = jsonObj[langISOCode] ? jsonObj[langISOCode]: jsonObj["en"];

//set html lang attr to readed iso
document.documentElement.lang = langISOCode;

export const getLang = () => langObj;
export const getLangVar = (key) => langObj[key]

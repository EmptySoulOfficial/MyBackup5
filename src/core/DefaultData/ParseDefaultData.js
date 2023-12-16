//Parse default data
import * as newBackupItem from './data/NewBackupItem.json'
import * as themeData from './data/themes.json'
import * as ubaHeader from './data/mb1Templates/UBAHeader.json'
import * as uconfHeader from './data/mb1Templates/UCONFHeader.json'
import * as newUserConf from './data/NewUserConfig.json'

const newBackupData = JSON.parse(JSON.stringify(newBackupItem)).default
const newUserConfData = JSON.parse(JSON.stringify(newUserConf)).default
const jsonObjThemes = JSON.parse(JSON.stringify(themeData)).default
const jsonUbaHeaderTemplate = JSON.parse(JSON.stringify(ubaHeader)).default
const jsonUconfHeaderTemplate = JSON.parse(JSON.stringify(uconfHeader)).default

export const getNewBackupData = () => newBackupData
export const getNewUserConfData = () => newUserConfData
export const FactoryThemeData = () => jsonObjThemes
export const Template_UBAHeader = () => jsonUbaHeaderTemplate
export const Template_UCONFHeader = () => jsonUconfHeaderTemplate

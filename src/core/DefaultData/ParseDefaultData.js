//Parse default data
import * as newBackupItem from './data/NewBackupItem.json'
import * as themeData from './data/themes.json'
import * as ubaHeader from './data/mb1Templates/UBAHeader.json'

const newBackupData = JSON.parse(JSON.stringify(newBackupItem)).default
const jsonObjThemes = JSON.parse(JSON.stringify(themeData)).default
const jsonUbaHeaderTemplate = JSON.parse(JSON.stringify(ubaHeader)).default

export const getNewBackupData = () => newBackupData
export const FactoryThemeData = () => jsonObjThemes
export const Template_UBAHeader = () => jsonUbaHeaderTemplate

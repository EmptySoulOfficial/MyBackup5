//ELanguage V 2.1
import * as newBackupItem from './data/NewBackupItem.json'
import * as themeData from './data/themes.json'

const newBackupData = JSON.parse(JSON.stringify(newBackupItem)).default
const jsonObjThemes = JSON.parse(JSON.stringify(themeData)).default

export const getNewBackupData = () => newBackupData
export const FactoryThemeData = () => jsonObjThemes

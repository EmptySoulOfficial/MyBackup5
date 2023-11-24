//Parse User Data from data folder

import fs from 'fs'
import path from 'path'

const backupsFilePath = path.resolve('./data/backups/backups.mb1')

// WENN DATEI NICHT EXISTIERT -> erstellen oder user eine importieren lassen
const fileContents = fs.readFileSync(backupsFilePath, 'utf8')
const userDataType_UserBackupArray = 'UBA'
const userDataType_UserConfig = 'UCONF'
const userDataVID = '$MyBackup1'
const userData_errorReturn = 'unabletoread'
let userdata_backups

const userdata_backups_stringify = JSON.parse(fileContents)

if (userdata_backups_stringify['data_type'] === userDataType_UserBackupArray) {
  userdata_backups = userdata_backups_stringify[userDataVID] ? userdata_backups_stringify : console.log('ERROR MB1 Filetype')
} else {
  console.log('Incorrect data type')
}


export const getUserData_BackupsArray = () => userdata_backups[userDataVID]
export const getUserData_Backups = () => userdata_backups


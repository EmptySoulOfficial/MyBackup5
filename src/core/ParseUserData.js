//Parse User Data from data folder
import { Template_UBAHeader } from './DefaultData/ParseDefaultData'
import fs from 'fs'
import path from 'path'

const backupsFilePath = path.resolve('./data/backups/backups.mb1')
const TemplateUBAMB1 = Template_UBAHeader()
const TemplateUBAMB1FileHeader = JSON.stringify(TemplateUBAMB1)
console.log(TemplateUBAMB1FileHeader)

// WENN DATEI NICHT EXISTIERT -> leere datei erstellen.
// Ladebox erscheint und erstellt ALLE (falls nötig auch andere) neue Dateien und trifft vorbereitungen
// User soll in Home eigene backups datei importieren können
// MyBackup1 Prop in variable zusammenfassen und in die Templates hineinladen
// Wenn user config nicht existiert, wird diese auch erstellt und mit einem forststart true ausgefüllt. -> Startet ladebildschirm und user guide
if(fs.existsSync(backupsFilePath)) {


}
else {
  fs.writeFile(backupsFilePath, TemplateUBAMB1FileHeader, (err)=>{
    if(err)
    console.log(err)
  })
}
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


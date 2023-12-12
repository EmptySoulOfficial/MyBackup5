# My Backup
#### backup Software By Empty Soul
#### Windows / Mac

## HERE SOME INFORMATIONS ABOUT THE SOFTWARE

## Development Informations
install = npm i
run = npm run start (electron-run alias)
Used Node Version: 16.13.0
Installed Java: 11.0.16
### Change window title
----------------------
Enter Window name in the builded index.html project. (resources\app\dist\index.html)
_________
### RELEASE
- Change App-Titile in dist/index.html. (Eaven if Title is automatically changed by HTMLTitle.jsx)
- ⚠️ Check if dev-tools are disabled/commented out (see main.js)
- ⚠️ Change "path.resolve" to "path.join in app.js (else app does not start up -> informations in App.js)
- Check window title in main.js
- Run build via commands

### Build Commands
 npm run package (wihtout security)
 ./build-app-asar.sh (via git bash - with asar packaging)

npm run package
electron-packager . MyBackup5 --overwrite --asar=true --platform=win32 --arch=ia32 --icon=public/appIcons/win/icon_mybackup5.ico --prune=true --out=release-builds --version-string.CompanyName=CE --version-string.FileDescription=CE --version-string.ProductName="My Backup 5"

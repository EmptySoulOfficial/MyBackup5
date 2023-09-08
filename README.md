# My Backup 5
#### backup Software By Empty Soul
#### Windows / Mac

<<<<<<< HEAD
## HERE SOME INFORMATIONS ABOUT THE SOFTWARE
=======
## SOME INFOS
some informations
>>>>>>> dev


_____ 
### Installed packages
#### SVG url loader (only needed for new projects)
install: npm i svg-url-loader --save-dev
config webpack js:

Copy / paste *code below this rules:
 module.exports = {
  module: {
    rules: [

*code:
```js
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              encoding: 'base64'
            },
          },
        ],
      },
```
-----------------------
make shure do delete all other svg importer in the webpack builds!

## Development Informations
install = npm i
run = npm run start (electron-run alias)
Used Node Version: 16.13.0
<<<<<<< HEAD
=======
Installed Java: 11.0.16
>>>>>>> dev
### Change window title
----------------------
Enter Window name in the builded index.html project. (resources\app\dist\index.html)

### Build
----------------------
 npm run package

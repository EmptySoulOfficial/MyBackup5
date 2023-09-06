##dev infos
install = npm i
run = npm run start (electron-run alias)

Usable Node Version: 16.13.0
-----------------
SVG url loader (only needed for new projects)
install: npm i svg-url-loader --save-dev
config webpack js:

Paste *code under -----------
 module.exports = {
  module: {
    rules: [
-----------
*code:

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
-----------------------
make shure do delete all other svg importer in the webpack builds!

###Build
----------------------
 npm run package

###Change window title
----------------------
enter Window name in the builded index.html project. (resources\app\dist\index.html)

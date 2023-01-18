#Infos

###Install
npm i

###Run
npm run start 

###Build
npm run package

###Where to find Language Information:
./LANGUAGE.md


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

###Change window title
Enter Window name in the builded index.html project. (resources\app\dist\index.html)
import React, { useState } from 'react'
import { render } from 'react-dom'
// import App from './components/App.jsx'
import { HashRouter, BrowserRouter,Route, Routes } from "react-router-dom";
import AppLoad from './components/AppLoad/AppLoad.js';



let root = document.createElement('div')
root.id = 'root'
document.body.appendChild(root)

function importApp(){
  const componentsApp = require('./components/App.jsx', true);
}

render(<HashRouter>
  <Routes>
    {/* {appData_preload? <Route path="/" element={<App/>} exact /> : null} */}
    <Route path="/load" element={<AppLoad/>} exact />
  </Routes>
</HashRouter>, document.getElementById('root'))

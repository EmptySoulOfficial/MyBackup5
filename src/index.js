import React from 'react'
import { render } from 'react-dom'
import App from './components/App.jsx'
import { HashRouter, BrowserRouter,Route, Routes } from "react-router-dom";
import AppLoad from './components/AppLoad/AppLoad.js';

let root = document.createElement('div')
root.id = 'root'
document.body.appendChild(root)

render(<HashRouter>
  <Routes>
    <Route path="/" element={<App/>} exact />
    <Route path="/load" element={<AppLoad/>} exact />
  </Routes>
</HashRouter>, document.getElementById('root'))

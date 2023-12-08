import React, { useState, lazy, Suspense  } from 'react'
import { render } from 'react-dom'
import { HashRouter, BrowserRouter,Route, Routes } from "react-router-dom";
import AppLoad from './components/AppLoad/AppLoad.js';
import LazyLoadClip from './components/ui/LazyLoadClip/LazyLoadClip.jsx';
// Import App only when needen / routes
const App = lazy(() => import('./components/App.jsx'))

let root = document.createElement('div')
root.id = 'root'
document.body.appendChild(root)

render(
<HashRouter>
<Suspense fallback={<LazyLoadClip/>}>
  <Routes>
    <Route path="/" element={<App/>} exact />
    <Route path="/load" element={<AppLoad/>} exact />
  </Routes>
  </Suspense>
</HashRouter>, document.getElementById('root'))

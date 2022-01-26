import React from 'react'
import './App.css'
import Navigation from './navigation/navigation.jsx'

import BackupWindow from './content/backupWindow/backupWindow.jsx'


function App() {
    return ( 
    <div className = "app-container" >
        <div className = "app-background" >
            <Navigation/>
            <div className="app-content">
            <BackupWindow/>
            </div>
        </div>
    </div>
    )
}

export default App
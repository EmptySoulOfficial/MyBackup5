import React from 'react'
import './navigation.css'

import Logo from '../logo/logo.jsx'

import NavItem from './navItem/navItem.jsx'

function Navigation() {
  return (
    <nav className="navigation">
        <div className="navigation-logosection">
        <Logo/>
        </div>
        <div className="navigation_container">
            
            <NavItem/>
        </div>
    </nav>
  )
}

export default Navigation
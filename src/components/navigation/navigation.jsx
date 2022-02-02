import React from 'react'
import './navigation.css'

import Logo from '../logo/logo.jsx'
import NavItem from './navItem/navItem.jsx'

import parseLanguages from '../../assets/js/parseLanguages.asset.jsx'

import './navItem/setItemActive.jsx'


function Navigation({blur}) {
  


  const lang_text = parseLanguages();

  return (
    <nav className="navigation" style={{backdropFilter: blur}}>
        <div id="ni_home" className="nav-item navigation-logosection">
          <div className="Logo-container">
            <Logo/>
            <div className="nav-item_bar"></div>
          </div>
        </div> 
        <div className="navigation_container">
            <div className="item-container">
                <NavItem label={lang_text.menulabel_backup}  navItemId={"ni_backup"} iconAlt="create backup icon" navitemdefaultselected={true}/>
                <NavItem label={lang_text.menulabel_restore} navItemId={"ni_restore"} iconAlt="restore icon" navitemdefaultselected={false}/>
                <NavItem label={lang_text.menulabel_manage}  navItemId={"ni_options"} iconAlt="manage backup icon" navitemdefaultselected={false}/>
            </div>
            <div className="config-button_container">
            <NavItem label={lang_text.menulabel_config}  navitemdefaultselected={false} iconAlt="manage backup icon"/>
            </div>
        </div>
    </nav>
  )
}

export default Navigation
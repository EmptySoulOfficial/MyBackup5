import React from 'react'
import './navigation.css'

import Logo from '../logo/logo.jsx'
import NavItem from './navItem/navItem.jsx'

import parseLanguages from '../../assets/js/parseLanguages.asset.jsx'

import './navItem/lib/setItemActive.jsx'


function Navigation({blur}) {
  


  const lang_text = parseLanguages();

  return (
    <nav className="navigation" style={{backdropFilter: blur}}>
        <div id="ni_home" className="nav-item nav-item--active navigation-logosection" >
        <div className="nav-item_bar"></div>
          <div className="Logo-container">
            <Logo/>
          </div>
        </div> 
        <div className="navigation_container">
            <div className="item-container">
                <NavItem label={lang_text.menulabel_backup}  navItemId={"ni_backup"} iconName={"backup"} iconAlt="create backup icon" navitemdefaultselected={false}/>
                <NavItem label={lang_text.menulabel_restore} navItemId={"ni_restore"} iconName={"restore"} iconAlt="restore icon" navitemdefaultselected={false}/>
                <NavItem label={lang_text.menulabel_manage}  navItemId={"ni_options"} iconName={"options"} iconAlt="manage backup icon" navitemdefaultselected={false}/>
            </div>
            <div className="config-button_container">
            <NavItem label={lang_text.menulabel_config}  navItemId={"ni_config"} iconName={"config"} navitemdefaultselected={false} iconAlt="manage backup icon"/>
            </div>
        </div>
    </nav>
  )
}

export default Navigation
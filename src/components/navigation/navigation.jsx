import React, {useEffect, useRef} from 'react'
import $ from 'jquery'
import './navigation.css'

import Logo from '../logo/logo.jsx'
import NavItem from './navItem/navItem.jsx'

import parseLanguages from '../../assets/js/parseLanguages.asset.jsx'

import './navItem/lib/setItemActive.jsx'

function Navigation({blur}) {
  
  //get active navigation item
  localStorage.getItem('activemainnavigation') ? localStorage.getItem('activemainnavigation') : localStorage.setItem('activemainnavigation', 'home')
  let activenavigationitem = localStorage.getItem('activemainnavigation')

  console.log('active navitem:' + activenavigationitem)

  const lang_text = parseLanguages();
  
  return (
    <nav className="navigation" style={{backdropFilter: blur}}>
        
        {/* <div className="nav-item_bar"></div> */}
          {/* <div className="Logo-container"> */}
            {/* <Logo/> */}
          {/* </div> */}
          <NavItem label={lang_text.menulabel_home}  navItemId={"ni_home"} iconName={"home"} iconAlt="home icon" navitemdefaultselected={true} />
       
        <div className="navigation_container">
            <div className="item-container">
                <NavItem  label={lang_text.menulabel_backup}  navItemId={"ni_backup"} iconName={"backup"} iconAlt="create backup icon" navitemdefaultselected={false} />
                <NavItem  label={lang_text.menulabel_restore} navItemId={"ni_restore"} iconName={"restore"} iconAlt="restore icon" navitemdefaultselected={false} />
                <NavItem  label={lang_text.menulabel_manage}  navItemId={"ni_options"} iconName={"options"} iconAlt="manage backup icon" navitemdefaultselected={false} />
            </div>
            <div className="config-button_container">
            <NavItem label={lang_text.menulabel_config}  navItemId={"ni_config"} iconName={"config"} navitemdefaultselected={false} iconAlt="manage backup icon" />
            </div>
        </div>
    </nav>
  )
}

export default Navigation
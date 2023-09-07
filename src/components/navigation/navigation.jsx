import React, {useEffect, useRef} from 'react'
import $ from 'jquery'
import './navigation.css'

import Logo from '../logo/logo.jsx'
import NavItem from './navItem/navItem.jsx'

import { getLang, getLangVarable } from '../../assets/js/ELanguage/ELanguage.js'

import './navItem/lib/setItemActive.jsx'

function Navigation({blur}) {



  const eLang = getLang();

  return (
    <nav className="navigation" style={{backdropFilter: blur}}>

        {/* <div className="nav-item_bar"></div> */}
          {/* <div className="Logo-container"> */}
            {/* <Logo/> */}
          {/* </div> */}
          <NavItem label={eLang.menulabel_home}  navItemId={"ni_home"} iconName={"home"} iconAlt="home icon" navitemdefaultselected={false} />

        <div className="navigation_container">
            <div className="item-container">
                <NavItem  label={eLang.menulabel_backup}  navItemId={"ni_backup"} iconName={"backup"} iconAlt="create backup icon" navitemdefaultselected={true} />
                <NavItem  label={eLang.menulabel_restore} navItemId={"ni_restore"} iconName={"restore"} iconAlt="restore icon" navitemdefaultselected={false} />
                <NavItem  label={eLang.menulabel_manage}  navItemId={"ni_options"} iconName={"options"} iconAlt="manage backup icon" navitemdefaultselected={false} />
            </div>
            <div className="config-button_container">
            <NavItem label={eLang.menulabel_config}  navItemId={"ni_config"} iconName={"config"} navitemdefaultselected={false} iconAlt="manage backup icon" />
            </div>
        </div>
    </nav>
  )
}

export default Navigation

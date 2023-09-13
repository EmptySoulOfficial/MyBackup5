import React, {useEffect, useRef, useState} from 'react'
import $ from 'jquery'
import './Navigation.css'
import Logo from '../Logo/Logo.jsx'
import NavItem from './lib/navItem/navItem.jsx'
import { getLang, getLangVarable } from '../../../assets/js/ELanguage/ELanguage.js'


function Navigation({blur, s_selectedNavItem, setnavItemSelectedId, navItemSelectedId}) {

  const [ navItemDefaultSelected, setnavItemDefaultSelected ] = useState();

  console.log("🧭 Current Storage s:Item: "+s_selectedNavItem)

  const eLang = getLang();

  return (
    <nav className="navigation" style={{backdropFilter: blur}}>

        {/* <div className="nav-item_bar"></div> */}
          {/* <div className="Logo-container"> */}
            {/* <Logo/> */}
          {/* </div> */}
          <NavItem label={eLang.menulabel_home}  navItemId={"ni_home"} iconName={"home"} iconAlt="home icon" navitemdefaultselected={navItemDefaultSelected} navItemSelectedId={navItemSelectedId} setnavItemSelectedId={setnavItemSelectedId}/>

        <div className="navigation_container">
            <div className="item-container">
                <NavItem  label={eLang.menulabel_backup}  navItemId={"ni_backup"} iconName={"backup"} iconAlt="create backup icon" navitemdefaultselected={navItemDefaultSelected} navItemSelectedId={navItemSelectedId} setnavItemSelectedId={setnavItemSelectedId} />
                <NavItem  label={eLang.menulabel_restore} navItemId={"ni_restore"} iconName={"restore"} iconAlt="restore icon" navitemdefaultselected={navItemDefaultSelected} navItemSelectedId={navItemSelectedId} setnavItemSelectedId={setnavItemSelectedId} />
                <NavItem  label={eLang.menulabel_manage}  navItemId={"ni_options"} iconName={"options"} iconAlt="manage backup icon" navitemdefaultselected={navItemDefaultSelected} navItemSelectedId={navItemSelectedId} setnavItemSelectedId={setnavItemSelectedId} />
            </div>
            <div className="config-button_container">
            <NavItem label={eLang.menulabel_config}  navItemId={"ni_config"} iconName={"config"} navitemdefaultselected={navItemDefaultSelected} iconAlt="manage backup icon" navItemSelectedId={navItemSelectedId} setnavItemSelectedId={setnavItemSelectedId}/>
            </div>
        </div>
    </nav>
  )
}

export default Navigation

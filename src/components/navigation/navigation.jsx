import React from 'react'
import './navigation.css'

import Logo from '../logo/logo.jsx'
import NavItem from './navItem/navItem.jsx'

import parseLanguages from '../../assets/js/parseLanguages.asset.jsx'

//Icons
import templateIcon from '../../assets/images/icons/XLR_Audio.svg';

function Navigation() {
  const lang_text = parseLanguages();
  const ticon = templateIcon

  return (
    <nav className="navigation">
        <div className="navigation-logosection">
          <div className="Logo-container">
            <Logo/>
          </div>
        </div> 
        <div className="navigation_container">
            <div className="item-container">
                <NavItem label={lang_text.menulabel_backup} iconSrc={ticon} iconAlt="create backup icon"/>
                <NavItem label={lang_text.menulabel_restore} iconSrc={ticon} iconAlt="restore icon"/>
                <NavItem label={lang_text.menulabel_manage} iconSrc={ticon} iconAlt="manage backup icon"/>
            </div>
            <div className="config-button_container">
            <NavItem label={lang_text.menulabel_config} iconSrc={ticon} iconAlt="manage backup icon"/>
            </div>
        </div>
    </nav>
  )
}

export default Navigation
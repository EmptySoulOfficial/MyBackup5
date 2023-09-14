import React, {useState, useRef} from 'react'
import './NavItem.css'
import Icon from '../../../Icon/Icon.jsx'
import classNames from 'classnames'

function NavItem({label, iconSrc, iconAlt, navitemdefaultselected, navItemId, iconName, ref, navItemSelectedId, setnavItemSelectedId}) {

  if(navItemSelectedId == navItemId)
  {
    console.log('🧭 selected-Item: ' + navItemSelectedId)
    navitemdefaultselected = true;
  }

  return (

    <div id={navItemId} className={classNames('nav-item', {'nav-item--active': navitemdefaultselected, "" : !navitemdefaultselected })} onClick={() => {setnavItemSelectedId(navItemId)}}>
        <div className="nav-item_icon">
        <Icon name={iconName} color="var(--color-icon-default)" size={25} />
        </div>
        <label className="nav-item_label">{label}</label>
        <div className="nav-item_bar"></div>
    </div>
  )
}

export default NavItem

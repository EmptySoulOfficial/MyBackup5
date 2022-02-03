import React, {useState} from 'react'
import './navItem.css'
import Icon from '../../../assets/js/icon.asset.jsx'
import classNames from 'classnames'

function NavItem({label, iconSrc, iconAlt, navitemdefaultselected, navItemId, iconName}) {

  const [tnavItemActive, tsetnavItemActive] = useState(false);
  return (

  
    <div id={navItemId} className={classNames('nav-item', {'nav-item--active': navitemdefaultselected, "" : !navitemdefaultselected })} onClick={() => tsetnavItemActive(!tnavItemActive)}>
        <div className="nav-item_icon">
        <Icon name={iconName} color="var(--lightgray)" size={30} />
        </div>
        <label className="nav-item_label">{label}</label>
        <div className="nav-item_bar"></div>
    </div>
  )
}


export default NavItem
import React from 'react'
import './navItem.css'

function NavItem({label, iconSrc, iconAlt}) {

  return (
    <button className="nav-item">
        <div className="nav-item_icon">
          <img src={iconSrc} alt={iconAlt}/>
        </div>
        <label className="nav-item_label">{label}</label>
    </button>
  )
}

export default NavItem
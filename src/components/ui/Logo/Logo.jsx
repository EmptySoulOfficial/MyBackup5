import React from 'react'

import './Logo.css'
import LogoSVG from '../../assets/images/logo/MyBackupicon-nobg.svg'

function Logo() {
  return (
    <div className="logo">
       <img src={LogoSVG} alt="Logo"/>
    </div>
  )
}

export default Logo

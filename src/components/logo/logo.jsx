import React from 'react'

import './logo.css'
import LogoSVG from '../../assets/images/logo/MyBackupicon-nobg.svg'

function Logo() {
  return (
    <div className="logo">
       <img src={LogoSVG} alt="Logo"/>
    </div>
  )
}

export default Logo
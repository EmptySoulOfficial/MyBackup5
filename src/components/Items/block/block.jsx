import './block.css'
import React, {useState} from 'react'
import classNames from 'classnames'
import Icon from '../../../assets/js/icon.asset.jsx'
import { getLang, getLangVarable } from '../../../assets/js/ELanguage/ELanguage.js'

function BlockDefault({blocktitle, children}) {

  return (

    <div className="block-default">
      <label className="box-default-title ">{blocktitle}</label>
      <div className="box-default">
        {children}
      </div>
    </div>
  )
}

export default BlockDefault

import './Block.css'
import React, {useState} from 'react'
import classNames from 'classnames'
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

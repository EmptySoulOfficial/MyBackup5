import './Block.css'
import React, {useState} from 'react'
import classNames from 'classnames'
import { getLang, getLangVarable } from '../../../core/ELanguage/ELanguage'

function BlockDefault({blocktitle, children, blockClass, blockId}) {

  return (
    <div className={classNames('block-default', blockClass)} id={blockId}>
      <label className="box-default-title ">{blocktitle}</label>
      <div className="box-default">
        {children}
      </div>
    </div>
  )
}

function BlockInfoSmall({children, blockClass, blockId}) {

  return (
    <div className={classNames('block-default', blockClass)} id={blockId}>
      <div className="box-default box-info--small">
        {children}
      </div>
    </div>
  )
}

export { BlockDefault, BlockInfoSmall}

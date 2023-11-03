import './Block.css'
import React, {useState} from 'react'
import classNames from 'classnames'
import Icon from '../Icon/Icon.jsx'

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
      <div className="box-default box-info--small dFlex">
        <div className="box-info--small-info-container dFlex">
          <Icon name={"information"} color="" size={20} />
        </div>
        <div className="box-info--small-content">
        {children}
        </div>
      </div>
    </div>
  )
}

export { BlockDefault, BlockInfoSmall}

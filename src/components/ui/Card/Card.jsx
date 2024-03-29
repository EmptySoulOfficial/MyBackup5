import './Card.css'
import React, {useState, forwardRef, useImperativeHandle} from 'react'
import classNames from 'classnames'
import Icon from '../Icon/Icon.jsx'
import { getLang, getLangVarable } from '../../../core/ELanguage/ELanguage'

function Card({cardIcon, cardLabel, cardSubText, cardId, toolbar_setShowDeleteIcon, cardDetailsData, check, toggleCheck, cardClick} ){

  function handleCardClick(e) {
    // If click with shiftkey, select this item
    if (e.shiftKey) {
      toggleCheck()
    }else {
     console.log('card normal clicked')
     cardClick()
    }
  }

  return(
    <>
      <div className={classNames('Item-Card ', {'Item-Card--active': check , "" : !check })} id={cardId}>
        <div className="Item-Card-MainContainer">
        <div className="Item-Card-TopBar dFlex">
          <div className="Item-Card-dragable-container flex">
            <Icon name="anfasser" color="var(--color-low)" size={14} />
          </div>
          <div className="Item-Card-checkbox-container">
            <label className="bCheckbox">
              <input type="checkbox" checked={check} className="bCheckbox-input " onChange={toggleCheck}></input>
              <span className="bCheckbox-inner"></span>
            </label>
          </div>
        </div>
          <div className="Item-Card-Icon-container icon-light flex" onClick={handleCardClick}>
            <Icon name={cardIcon} color="var(--color-low)" size={80} />
          </div>
          <div className="Item-Card-Title-container flex">
            <h3>{cardLabel}</h3>
          </div>
          <div className="Item-Card-Information-container flex">
            <p className="subtext">{cardSubText}</p>
          </div>
        </div>
      </div>
    </>
  )

}

export default Card

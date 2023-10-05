import './Card.css'
import React, {useState} from 'react'
import classNames from 'classnames'
import Icon from '../Icon/Icon.jsx'
import { getLang, getLangVarable } from '../../../core/ELanguage/ELanguage'

function Card({cardIcon, cardLabel, cardSubText}){

  const [cardItemCheck, setcardItemCheck] = useState(false);

  return(
    <>
      <div className="Item-Card">
        <div className="Item-Card-MainContainer">
        <div className="Item-Card-TopBar dFlex">
          <div className="Item-Card-dragable-container flex">
            <Icon name="anfasser" color="var(--color-low)" size={14} />
          </div>
          <div className="Item-Card-checkbox-container">
            <label className="bCheckbox">
              <input type="checkbox" defaultChecked={false} disabled = {(cardItemCheck)? "disabled" : ""} className="bCheckbox-input " ></input>
              <span className="bCheckbox-inner"></span>
            </label>
          </div>
        </div>
          <div className="Item-Card-Icon-container flex">
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

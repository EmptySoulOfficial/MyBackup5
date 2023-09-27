import './Card.css'
import React, {useState} from 'react'
import classNames from 'classnames'
import Icon from '../Icon/Icon.jsx'
import { getLang, getLangVarable } from '../../../core/ELanguage/ELanguage'

function Card({cardIcon, cardLabel}){

  const [cardItemCheck, setcardItemCheck] = useState(false);
  const [cardItemClicked, setcardItemClicked] = useState(false);

  return(
    <>
      <div className={classNames({'Item-Card-active': cardItemClicked,'': !cardItemClicked },'Item-Card',)}>
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
          <div className={classNames('Item-Card-Icon-container', {'': cardItemClicked,'flex': !cardItemClicked })} onClick={() => {setcardItemClicked(!cardItemClicked)}}>
            <Icon name={cardIcon} color="var(--color-low)" size={80} />
          </div>
          <div className="Item-Card-Title-container flex">
            <h3>{cardLabel}</h3>
          </div>
          <div className="Item-Card-Information-container flex">
            <p className="subtext">adsadasda</p>
          </div>
        </div>

        </div>
    </>
  )

}

export default Card

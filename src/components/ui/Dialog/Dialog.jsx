import './Dialog.css'
import React from 'react'
import Icon from '../Icon/Icon.jsx'

const DialogError = () => {

  return(
  <div className="dialog-background-layer flex">
    <div className="dialogbox dialog-error">
      <div className="dialogbox-color-strip"></div>
      <div className="dialogbox-content-container flex">
        <div className="dialogbox-icon-container">
          <Icon name={"test"} color="" size={40} />
        </div>
        <div className="dialogbox-text-container">
          Ein Fehler
        </div>
      </div>
      <div className="dialogbox-button-container flex">
        <button className="button-reset">OK</button>
      </div>
    </div>
  </div>
  )
}

const DialogYesNo = () => {

}

export {DialogError, DialogYesNo}

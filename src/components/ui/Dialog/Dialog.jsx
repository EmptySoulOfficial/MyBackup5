import './Dialog.css'
import React from 'react'
import classNames from 'classnames'
import Icon from '../Icon/Icon.jsx'
import { CloseWindow } from '../../../core/WindowFunctions.jsx'

function Dialog({dialogType, dialogText, setShowDialog, dialogButtonTextWarnConfirm, dialogButtonTextWarnConfirmAboard}) {

  let checkTypeError = "error"
  let checkTypeWarn = "warning"
  let checkTypeInfo = "information"
  let checkTypeWarnConfirm = "warnconfirm"
  let dialogButtonTextOkey = "Ok"
  let dialogButtonTextClose = "Close"
  let dialogButtonTextWarnC = dialogButtonTextWarnConfirm
  let dialogButtonTextWarnCA = dialogButtonTextWarnConfirmAboard

  function closeDialog() {
    setShowDialog(false)
  }

  return(
  <div className="dialog-background-layer flex">
   <div className={classNames('dialogbox dialog-'+dialogType)}>
      <div className="dialogbox-color-strip"></div>
      <div className="dialogbox-content-container dFlex">
        <div className="dialogbox-icon-container">
          <Icon name={dialogType == checkTypeWarnConfirm? "warning" : dialogType} color="" size={40} />
        </div>
        <div className="dialogbox-text-container dFlex">
          {dialogText}
        </div>
      </div>
      <div className="dialogbox-button-container flex">
        {dialogType = dialogType == checkTypeError?  <button className="button-reset" onClick={(e) => {CloseWindow(e)}}>{dialogButtonTextClose}</button> :
          dialogType == checkTypeWarn?  <button className="button-submit" onClick={() => {closeDialog()}}>{dialogButtonTextOkey}</button> :
            dialogType == checkTypeInfo?  <button className="button-submit" onClick={() => {closeDialog()}}>{dialogButtonTextOkey}</button> :
              dialogType == checkTypeWarnConfirm?  <><button className="button-submit" onClick={() => {}}>{dialogButtonTextWarnC}</button> <button className="button-reset" onClick={() => {closeDialog()}}>{dialogButtonTextWarnCA}</button></> :
                null}
      </div>
    </div>
  </div>
  )
}

export default Dialog

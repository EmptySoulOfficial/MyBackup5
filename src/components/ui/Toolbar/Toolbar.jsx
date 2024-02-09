import './Toolbar.css'
import React from 'react'
import classNames from "classnames"
import Icon from '../Icon/Icon.jsx'

function Toolbar({showAppWindow, showCardDetails, launchButtonStartSelected, buttonLaunch_selecedLabel, buttonLaunch_Label,
                  addNewBackup, toggleCheckAllbCards, toggleCheckAll, toolbar_showDeleteIcon, deleteSelectedBackup})
{
  return(
    <div className={classNames('Toolbar ', {'Toolbar--active': showAppWindow & !showCardDetails , '' : !showAppWindow })}>
      <div className="launchbutton-container">
        <button className="button-submit launch_button">{launchButtonStartSelected ? buttonLaunch_selecedLabel : buttonLaunch_Label}</button>
      </div>
      <div className="functionButton-container dFlex">
        <button className="functionButton button-addBackup" onClick={() => {addNewBackup()}}><Icon name="addDashed" color="" size={20} /></button>
        <button className={classNames('functionButton button-selectAllBackups', {'button-selectAllBackups--active': toggleCheckAllbCards})} onClick={toggleCheckAll} >
        { toggleCheckAllbCards? <Icon name="selectAllDashed-checked" color="" size={20} /> : <Icon name="selectAllDashed" color="" size={20} />}
        </button>
        <button className="functionButton button-addToLayer" disabled><Icon name="addLayer" color="" size={20} /></button>
        <button className="functionButton button-deleteBackup" disabled={toolbar_showDeleteIcon? null : 'disabled'} onClick={() => {deleteSelectedBackup()}}><Icon name="trash" color="" size={20} /></button>
      </div>
    </div>
  )
}

export default Toolbar

import React, {useState} from 'react'
import './Dropdown.css'
import classNames from 'classnames'


function Dropdown({dropdownItems, dropdownId, dropdownClass}) {

  let selectlength

  let [dropdownItemActive, setDropDownItemActive] = useState()

  selectlength = dropdownItems.length
  console.log('++ SELECT LÄNGE: '+ selectlength)
  return (
      <div className={classNames('dropdown', {dropdownClass})} id={dropdownId}>
        <select>
          {dropdownItems.map(function(optionObject, io){
            return <option value={optionObject.dIKey} key={optionObject.dIKey}>{optionObject.dIName}</option>
          })}
        </select>
        <div onClick={() => {setDropDownItemActive(!dropdownItemActive)}} className={classNames('dropdown-selected-Item', {'dropdown-selected-item-active': dropdownItemActive, "" : !dropdownItemActive})}>
            Test Text
            {/* Selected Item + selected Value + after elem arrow */}
        </div>
        <div className={classNames('dropdown-item-list ', {'dropdown-item-list-active': dropdownItemActive , "" : !dropdownItemActive })}>
          {dropdownItems.map(function(dIObject, i){
            return <div className="dropdown-item" id={'dropdown_item-'+dIObject.dIKey} key={'dropdown_item-'+dIObject.dIKey} onClick={() => {setDropDownItemActive(!dropdownItemActive)}}>{dIObject.dIName}</div>
          })}
        </div>
      </div>

  )
}

export default Dropdown

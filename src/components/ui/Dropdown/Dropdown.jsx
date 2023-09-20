import React, {useState} from 'react'
import './Dropdown.css'
import classNames from 'classnames'


function Dropdown({dropdownItems, dropdownId, dropdownClass, initialValue}) {

  let selectlength
  let [dropdownItemActive, setDropDownItemActive] = useState()
  selectlength = dropdownItems.length
  // ------ Init default value --------
  const [value, setValue] = useState(initialValue);
  const handleDropdownChange = (e) => {
    setValue(e.target.value);
  }

  const handleSelectItem = (e) => {
    setValue(e.target.getAttribute("data-value"));
    setDropDownItemActive(false)
  }

  // find dropdown object .name by key value
  const fDdObject = dropdownItems.find(({ dIKey }) => dIKey === value);
  // ------ LOGS --------
  // console.log('----- DropDown V1 ------')
  // console.log('▶️ DropDown LENGTH: '+ selectlength)
  // console.log('▶️ DropDown INITIAL VALUE: ' + value)
  // console.log('▶️ DropDown FOUND OBJECT.Name: '+ fDdObject.dIName)
  // console.log('▶️ DropDown custom-class: '+dropdownClass)

  return (
      <div className={classNames('dropdown', dropdownClass)} id={dropdownId}>
        <select value={value} onChange={handleDropdownChange}>
          {dropdownItems.map(function(optionObject, io){
            return <option value={optionObject.dIKey} key={optionObject.dIKey}>{optionObject.dIName}</option>
          })}
        </select>
        <div onClick={() => {setDropDownItemActive(!dropdownItemActive)}} className={classNames('dropdown-selected-Item', {'dropdown-selected-item-active': dropdownItemActive, "" : !dropdownItemActive})}>
            {fDdObject.dIName}
        </div>
        <div className={classNames('dropdown-item-list', {'dropdown-item-list-active': dropdownItemActive , "" : !dropdownItemActive })}>
          {dropdownItems.map(function(dIObject, i)
            {
              return  <div className={classNames('dropdown-item ', {'dropdown-item-same-as-active': value === dIObject.dIKey})}
                          id={'dropdown_item-'+dIObject.dIKey}
                          key={'dropdown_item-'+dIObject.dIKey}
                          data-value={dIObject.dIKey}
                          onClick={handleSelectItem}>
                        {dIObject.dIName}
                      </div>
          })}
        </div>
      </div>

  )
}

export default Dropdown

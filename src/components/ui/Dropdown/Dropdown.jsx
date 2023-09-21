import React, {useState, useEffect, forwardRef, useImperativeHandle} from 'react'
import './Dropdown.css'
import classNames from 'classnames'

const Dropdown = forwardRef(({dropdownItems, dropdownId, dropdownClass, initialValue, changeFunction, sendCurrentState, clickOutsideFunction}, refFunction) => {

  let [dropdownItemActive, setDropDownItemActive] = useState(false)
  let selectlength = dropdownItems.length

  // ------ Init default value --------
  const [value, setValue] = useState(initialValue);

  // find dropdown object .name by key value
  const fDdObject = dropdownItems.find(({ dIKey }) => dIKey === value);
  // Change Select value and trigger custom function
  const handleSelectItem = (e) => {
    setValue(e.target.getAttribute("data-value"));
    setDropDownItemActive(false)
    //Call costum Function
    callChangeFunction(e.target.getAttribute("data-value"));
  }
  const handleDropdownActive = () => {
    setDropDownItemActive(!dropdownItemActive);
    //export curent dropdown open/close state as boolean
    sendCurrentState(!dropdownItemActive);
  };
  // Use effect if click outside prop changed an set List to inactive
  useEffect(() => {
    if (clickOutsideFunction === false){
      setDropDownItemActive(false);
    }
  }, [clickOutsideFunction]); // 👈️ add props as dependencies

  // ------- Custom function -----------
  const callChangeFunction = (refValue) => {
    changeFunction(refValue);
  };
  // Expose parent function (custom function) to parent component
  useImperativeHandle(refFunction, () => ({
    changeFunction: callChangeFunction,
  }));
  // ------ LOGS --------
  // console.log('----- DropDown V1 ------')
  // console.log('▶️ DropDown LENGTH: '+ selectlength)
  // console.log('▶️ DropDown INITIAL VALUE: ' + value)
  // console.log('▶️ DropDown FOUND OBJECT.Name: '+ fDdObject.dIName)
  // console.log('▶️ DropDown custom-class: '+dropdownClass)

  return (
      <div className={classNames('dropdown', dropdownClass)} id={dropdownId}>
        <select value={value} >
          {dropdownItems.map(function(optionObject, io){
            return <option value={optionObject.dIKey} key={optionObject.dIKey}>{optionObject.dIName}</option>
          })}
        </select>
        <div onClick={handleDropdownActive} className={classNames('dropdown-selected-Item', {'dropdown-selected-item-active': dropdownItemActive, "" : !dropdownItemActive})}>
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
});

export default Dropdown

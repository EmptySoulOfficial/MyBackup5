import React from 'react'
import './Select.css'
import classNames from 'classnames'


function Select({selectItems, selectName, selectId, selectSelected}) {

  let select, selectlength, i, j, selectElem, selectElemLength

  return (
      <div className={classNames('select test', {'select-selected': selectSelected , "" : !selectSelected })}>
        <select name={selectName} id={selectId}>
          {/* <option value="select1">select 1</option> */}
        </select>
      </div>
  )
}

export default Select

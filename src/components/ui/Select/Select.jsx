import './Select.css'
import classNames from 'classnames'


function Select({children, selectName, selectId, selectSelected}) {
  return (
      <div className={classNames('select ', {'select-selected': selectSelected , "" : !selectSelected })}>
        <select name={selectName} id={selectId}>
          {children}
          {/* <option value="select1">select 1</option> */}
        </select>
      </div>
  )
}

export default Select

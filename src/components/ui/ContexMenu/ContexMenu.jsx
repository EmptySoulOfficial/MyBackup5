import './ContexMenu.css'
import React, {useRef, useImperativeHandle} from 'react'
import classNames from 'classnames';

function ContexMenu({position,contexMObject,contexMenuDisabled, contexMenuShow, setContexMenuShow, setContexMObject, contexMPos, contexMRef, contexMCustomFunction}) {

  const ref = useRef(null);


  const handleClickContexMenuItem = (e) => {
    setContexMenuShow(false)
    callChangeFunction(e.target.getAttribute("data-value"));
  }
  // ---- Custom functions ---- //
  const callChangeFunction = (refValue) => {
    contexMCustomFunction(refValue);
  };

  // Expose parent function (custom function) to parent component
  useImperativeHandle(contexMRef, () => ({
    contexMCustomFunction: callChangeFunction,
  }));

  return (
    <div ref={ref} className={classNames('ContexMenu', {'ContexMenu-Disabled': contexMenuDisabled, '': !contexMenuDisabled}, {'': contexMenuShow, 'dNone': !contexMenuShow})}
                  style={{left: `${contexMPos.pageX}px`, top: `${contexMPos.pageY}px`}}>
      {/* Check if object has items / length */}
      {contexMObject.length ?
        contexMObject.map(function(cmObj, i)
          {
            return  <div className='ContexMenu-Item '
                      id={'ContexMenu-Item_-'+cmObj.contexMKey}
                      key={'ContexMenu-Item_'+cmObj.contexMKey}
                      data-value={cmObj.contexMKey}
                      onClick={(e) => {handleClickContexMenuItem(e)}}>
                        {cmObj.contexMName}
                    </div>
          }
        ):<div className='ContexMenu-Item ContexMenu-Item-Disabled'>No Items</div>
      }
    </div>
  )
}

export default ContexMenu


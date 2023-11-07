import './ContextMenu.css'
import React, {useRef, useImperativeHandle} from 'react'
import classNames from 'classnames';


function ContextMenu({position,contextMObject,contextMenuDisabled, contextMenuShow, setContextMenuShow, setContextMObject, contextMPos, contextMRef, contextMCustomFunction}) {

  const ref = useRef(null);
  const handleClickContextMenuItem = (e) => {
    setContextMenuShow(false)
    callChangeFunction(e.target.getAttribute("data-value"));
  }
  // ---- Custom functions ---- //
  const callChangeFunction = (refValue) => {
    contextMCustomFunction(refValue);
  };

  // Expose parent function (custom function) to parent component
  useImperativeHandle(contextMRef, () => ({
    contextMCustomFunction: callChangeFunction,
  }));

  return (
    <div ref={ref} className={classNames('ContextMenu', {'ContextMenu-Disabled': contextMenuDisabled, '': !contextMenuDisabled}, {'': contextMenuShow, 'dNone': !contextMenuShow})}
                  style={{left: `${contextMPos.pageX}px`, top: `${contextMPos.pageY}px`}}>
      {/* Check if object has items / length */}
      {contextMObject.length ?
        contextMObject.map(function(cmObj, i)
          {
            return  <div className='ContextMenu-Item '
                      id={'ContextMenu-Item_-'+cmObj.contextMKey}
                      key={'ContextMenu-Item_'+cmObj.contextMKey}
                      data-value={cmObj.contextMKey}
                      onClick={(e) => {handleClickContextMenuItem(e)}}>
                        {cmObj.contextMName}
                    </div>
          }
        ):<div className='ContextMenu-Item ContextMenu-Item-Disabled'>No Items</div>
      }
    </div>
  )
}

export default ContextMenu

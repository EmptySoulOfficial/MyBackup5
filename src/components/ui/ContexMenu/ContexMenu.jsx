import './ContexMenu.css'
import React, {useRef} from 'react'
import classNames from 'classnames';


function ContexMenu({position,contexMObject,contexMenuDisabled, contexMenuShow, setContexMenuShow, setContexMObject, contexMPos}) {

  const ref = useRef(null);


  const handleClickContexMenuItem = (e) => {
    setContexMenuShow(false)
  }

  if (contexMPos.pageX >= "800") {
      //contexMPos.pageX-=ref.current.offsetWidth;

    //console.log("width", );
  }

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

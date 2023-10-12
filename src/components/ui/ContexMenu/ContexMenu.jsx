import './ContexMenu.css'
import React, {useRef} from 'react'
import classNames from 'classnames';


function ContexMenu({position,contexMObject,contexMenuDisabled, contexMenuShow}) {

  const ref = useRef(null);
  let currentPosition = 0

  if(contexMenuShow) {
    currentPosition = position
      // Dynamic position switch of contex menu
    if (currentPosition.x >= "800") {
      currentPosition.x-=ref.current.offsetWidth;
    }
  }else{
    currentPosition = 0;
  }

  console.log('--> ContexMenu: '+contexMenuShow);
  return (
    <div ref={ref} className={classNames('ContexMenu', {'ContexMenu-Disabled': contexMenuDisabled, '': !contexMenuDisabled}, {'': contexMenuShow, 'dNone': !contexMenuShow})}
                  style={{left: `${currentPosition.x}px`, top: `${currentPosition.y}px`}}>
      {contexMObject.map(function(cmObj, i)
            {
              return  <div className='ContexMenu-Item '
                          id={'ContexMenu-Item_-'+cmObj.contexMKey}
                          key={'ContexMenu-Item_'+cmObj.contexMKey}
                          data-value={cmObj.contexMKey}
                         >
                        {cmObj.contexMName}
                      </div>
            }
          )}
    </div>
  )
}

export default ContexMenu

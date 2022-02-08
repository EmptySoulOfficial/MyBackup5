import classNames from 'classnames';
import React, {useState} from 'react'
import './quickInfo.css'

function QuickInfo({position, quickinfovis, setquickinfovis,quickinfoTitle, quickinfoText}) {
    
    if (position.x >= "600") {
        position.x-="300";
    }
    return(
    <div className={classNames('quickinfo', {'quickinfo--visible' : quickinfovis, '' : !quickinfovis})} style={{left: `${position.x}px`, top: `${position.y}px`}}>
        <p className="quickinfo-title">{quickinfoTitle}</p>
        <p className="quickinfo-text">{quickinfoText}</p>
    </div>
    )
}

export default QuickInfo
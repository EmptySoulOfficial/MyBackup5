import classNames from 'classnames';
import React, {useState} from 'react'
import './quickInfo.css'

function QuickInfo({position, quickinfovis, setquickinfovis,quickinfoTitle, setquickinfoTitle}) {
    
    if (position.x >= "600") {
        position.x-="300";
    }
    return(
    <div className={classNames('quickinfo', {'quickinfo--visible' : quickinfovis, '' : !quickinfovis})} style={{left: `${position.x}px`, top: `${position.y}px`}}>
        <p className="quickinfo-title">{quickinfoTitle}</p>
        <p className="quickinfo-text">Das ist eine Beschreibung des Hallos. Und noch mehr text like bla bla bla</p>
    </div>
    )
}

export default QuickInfo
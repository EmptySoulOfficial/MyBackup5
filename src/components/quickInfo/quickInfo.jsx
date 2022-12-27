import classNames from 'classnames';
import React, {useState, useRef, useEffect} from 'react'
import './quickInfo.css'
// import '../../assets/css/clickListener.asset.jsx'

function QuickInfo({position, quickinfovis, setquickinfovis,quickinfoTitle, quickinfoText}) {
    
    const ref = useRef(null);
    if (position.x >= "600") {
        position.x-=ref.current.offsetWidth;
        //console.log("width", );
    }
    


    return(
    <div ref={ref} className={classNames('quickinfo', {'quickinfo--visible' : quickinfovis, '' : !quickinfovis})} style={{left: `${position.x}px`, top: `${position.y}px`}}>
        <p className="quickinfo-title">{quickinfoTitle}</p>
        <p className="quickinfo-text">{quickinfoText}</p>
    </div>
    )
}

export default QuickInfo
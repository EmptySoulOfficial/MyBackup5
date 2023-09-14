import React from 'react'
import classNames from 'classnames';
import './OptionsWindow.css'
import { getLang, getLangVarable } from '../../../core/ELanguage/ELanguage'

function OptionsWindow({navItemSelectedId, showAppWindow}) {
    const eLang = getLang();

    if(navItemSelectedId === "ni_options"){
      showAppWindow = true;
    }

    return (

    <div className={classNames('appmainwindow options-window ', {'appmainwindow--active': showAppWindow , "" : !showAppWindow })}>
        <h1>{eLang.windowtitle_options}</h1>
        <div className={classNames('appmainwindow-container options-container ', {'appmainwindow-container--active': showAppWindow , "" : !showAppWindow })}>
        <div className="appmainwindow-content options-window_content">

        </div>
        </div>
    </div>
    )
}

export default OptionsWindow

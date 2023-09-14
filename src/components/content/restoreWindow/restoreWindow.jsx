import React from 'react'
import classNames from 'classnames';
import './RestoreWindow.css'
import { getLang, getLangVarable } from '../../../core/ELanguage/ELanguage'



function RestoreWindow({navItemSelectedId, showAppWindow}) {
    const eLang = getLang();

    if(navItemSelectedId === "ni_restore"){
      showAppWindow = true;
    }

    return (

    <div className={classNames('appmainwindow restore-window ', {'appmainwindow--active': showAppWindow , "" : !showAppWindow })}>
        <h1>{eLang.windowtitle_restore}</h1>
        <div className={classNames('appmainwindow-container restore-container ', {'appmainwindow-container--active': showAppWindow , "" : !showAppWindow })}>
        <div className="appmainwindow-content backup-window_content">

        </div>
        <div className="appmainwindow-bottomcontent backup-window_bottom_content">
            <div className="launchbutton-container">
            <button className="button-submit launch_button">{eLang.button_launch}</button>
            </div>
        </div>
        </div>
    </div>
    )
}

export default RestoreWindow

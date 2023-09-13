import React from 'react'
import classNames from 'classnames';
import './HomeWindow.css'
import { getLang, getLangVarable } from '../../../assets/js/ELanguage/ELanguage.js'


function BackupWindow({navItemSelectedId, showAppWindow}) {
    const eLang = getLang();

    if(navItemSelectedId === "ni_home"){
      showAppWindow = true;
    }

    return (

    <div className={classNames('appmainwindow home-window ', {'appmainwindow--active': showAppWindow , "" : !showAppWindow })} id="window-backup">
        <h1>{eLang.windowtitle_home}</h1>
        <div className={classNames('appmainwindow-container home-container ', {'appmainwindow-container--active': showAppWindow , "" : !showAppWindow })}>
        <div className="appmainwindow-content home-window_content">
            anleitung,infos, wo sprache und design anpassen, updates
        </div>
        </div>
    </div>
    )
}

export default BackupWindow

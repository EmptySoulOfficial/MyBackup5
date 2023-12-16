import React from 'react'
import classNames from 'classnames';
import './HomeWindow.css'
import { getLang, getLangVarable } from '../../../core/ELanguage/ELanguage.js'
import {BlockDefault} from '../../ui/Block/Block.jsx';


function BackupWindow({navItemSelectedId, showAppWindow}) {
    const eLang = getLang();

    if(navItemSelectedId === "ni_home"){
      showAppWindow = true;
    }

    return (

    <div className={classNames('appmainwindow home-window ', {'appmainwindow--active': showAppWindow , "" : !showAppWindow })} id="window-backup">
        <h1 className="h1-window">{eLang.windowtitle_home}</h1>
        <div className={classNames('appmainwindow-container home-container ', {'appmainwindow-container--active': showAppWindow , "" : !showAppWindow })}>
        <div className="appmainwindow-content home-window_content">
          <BlockDefault blocktitle="">
              <h2>Herzlich willkommen</h2>
              <p>
                Hier findest du das Wichtigste im Überblick. <br/>
                Wenn du direkt mit dem Sichern oder Wiederherstellen deiner Daten loslegen willst, <br/>
                klicke einfach im Menü auf die entsprechenden Punkte.
              </p>
          </BlockDefault>
        </div>
        </div>
    </div>
    )
}

export default BackupWindow

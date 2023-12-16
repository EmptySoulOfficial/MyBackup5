import React from 'react'
import classNames from 'classnames'
import './RestoreWindow.css'
import { getLang, getLangVarable } from '../../../core/ELanguage/ELanguage'
import Card from '../../ui/Card/Card.jsx'
import Icon from '../../ui/Icon/Icon.jsx'
import Toolbar from '../../ui/Toolbar/Toolbar.jsx'



function RestoreWindow({navItemSelectedId, showAppWindow}) {
    const eLang = getLang();

    if(navItemSelectedId === "ni_restore"){
      showAppWindow = true;
    }

    return (

      <div className={classNames('appmainwindow restore-window ', {'appmainwindow--active': showAppWindow , "" : !showAppWindow })} id="window-backup">

      {/* BackupWindow Main Body */}
      <div className="appmainwindow-titlesection">
          <h1 className="h1-window">{eLang.windowtitle_restore}</h1>
          <Toolbar showAppWindow={showAppWindow}/>
      </div>
      <div className={classNames('appmainwindow-container backup-container ', {'appmainwindow-container--active': showAppWindow , "" : !showAppWindow })}>
          <div className="appmainwindow-content backupWindow-content">
                <Card cardIcon="folder" cardLabel="My Data" cardSubText="05.10.2023 10:10"/>
          </div>
      </div>
  </div>
    )
}

export default RestoreWindow

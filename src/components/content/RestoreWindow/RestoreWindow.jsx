import React from 'react'
import classNames from 'classnames'
import './RestoreWindow.css'
import { getLang, getLangVarable } from '../../../core/ELanguage/ELanguage'
import Card from '../../ui/Card/Card.jsx'
import Icon from '../../ui/Icon/Icon.jsx'



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
          <div className={classNames('appmainwindow-toolbar ', {'appmainwindow-toolbar-active': showAppWindow , '' : !showAppWindow })}>
            <div className="launchbutton-container">
              <button className="button-submit launch_button">{eLang.button_launch}</button>
            </div>
            <button className="functionButton button-selectAllBackups" onClick={() => {setaddBackupItem(false);setTimeout(function(){setaddBackupItem(true)},100)}}><Icon name="selectAllDashed" color="var(--color-low)" size={20} /></button>
            <button className="functionButton button-addToLayer" onClick={() => {setaddBackupItem(false);setTimeout(function(){setaddBackupItem(true)},100)}}><Icon name="addLayer" color="var(--color-low)" size={20} /></button>
            <button className="functionButton button-deleteBackup" onClick={() => {setaddBackupItem(false);setTimeout(function(){setaddBackupItem(true)},100)}}><Icon name="trash" color="var(--color-low)" size={20} /></button>
          </div>
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

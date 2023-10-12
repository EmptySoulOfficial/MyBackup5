import './FileItem.css'
import React from 'react'
import Icon from '../../../../ui/Icon/Icon.jsx'

function FileItem() {
  let fileItemIcon = "folder"

  return (
      <div className="fileItem-container dFlex">
        <div className="fileItem-icon-container flex">
          <Icon name={fileItemIcon} size={20} />
        </div>
        <input type="file" id="select-folder" webkitdirectory="" multiple=""/>
        {/* <input type="file" id="select-file"/> */}
        <select><option>E:/</option><option>A:/</option></select>
        <button className="functionButton button-deleteBackup">
          <Icon name="trash" color="var(--color-low)" size={20} />
        </button>

      </div>
  )
}

export default FileItem


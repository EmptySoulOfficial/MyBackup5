import './FileItem.css'
import React from 'react'
import Icon from '../../../../ui/Icon/Icon.jsx'

function FileItem({pathType, to, filesMock, setFilesMock, id}) {
  let fileItemIcon = pathType

  function removePath(id) {
    const newFilesList = filesMock.filter((f) => f.id !== id);
    setFilesMock(newFilesList);
  }

  return (
      <div className="fileItem-container dFlex">
        <div className="fileItem-icon-container flex">
          <Icon name={fileItemIcon} size={20} />
        </div>
        <input type="file" id="select-folder" webkitdirectory="" multiple=""/>
        {/* <input type="file" id="select-file"/> */}
        <select defaultValue={to}>
          <option value="E:/">E:/</option>
          <option value="A:/">A:/</option>
        </select>
        <button className="functionButton button-deleteBackup" onClick={() => removePath(id)}>
          <Icon name="trash" color="var(--color-low)" size={20} />
        </button>

      </div>
  )
}

export default FileItem


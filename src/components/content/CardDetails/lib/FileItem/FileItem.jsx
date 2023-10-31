import './FileItem.css'
import React from 'react'
import Icon from '../../../../ui/Icon/Icon.jsx'

function FileItem({pathType, to, loadedItem, newBackupItem, setNewBackupItem, id}) {
  let fileItemIcon = pathType

  function removePath(id) {
    console.log('ITEM ID: '+id)
    // Remove hier mal checken: https://codesandbox.io/s/bold-worker-b12x1?file=/src/App.js:844-853
    // https://stackoverflow.com/questions/69089340/how-can-i-delete-an-item-inside-a-nested-array-with-hooks
    // const newFilesList = newBackupItem.files.filter((f) => f.id !== id)
    console.log(newFilesList)
    setNewBackupItem(newFilesList);
  }

  return (
      <div className="fileItem-container dFlex testItem">
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


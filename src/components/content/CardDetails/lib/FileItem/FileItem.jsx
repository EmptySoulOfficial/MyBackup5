import './FileItem.css'
import React from 'react'
import Icon from '../../../../ui/Icon/Icon.jsx'

// Remove hier mal checken: https://codesandbox.io/s/bold-worker-b12x1?file=/src/App.js:844-853
// https://stackoverflow.com/questions/69089340/how-can-i-delete-an-item-inside-a-nested-array-with-hooks

function FileItem({fileItem, loadedItem, setLoadedItem, cardIndex}) {
  let fileItemIcon = fileItem.type

  const removeFileItem = (thisItemId) => {
    setLoadedItem((prev) => {
      const items = loadedItem.files.filter(
        (fileItem) => fileItem.id !== thisItemId
      )
      const newState = prev
      newState.files = items
      return { ...newState}
    })
  }

  return (
      <div className="fileItem fileItem-container dFlex" key={fileItem.id}>
        <div className="fileItem-icon-container flex">
          <Icon name={fileItemIcon} size={20} color="var(--color-icon-default)" />
        </div>
        <label className="button-submit--small flex">
          <input type="file" id="select-folder"  multiple="true"/>
          Select Files
        </label>
        {/* <input type="file" id="select-file"/> */}
        <div className="fileItem-icon-container flex">
          <Icon name={"drive"} size={20} color="var(--color-icon-default)" />
        </div>
        <label className="button-submit--small flex">
          <input type="file" id="select-folder"  multiple="true"/>
          Backup Drive
          </label>
        <button className="functionButton button-deleteBackup" onClick={() => removeFileItem(fileItem.id, cardIndex)}>
          <Icon name="trash" color="var(--color-low)" size={20} />
        </button>
      </div>
  )
}

export default FileItem


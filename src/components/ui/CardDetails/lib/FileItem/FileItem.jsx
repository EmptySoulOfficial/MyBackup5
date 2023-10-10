import './FileItem.css'
import React from 'react'

function FileItem() {

  return (
      <div className="fileItem-container flex">
        Folder/Datei Icon
        <input type="file" id="select-folder" webkitdirectory="" multiple=""/>
        {/* <input type="file" id="select-file"/> */}
        <select><option>E:/</option><option>A:/</option></select>
        <button>Delete</button>

      </div>
  )
}

export default FileItem


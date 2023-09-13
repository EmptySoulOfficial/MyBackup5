import React from 'react'
import './AddPopUp.css'
import classNames from 'classnames'

function AddPupUp({addBackupItem, setaddBackupItem}) {

    return (
        <div className={classNames({'': addBackupItem, 'addWindow-container--disabled' : !addBackupItem }, 'addWindow-container')} onClick={() => {setaddBackupItem(false)} }>
            <div className="addWindow-box" >
                <div className="addWindow-titleSection">
                    <h3 className="addWindow-title">Add Backup</h3>
                </div>
            </div>
        </div>
    )

}

export default AddPupUp
import React, { useEffect, useState } from 'react'
import * as userdata from '../../../../data/user/saves/config/user-events.json'

const getUserDataClicks = "user_clicks"

const parseUserDataClicks = () => {
  const [ jUserDataClicks, setjUserDataClicks ] = useState('')

  useEffect(
    () => {
      const jsonObj = JSON.parse(JSON.stringify(userdata)).default
      // replace(/\\n/g, '<br>')
      const userDataClicksString = getUserDataClicks
      setjUserDataClicks(jsonObj[userDataClicksString])
    },
    []
  )

  return jUserDataClicks
}

export default parseUserDataClicks
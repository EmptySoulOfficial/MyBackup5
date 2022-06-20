import React, { useEffect, useState } from 'react'
import * as styledata from '../../../data/user/style/style.json'

const getStyles = "style"

const parseStyle = () => {
  const [ jStyle, setjStyle ] = useState('')

  useEffect(
    () => {
      const jsonObj = JSON.parse(JSON.stringify(styledata)).default
      // replace(/\\n/g, '<br>')
      const styleString = getStyles
      setjStyle(jsonObj[styleString])
    },
    []
  )

  return jStyle
}

export default parseStyle
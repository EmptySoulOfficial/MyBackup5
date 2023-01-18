import React, { useEffect, useState } from 'react'
import * as styledatadark from '../../themes/mb5Dark/mb5Dark.json'
import * as styledatalight from '../../themes/mb5Light/mb5Light.json'

const getStyles = "style"

const parseStyle = () => {
  const [ jStyleDark, setjStyleDark] = useState('')
  const [ jStyleLight, setjStyleLight ] = useState('')

  useEffect(
    () => {
      const jsonObjDark = JSON.parse(JSON.stringify(styledatadark)).default
      const jsonObjLight = JSON.parse(JSON.stringify(styledatalight)).default
      // replace(/\\n/g, '<br>')

      setjStyleDark(jsonObjDark[getStyles])
      setjStyleLight(jsonObjLight[getStyles])
    },
    []
  )

  return {jStyleDark, jStyleLight};
}

export default parseStyle
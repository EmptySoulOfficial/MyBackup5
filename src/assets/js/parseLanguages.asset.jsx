import React, { useEffect, useState } from 'react'
import * as textdata from '../../appdata/lang/lang.json'
import useAutoLang from './useAutoLang.asset.jsx'

// NEEDS useAutoLang asset !!
const getweblanguage = useAutoLang()

const parseLanguages = () => {
  const [ lang_text, setLangText ] = useState('')

  useEffect(
    () => {
      const jsonObj = JSON.parse(JSON.stringify(textdata)).default
      // replace(/\\n/g, '<br>')
      const langString = getweblanguage
      // bsp: "de-DE" -> "de"
      setLangText(jsonObj[langString])
    },
    []
  )

  return lang_text
}

export default parseLanguages
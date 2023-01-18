import React, { useEffect, useState } from 'react'
import * as userLanguageData from '../../../../data/user/language/userLanguage.json'

const parseUserLanguages = () => {
  const [ langUser_text, setLangUserText ] = useState('')

  useEffect(
    () => {
      const userLanguageObj = JSON.parse(JSON.stringify(userLanguageData)).default
      const DataIdentifier = "myLanguage"

      setLangUserText(userLanguageObj[DataIdentifier])
    },
    []
  )

  return langUser_text
}

export default parseUserLanguages
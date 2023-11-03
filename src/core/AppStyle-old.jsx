import React, { useEffect, useState } from 'react'
import * as styledata_oceansground from '../themes/OceansGround/OceansGround.json'
import * as styledata_gamergirl from '../themes/GamerGirl/GamerGirl.json'

const getStyles = "style"

const AppStyle = () => {
  const [ jStyleOceansGround, setjStyleOceansGround] = useState('')
  const [ jStyleGamerGirl, setjStyleGamerGirl ] = useState('')

  useEffect(
    () => {
      const jsonObjOceansGround = JSON.parse(JSON.stringify(styledata_oceansground)).default
      const jsonObjGamerGirl = JSON.parse(JSON.stringify(styledata_gamergirl)).default
      // replace(/\\n/g, '<br>')
      setjStyleOceansGround(jsonObjOceansGround[getStyles])
      setjStyleGamerGirl(jsonObjGamerGirl[getStyles])
    },
    []
  )
  return {jStyleOceansGround, jStyleGamerGirl};
}

export default AppStyle

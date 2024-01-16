import react, {useState} from "react";

function IconSwitch({iconPathOrName}) {

  const [isImg, setIsImg] = useState(false)
  // iconPathOrName.contains('_icons')? setIsImg(true): setIsImg(false)

  return(
    <>
      {isImg? <img src={"./data/backups/"+iconPathOrName} />: <Icon name={iconPathOrName} color="var(--color-low)" size={80} />}
    </>
  )
}

export default IconSwitch

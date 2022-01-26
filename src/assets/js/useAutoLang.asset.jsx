
const useAutoLang = () => {
  var webLanguage = navigator.language.split('-')[0]

// if more languages are added, change this if
  if (webLanguage === "de" || webLanguage === "en"){
    
    webLanguage = "en";
    return webLanguage
  }else{
    return webLanguage
  }
  
}

export default useAutoLang
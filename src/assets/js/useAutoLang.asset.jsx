
const useAutoLang = () => {
  //var webLanguage = navigator.language.split('-')[0]
  
  //works for electron
  var webLanguage = navigator.language;
  
// if more languages are added, change this if
  //if (webLanguage === "de" || webLanguage === "en"){
  //  
  //  webLanguage = "en";
  //  return webLanguage
  //}else{
  //  return webLanguage
  //}
  return webLanguage
}

export default useAutoLang
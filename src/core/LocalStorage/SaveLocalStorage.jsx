import React from "react";

const SaveLocalStorage = (navItemSelectedId,initialThemeValue) => {
  localStorage.getItem("selectedNavItem")?
    localStorage.setItem("selectedNavItem", navItemSelectedId):''
  localStorage.getItem("selectedTheme")?
    localStorage.setItem("selectedTheme", initialThemeValue.dIKey ?? initialThemeValue):''

}

export default SaveLocalStorage


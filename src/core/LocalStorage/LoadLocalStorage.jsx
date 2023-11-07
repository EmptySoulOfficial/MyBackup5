import React from "react";

const LoadLocalStorage = () => {
  let s_selectedNavItem = localStorage.getItem("selectedNavItem")
  let s_selectedTheme = localStorage.getItem("selectedTheme")

  return {s_selectedNavItem, s_selectedTheme}
}

export default LoadLocalStorage

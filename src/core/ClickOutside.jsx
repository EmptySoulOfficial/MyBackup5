import React, { useRef, useEffect } from "react";
//Original from https://stackoverflow.com/questions/32553158/detect-click-outside-react-component
// Wrap your component in <ClickOutside> (Your Component) </ClickOutside> to make it wortk
function ClickOutsideEvents(ref, props) {
  useEffect(() => {
    //If clicked outside ref
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        //alert(props.activateCO);
        // Here output function
      }
    }

    // Bind event listener
    if(props.activateCO === true) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [ref, props]);
}

export default function ClickOutside(props) {

  const wrapperRef = useRef(null);
  ClickOutsideEvents(wrapperRef, props);
  return <div ref={wrapperRef}>{props.children}</div>;
}

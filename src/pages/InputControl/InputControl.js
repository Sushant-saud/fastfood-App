import React from "react";

import './inputcontrol.css'

function InputControl(props) {
  return (
    <div className="container">
      {props.label && <label>{props.label}</label>}
      <input type="text" {...props} />
    </div>
  );
}

export default InputControl;
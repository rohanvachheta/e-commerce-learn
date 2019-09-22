import React from "react";
import "./custome-Button.scss";

const CustomeButton = ({ children, ...otherProps }) => {
  return (
    <button className="custom-button" {...otherProps}>
      {children}
    </button>
  );
};

export default CustomeButton;

import Add from "../../components/svgs/AddWhite.svg";
import React from "react";
import classes from "./ButtonWithImg.module.scss";

const ButtonWithImg = ({ children, newStyle, ...props }) => {
  return (
    <button {...props} className={classes.buttonWithImg + " " + newStyle}>
      <img src={Add} alt="AddTag" />
      <span className={classes.spanStyle + " " + newStyle}>{children}</span>
    </button>
  );
};

export default ButtonWithImg;

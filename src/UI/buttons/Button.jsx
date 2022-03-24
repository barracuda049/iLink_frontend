import Profile from "../../components/svgs/icons/Profile.svg";
import React from "react";
import classes from "./Button.module.scss";

const Button = ({ children, customClassName = "", ...props }) => {
  return (
    <button {...props} className={classes.Button + " " + customClassName}>
      <span className={classes.ButtonFont}>{children}</span>
      <img className={classes.profileStyle} src={Profile} alt="" />
    </button>
  );
};

export default Button;

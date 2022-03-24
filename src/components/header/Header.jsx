import React, { useState } from "react";
import classes from "./Header.module.scss";
import Button from "../../UI/buttons/Button";

const Header = ({ name, photo }) => {
  return (
    <div className={classes.MyHeader}>
      <div className={classes.AvatarAndData}>
        <div className={classes.AvatarRectangle}>
          <img className={classes.Avatar} src={photo} alt="Avatar" />
        </div>
        <span className={classes.NameFont}>{name}</span>
      </div>
      <div className={classes.iLinkStyle} />
      <Button
        customClassName={classes.Button}
        onClick={() => alert("Упс, здесь должна быть панель управления")}
      >
        Панель управления
      </Button>
    </div>
  );
};

export default Header;

import React from "react";
import classes from "./Body.module.scss";
import AvatarAndInfo from "./avatarAndInfo/AvatarAndInfo";
import Review from "./review/Review";
import Header from "../header/Header";

const Body = ({ name, photo }) => {
  return (
    <div className={classes.MyBody}>
      <div className={classes.BodyHeader}>Добро пожаловать в академию</div>
      <AvatarAndInfo name={name} photo={photo} />
      <Review />
    </div>
  );
};

export default Body;

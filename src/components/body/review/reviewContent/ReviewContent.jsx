import NoPhoto from "../../photos/NoPhoto.svg";
import React from "react";
import classes from "./ReviewContent.module.scss";
import classesMobile from "./ReviewContentMobile.module.scss";

const ReviewContent = ({ value }) => {
  return (
    <>
      <div className={classes.ReviewContent}>
        <div className={classes.ReviewContentHeaderWrapper}>
          <div className={classes.ReviewContentHeaderAvatarAndNameWrapper}>
            <img
              width="52px"
              height="52px"
              src={value.img ? value.img : NoPhoto}
              alt="Photo"
            />
            <div className={classes.ReviewContentHeaderName}>{value.name}</div>
          </div>
          <span>{value.date}</span>
        </div>
        <div className={classes.ReviewContentText}>{value.comment}</div>
      </div>

      <div className={classesMobile.ReviewContentActive}>
        <div className={classesMobile.ReviewContentHeaderWrapperActive}>
          <div
            className={
              classesMobile.ReviewContentHeaderAvatarAndNameWrapperActive
            }
          >
            <img
              width="40px"
              height="40px"
              src={value.img ? value.img : NoPhoto}
              alt="Photo"
            />
            <div className={classesMobile.ReviewContentHeaderNameActive}>
              {value.name}
            </div>
          </div>
        </div>
        <span>{value.date}</span>
        <div className={classesMobile.ReviewContentTextActive}>
          {value.comment}
        </div>
      </div>
    </>
  );
};

export default ReviewContent;

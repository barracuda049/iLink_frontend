import iLINK from "../svgs/iLINK.svg";
import VK from "../svgs/icons/vk.svg";
import TG from "../svgs/icons/Telegram.svg";
import Frame from "../svgs/icons/Frame.svg";

import React from "react";
import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={classes.MyFooter}>
      <span className={classes.iLink}>
        © iLINK ACADEMY. ALL RIGHTS RESERVED. 2022
      </span>
      <div className={classes.SocialMed}>
        <button>
          <img src={VK} alt="VK" />
        </button>
        <button>
          <img src={Frame} alt="Frame" />
        </button>
        <button>
          <img src={TG} alt="TG" />
        </button>
      </div>
    </div>
  );
};

export default Footer;

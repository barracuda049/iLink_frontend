import PetFood from "../PetFood.svg";
import Male from "../Male.svg";
import React from "react";
import classes from "./AvatarAndInfo.module.scss";
import classesMobile from "./AvatarAndInfoMobile.module.scss";

const AvatarAndInfo = ({ name, photo }) => {
  return (
    <>
      <div className={classes.MyAvatarAndInfo}>
        <img className={classes.Avatar} src={photo} alt="Photo" />
        <div className={classes.Info}>
          <div className={classes.ShortInfo}>
            <span className={classes.Name}>{name}</span>
            <div className={classes.CitySexAge}>
              <span className={classes.BoldFont}>
                Город: <span className={classes.simpleFont}>Томск</span>
              </span>
              <div>
                <span className={classes.SexAndImage}>
                  Пол: <span className={classes.simpleFont}>Мужчина</span>
                </span>
                <img src={Male} alt="Sex" />
              </div>
              <span className={classes.Age}>
                Возраст: <span className={classes.simpleFont}>21</span>
              </span>
            </div>
          </div>
          <span className={classes.Desc}>
            О себе:{" "}
            <span className={classes.simpleFont}>
              Всем привет! Меня зовут Матвей, мне 21 год, я студент. Учусь на
              инженера электронщика, но хочу стать программистом. В ходе рабочей
              программы изучал Java, программировал микроконтроллер на Си.
              Недавно начал изучать React.
              <p>BTW: И да, у меня тоже есть кот!</p>
            </span>
          </span>
          <div className={classes.PetExistWrapper}>
            <img src={PetFood} alt="Food" />
            <span className={classes.PetExistFont}>
              Домашнее животное:{" "}
              <span className={classes.simpleFont}>есть</span>
            </span>
          </div>
        </div>
      </div>

      <div className={classesMobile.MyAvatarAndInfoMobile}>
        <img className={classesMobile.AvatarMobile} src={photo} alt="Photo" />
        <div className={classesMobile.InfoMobile}>
          <div className={classesMobile.ShortInfoMobile}>
            <span className={classesMobile.NameMobile}>{name}</span>
            <div className={classesMobile.CitySexAgeMobile}>
              <span className={classesMobile.BoldFontMobile}>
                Город:{" "}
                <span className={classesMobile.simpleFontMobile}>Томск</span>
              </span>
              <>
                <span className={classesMobile.SexAndImageMobile}>
                  Пол:{" "}
                  <span className={classesMobile.simpleFontMobile}>
                    Мужчина
                  </span>
                </span>
                <img src={Male} alt="Sex" />
              </>
              <span className={classesMobile.AgeMobile}>
                Возраст:{" "}
                <span className={classesMobile.simpleFontMobile}>21</span>
              </span>
            </div>
          </div>
          <div className={classesMobile.DescMobile}>
            <span className={classesMobile.BoldFontMobile}>
              О себе:{" "}
              <span className={classesMobile.simpleFontMobile}>
                Всем привет! Меня зовут Матвей, мне 21 год, я студент. Учусь на
                инженера электронщика, но хочу стать программистом. В ходе
                рабочей программы изучал Java, программировал микроконтроллер на
                Си. Недавно начал изучать React.
                <p>BTW: И да, у меня тоже есть кот!</p>
              </span>
            </span>
          </div>

          <div className={classesMobile.PetExistWrapperMobile}>
            <img src={PetFood} alt="Food" />
            <span className={classesMobile.PetExistFontMobile}>
              Домашнее животное:{" "}
              <span className={classesMobile.simpleFontMobile}>есть</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AvatarAndInfo;

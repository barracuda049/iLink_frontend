import Cancel from '../../components/svgs/icons/Cancel.svg'
import Add from '../../components/svgs/AddWhite.svg'
import InfoTag from '../../components/svgs/icons/InfoSquare.svg'
import NoPhoto from '../../components/body/photos/NoPhoto.svg'
import DeleteTag from '../../components/svgs/icons/Delete.svg'
import IconJpeg from '../../components/svgs/icons/jpg 1.svg'
import LoadInProgressTag from '../../components/svgs/icons/Vector.svg'

import React, {useState} from 'react';
import classes from './Model.module.scss'
import Button from "../buttons/Button";

const Model = ({visible, setVisible,create}) => {

    const rootClasses = [classes.model]
    if(visible) {
        rootClasses.push(classes.active)
    }

    const [desc,setDesc] = useState("")
    const [name,setName] = useState("")
    const [date, setDate] = useState(new Date())
    const [imageUrl, setImageUrl] = useState(null)
    const [nameImage, setNameImage] = useState()
    const [imageSize, setImageSize] = useState(null)
    const [loadInProgress, setLoadInProgress] = useState(false)



    const addReview = () =>{
        if(desc && name && (imageSize < 200)) {
            const newReview = {
                id: Date.now(),
                name: name,
                comment:desc,
                img: imageUrl ? imageUrl : NoPhoto,
                date: date.toLocaleDateString()

            };
            create(newReview)
            setDesc("")
            setName("")
            setImageUrl(null)
            setVisible()
        }

    }

    const uploadFile = (e) =>{
        const reader = new FileReader()
        reader.onprogress = () =>{
            setLoadInProgress(true)
        }
        reader.onload = () =>{
            if(reader.readyState === 2){
                setImageUrl(reader.result)
                setLoadInProgress(false)
            }
        }
        reader.readAsDataURL(e.target.files[0])
        setNameImage(e.target.files[0].name)
        setImageSize(e.target.files[0].size/1024)
    }

    const deleteImg = () =>{
        setImageUrl(null)
        setImageSize(0)
    }

    return (
      <div className={rootClasses.join(" ")}>
        <div
          className={
            classes.modelContent +
            (imageUrl ? " " + classes.modelContentImgLoad : "")
          }
        >
          <div className={classes.headerWrapper}>
            <span className={classes.headerFont}>Отзыв</span>
            <button
              onClick={() => {
                setVisible();
                setImageUrl(null);
                setName("");
                setDesc(null);
              }}
              className={classes.buttonCancel}
            >
              <img src={Cancel} alt="Cancel" />
            </button>
          </div>
          <span className={classes.spanAskName}>Как вас зовут?</span>
          <div className={classes.formWrapper}>
            <input
              className={classes.inputStyle}
              type="text"
              value={name}
              placeholder="Имя и фамилия"
              onChange={(e) => setName(e.target.value)}
            />
            <label className={classes.labelStyle}>
              <input type="file" onChange={uploadFile} accept="image/jpeg" />
              <div className={classes.divWithImage}>
                <img src={Add} alt="AddTag" />
                <span className={classes.spanStyle}>Загрузить фото</span>
              </div>
            </label>
          </div>
          <div
            className={
              imageUrl
                ? classes.photoLoadWrapperActive
                : classes.photoLoadWrapper
            }
          >
            {imageSize < 200 ? (
              <>
                <img width="28px" height="28px" src={IconJpeg} alt="" />
                <span className={classes.nameImgFont}>
                  {nameImage}
                  <div
                    className={
                      loadInProgress ? classes.redLine : classes.successLoadLine
                    }
                  />
                </span>
                <img
                  src={loadInProgress ? LoadInProgressTag : DeleteTag}
                  alt=""
                  width="20px"
                  height="20px"
                  onClick={!loadInProgress && deleteImg}
                  style={{ cursor: "pointer" }}
                />
              </>
            ) : (
              <>
                <img width="28px" height="28px" src={IconJpeg} alt="" />
                <span
                  className={
                    classes.nameImgFont + " " + classes.nameImgFontRead
                  }
                >
                  Your file is too big!
                  <div
                    className={classes.successLoadLine + " " + classes.redLine}
                  />
                </span>
                <img
                  src={DeleteTag}
                  alt=""
                  width="20px"
                  height="20px"
                  style={{ cursor: "pointer" }}
                  onClick={deleteImg}
                />
              </>
            )}
          </div>
          <div className={classes.allIsRightWrapper}>
            <span className={classes.spanAllIsRightFont}>
              Все ли понравилось?
            </span>
            <textarea
              className={classes.textAreaStyle}
              value={desc}
              placeholder="Напишите пару слов о вашем опыте..."
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>

          <div className={classes.footerStyle}>
            <Button
              customClassName={classes.Button}
              onClick={addReview}
              style={{ width: "203px" }}
            >
              Отправить отзыв
            </Button>
            <div className={classes.wrapper}>
              <img src={InfoTag} alt="Ifo Tag" />
              <span className={classes.spanFooter}>
                Все отзывы проходят модерацию в течение 2 часов
              </span>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Model;
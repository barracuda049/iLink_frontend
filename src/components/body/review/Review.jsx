import ArrowDefault from '../arrow/ArrowDefault.svg'
import ArrowDisabled from '../arrow/ArrowDisabled.svg'
import Dmit from '../photos/Dmit.svg'
import Buba from '../photos/Buba.svg'
import Margarita from '../photos/Marg.svg'
import NoPhoto from '../photos/NoPhoto.svg'

import React, {useEffect, useState} from 'react';
import classes from './Review.module.scss'
import classesMobile from './ReviewMobile.module.scss'

import ReviewContent from "./reviewContent/ReviewContent";
import Model from "../../../UI/models/Model";
import ButtonWithImg from "../../../UI/buttons/ButtonWithImg";


const Review = () => {

    const [value, setValue] = useState([
         {id:1,img:Buba,name: "Буба Бубенцов", comment:"Отличный коллектив, руководители понимают сам процесс работы каждого сотрудника и помогают всем без исключения. Система KPI позволяет реально хорошо зарабатывать по простому принципу - чем больше и лучше ты работаешь, тем больше денег получаешь. Соцпакет - отличная страховка ДМС, организовали курсы английского языка бесплатно, оплачивают тренажерный зал. Зарплату выплачивают всегда вовремя.", date:"08.01.2022"},
         {id:2,img:NoPhoto,name:"Илья Анташкевич", comment: "Год назад попытал счастье, откликнулся на вакансию, прошел собес и попал в компанию. Долго переживал что будет тяжело влиться, но тут прям классные ребята работают, все на одной волне. Всегда готовы помочь с любым вопросом. Для эффективной работы здесь нужно хорошо знать иностранные языки.", date: "08.01.2022"},
         {id:3,img:Margarita,name: "Юрина Маргарита", comment: "Наша компания благодарна фирме ilink за сотрудничество. Хотелось бы отметить отличную работу сотрудников: все было выполнено качественно, со знанием дела, в установленные сроки. За время работы с компанией значительно увеличилась аудитория, сайт приносит стабильный доход, контент уникальный, грамотный и качественный. Будет продолжать работу и дальше. Мы довольны, что доверили создание сайта компании ilink.", date: "26.12.2021"},
         {id:4,img:Dmit,name: "Дмитрий Иванов", comment: "Отвечала за найм и адаптацию сотрудников в компании, за поддержание на нужном уровне HR-бренда и трудового настроя коллектива. В компанию пришла без опыта работы HR-ом. Всему научилась здесь. Как теории, так и практике. Набрала опыт достаточно быстро. Есть программа обучения, поощряются различные курсы, и это большой плюс. В коллективе очень дружная атмосфера. Все дружелюбные, амбициозные.",date: "16.12.2021"}
     ])

    const [page, setPage] = useState(1)
    const [modal, setModal] = useState(false)
    const [currentArrowLeft, setCurrentArrowLeft] = useState((ArrowDisabled))
    const [currentArrowRight, setCurrentArrowRight] = useState(ArrowDefault)
    const [arrayLines, setArrayLines] = useState([])

    useEffect(()=>{
        setCurrentArrowLeft(page === 1 ? ArrowDisabled : ArrowDefault)
        setCurrentArrowRight(page === Math.ceil(value.length/2) ? ArrowDisabled : ArrowDefault)

    },[page,value.length])


    const setVisible = () =>{
        setModal(!modal)
    }

    const addReview = review => setValue([...value,review])



    const renderLines = () =>{
        let resultArray = []

        for (let i= 1;i<=Math.ceil(value.length/2); i++){
            resultArray.push(<div className={classes.reviewTab + (page === i? " "+classes.reviewActiveTab:"")} key={i}/>)
        }

        return resultArray
    }



    return (
      <div className={classes.MyReview}>
        <Model visible={modal} setVisible={setVisible} create={addReview} />
        <div className={classes.ReviewWrapper}>
          <div className={classes.ReviewHeader}>
            <span className={classes.review}>Отзывы</span>
            <div className={classes.ButtonWrapper}>
              <ButtonWithImg
                newStyle={classes.buttonWithImg}
                onClick={() => setModal(true)}
              >
                Добавить отзыв
              </ButtonWithImg>
            </div>
          </div>

          <div className={classes.ReviewContentWrapper}>
            <ReviewContent value={value[2 * (page - 1)]} />
            <div className={classes.notVsibleForMobile}>
              {Boolean(value?.[2 * page - 1]) && (
                <ReviewContent value={value[2 * page - 1]} />
              )}
            </div>
          </div>

          <div className={classes.footerWrapperCurrent}>{renderLines()}</div>
        </div>

        <div className={classes.ArrowWrapper}>
          <button
            onClick={() => {
              page > 1 && setPage(page - 1);
            }}
          >
            <img
              style={{ transform: "rotate(180deg)" }}
              src={currentArrowLeft}
              alt="ArrowDisabled"
            />
          </button>
          <button
            onClick={() => {
              page < Math.ceil(value.length / 2) && setPage(page + 1);
            }}
          >
            <img src={currentArrowRight} alt="ArrowDefault" />
          </button>
        </div>
      </div>
    );
};

export default Review;
import React from "react";
import {Link} from "react-router-dom";
//links
// @ts-ignore
import maket from "../../../materials/frameworks/maket.png";
// @ts-ignore
import maketMobile from "../../../materials/frameworks/maket-mobile.pdf";
//styles
import "../style.scss"

export const Frame1 = () => {
    return (
        <div className="css-task css1">
            <h1>01. Frameworks</h1>
            <h2>Домашнее задание - базовое #1</h2>
            <p>С помощью фреймворка Fondation сверстать страницу по <Link to={maket} target="_blank" rel="noreferrer">ссылке</Link>. Сделать <Link to={maketMobile} target="_blank" rel="noreferrer">мобильную версию</Link> средствами фреймворка, не используя свои медиазапросы</p>
            <p>Документация: <a href="https://get.foundation/" target="_blank" rel="noreferrer">https://get.foundation</a></p>
            <hr/>
            <h2>Домашнее задание - Дополнительное #1</h2>
            <p>С помощью фреймворка Skeleton сверстать страницу по <Link to={maket} target="_blank" rel="noreferrer">ссылке</Link>. Сделать <Link to={maketMobile} target="_blank" rel="noreferrer">мобильную версию</Link> средствами фреймворка, не используя свои медиазапросы</p>
            <p>Документация: <a href="http://getskeleton.com/" target="_blank" rel="noreferrer">http://getskeleton.com/</a></p>
            <p>Подключение через CDN: <a href="https://cdnjs.com/libraries/skeleton" target="_blank" rel="noreferrer">https://cdnjs.com/libraries/skeleton</a></p>
        </div>
    )
}
import React from "react";
import { Link } from "react-router-dom";
//links
import cards from "../../../materials/css/css_2/cards.png";
import conteinerWithCode from "../../../materials/css/css_2/container_with_code.png";
import navigation from "../../../materials/css/css_2/navigation.png";
//styles
import "../style.scss";


export const Css2 = () => {
    return(
        <div className="css-task css2">
            <h1>02. CSS. Фон, списки, контейнерный дизайн</h1>
            <h2>Домашнее задание - базовое #1</h2>
            <p>Используя спрайт по <Link to={cards} target="_blank">ссылке</Link></p>
            <ul>
                <li>
                    Разложите карты так, что бы получился
                    <div>
                        <span>&#127162;</span>
                        <span>&#127149;</span>
                        <span>&#127177;</span>
                        <span>&#127185;</span>
                        <span>&#127199;</span>
                        <div className="clearfix"/>
                    </div>
                </li>
                <li>Разложите карты так, что бы они накладывались друг на друга</li>
            </ul>
            <hr/>
            <h2>Домашнее задание - базовое #2</h2>
            <h4>Оформление списков и контейнеров.</h4>
            <p>Оформите список и контейнер с кодом согласно образцу (требования к заданию - внутри задания)</p>
            <img src={conteinerWithCode} alt="conteinerWithCode"/>
            <p>В итоге должно получиться как на изображении (отступы не важны)</p>
            <hr/>
            <h2>Домашнее задание - базовое #3</h2>
            <p>Сверстайте страницу с блоками так как на образце и с учетом указанных там требований.</p>
            <img src={navigation} alt="navigation"/>
            <p>Примечание: в данном задании "Статья 1" и "Статья 2" должны иметь один и тот же класс</p>
            <hr/>
            <h2>Домашнее задание - дополнительное #1</h2>
            <p>Используя пример с нашего занятия и дополнительный материал <a href="https://drive.google.com/drive/folders/1JPRdME-MA8SIm3P6B7w_yR36ObYNKpO6?usp=sharing" target="_blank">здесь</a>, сверстайте "резиновую" рамку всеми доступными 4-мя предложенными в примерах способами:</p>
            <ul>
                <li>
                    Мульти-фон для одного блока - 2 варианта в примерах: <br/>
                    - один в презентации;
                    - второй в <a href={"https://drive.google.com/file/d/1GcrQxy5y2iPTD1CHrOLj9A2ZhCqi8gEG/view?usp=sharing"} target="_blank">архиве</a>
                </li>
                <li>Классический вариант - девятью вложенными друг в друга &lt;div&gt;</li>
                <li>С использованием стилевого свойства border-image, так же описанного в <a href="https://drive.google.com/file/d/1GcrQxy5y2iPTD1CHrOLj9A2ZhCqi8gEG/view?usp=sharing" target="_blank">архиве</a></li>
            </ul>
            <hr/>
            <h2>Домашнее задание - дополнительное #2</h2>
            <p>Используя <a href="https://css-live.ru/articles-css/shpargalka-po-shpargalke-po-flexbox.html" target="_blank">эту шпаргалку</a> сверстайте задание "Домашнее задание - базовое #3" полностью при помощи flex блоков</p>
        </div>
    )
}



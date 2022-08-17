import React from "react";

//link
import hMenu from "../../../materials/css/css_3/h_menu.png";
import vMenu from "../../../materials/css/css_3/vert_menu.png";
//style
import "../style.scss";


export const Css3 = () => {
    return(
        <div className="css-task css3">
            <h1>03. CSS. Адаптивная навигация</h1>
            <h2>Домашнее задание - базовое</h2>
            <p>Сделать навигационное меню (ссылка на пример есть в нашей таблице), которое изображено ниже на изображении и применить адаптивность: <br/>
                при широком экране меню перестраивается в горизонтальное, подменю выпадает вниз:
            </p>
            <img src={hMenu} alt="horizontal menu" className="horizontal_menu"/>
            <p>при узком экране - остаётcя вертикальным, подменю выпадает вправо:</p>
            <img src={vMenu} alt="vertical menu" className="vertical_menu"/>
            <p>Точку перехода определить такую, чтобы при ее использовании все дни недели смогли влезть по горизонтали. Как только последний день недели в меню не вмещается по горизонтали - будет ваша точка перехода</p>
            <hr/>
            <h2>Домашнее задание - дополнительное</h2>
            <p>Реализуйте эффект плавного появления/выезда подменю для базового задания (подсказка: погуглите свойство transition)</p>
        </div>

    )
}

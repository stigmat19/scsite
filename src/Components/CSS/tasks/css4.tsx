import React from "react";
import { Link } from "react-router-dom";

//links
import docs from "../../../materials/css/css_4/docs.png";
import extref from "../../../materials/css/css_4/extref.png";
import logoDoc from "../../../materials/css/css_4/logo-doc.jpg";
import logoList from "../../../materials/css/css_4/logo-list.jpg";
import logoPdf from "../../../materials/css/css_4/logo-pdf.png";
import logoZip from "../../../materials/css/css_4/logo-zip.gif";
import table from "../../../materials/css/css_4/table.png";
import chess from "../../../materials/css/css_4/chess.png";
import example from "../../../materials/css/css_4/example.png";
import chessWithCounter from "../../../materials/css/css_4/chess_with_counter.png";

//styles
import "../style.scss"


export const Css4 = () => {
    return(
        <div className="css-task css4">
            <h1>04. CSS. Комбинаторы. Псевдоэлементы и псевдоклассы</h1>
            <h2>Домашнее задание - базовое #1</h2>
            <p>Сверстать макет представленный на изображении, изображения на ссылки добавить одним из 2 предложенных способов:</p>
            <ul>
                <li>Добавить тег img: &lt;img src="..."&gt;&lt;a href="..."&gt;документ&lt;/&gt;</li>
                <li>Использовать фон на ссылке c padding: &lt;a href="..." style="background-image: url(...); padding: ..."&gt;документ&lt;/&gt;</li>
            </ul>
            <p>При наведении на ссылки в списке файлов, рядом с каждой ссылкой показывать соответствующее файлу изображение справо от ссылки:</p>
            <img src={docs} alt=""/>
            <p>Изображения:</p>
            <ul>
                <li><img src={extref} alt=""/></li>
                <li><img src={logoDoc} alt=""/></li>
                <li><img src={logoList} alt=""/></li>
                <li><img src={logoPdf} alt=""/></li>
                <li><img src={logoZip} alt=""/></li>
            </ul>
            <hr/>
            <h2>Домашнее задание - базовое #2</h2>
            <p>Сверстать таблицу представленную на изображении ниже:</p>
            <img src={table} alt=""/>
            <p>При наведении на строки таблицы, менять цвет всей строки (цвет выбрать самостоятельно)</p>
            <hr/>
            <h2>Домашнее задание - базовое #3</h2>
            <p>Сверстать таблицу, используя специальные селекторы (!!! не использовать !important)</p>
            <img src={chess} alt=""/>
            <hr/>
            <h2>Домашнее задание - дополнительное #1</h2>
            <p>Сверстать макет из первого базового задания, используя псевдоелементы before и after, а так же выборку элемента сделать при помощи специального селектора [атрибут="значение"], пример на изображении ниже:</p>
            <img src={example} alt=""/>
            <hr/>
            <h2>Домашнее задание - дополнительное #2</h2>
            <p>Используя документацию по <a href="https://hcdev.ru/css/counter-increment" target="_blank">ссылке</a> и шахматную доску из 3 базового задания, сделать шахматную доску с уменьшающимися цифрами</p>
            <img src={chessWithCounter} alt=""/>
        </div>
    )
}
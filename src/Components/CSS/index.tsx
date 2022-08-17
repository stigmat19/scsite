import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import {Collapse} from "antd";

const { Panel } = Collapse;

export const CssMain = () => {

    return(
        <>
            <div className="CssMain">
                <h1>CSS</h1>
                <Collapse defaultActiveKey={['1']}>
                    <Panel header="Задания" key="1">
                        <ul>
                            <li><Link to="css/1">01. CSS. Определение стилей. Работа с оформлением текста</Link></li>
                            <li><Link to="css/2">02. CSS. Фон, списки, контейнерный дизайн</Link></li>
                            <li><Link to="css/3">03. CSS. Адаптивная навигация</Link></li>
                            <li><Link to="css/4">04. CSS. Комбинаторы. Псевдоэлементы и псевдоклассы</Link></li>
                        </ul>
                    </Panel>
                    <Panel header="Ссылки" key="2">
                        <h2>Здесь будут располагаться некоторые полезные ссылки с демонстрацией кода и некоторыми приёмами для CSS.</h2>
                        <ul>
                            <li><a href="https://habr.com/ru/post/64173/" target="_blank" rel="noreferrer">4 способа как создать блоки одинаковой высоты</a></li>
                            <li><a href="https://habr.com/ru/post/121810/" target="_blank" rel="noreferrer">Поговорим о margin, он же маргин</a></li>
                            <li><a href="https://habr.com/ru/post/154319/" target="_blank" rel="noreferrer">Популярно о псевдоэлементах :Before и :After</a></li>
                            <li><a href="http://css.yoksel.ru/strelki-s-pomoshh-yu-svojstva-border/" target="_blank" rel="noreferrer">Стрелки с помощью css</a></li>
                            <li><a href="https://gschoppe.com/uncategorized/add-auto-sensing-file-type-icons-to-lists-of-downloads-with-fontawesome-and-css/" target="_blank" rel="noreferrer">Авто генерирование иконок для типов файлов</a></li>
                        </ul>
                        <h2>Префиксы (браузерные приставки):</h2>
                        <ul>
                            <li><a href="https://www.thoughtco.com/css-vendor-prefixes-3466867" target="_blank" rel="noreferrer">https://www.thoughtco.com/css-vendor-prefixes-3466867</a></li>
                            <li><a href="https://habrahabr.ru/post/137670/" target="_blank" rel="noreferrer">https://habrahabr.ru/post/137670</a></li>
                            <li><a href="https://caniuse.com/" target="_blank" rel="noreferrer">https://caniuse.com/</a></li>
                        </ul>
                    </Panel>
                </Collapse>
            </div>
        </>
    )
}
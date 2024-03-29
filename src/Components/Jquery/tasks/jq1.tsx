import React from "react";
import { Link } from "react-router-dom";
//links
//styles

export const Jq1 = () => {
    return (
        <div className="jq-task jq1">
            <h1>01. CSS. Определение стилей. Работа с оформлением текста</h1>
            <h2>Домашнее задание - базовое #1</h2>
            <p>Используя jquery сделать функционал показанный на <a href={"https://youtu.be/7p1VaKf1Dws"} target="_blank" rel="noreferrer">видео</a></p>
            <ul>
                <li>1) Сверстать таблицу</li>
                <li>2) При нажатии на строку таблицы, скрывать ее</li>
                <li>3) Под таблицей сделать кнопку, при нажатии на которую показать все скрытые строки</li>
            </ul>
            <hr/>
            <h2>Домашнее задание - Дополнительное #1</h2>
            <p>Используя jquery сделать функционал показанный на <a href={"https://youtu.be/WJi2ThYWLGQ"} target="_blank" rel="noreferrer">видео</a></p>
            <ul>
                <li>1) Сверстать форму</li>
                <li>2) При вводе разных значений в инпуты, подсветить красным</li>
                <li>3) Если пароли совпадают подсветить зеленым</li>
            </ul>
        </div>
    )
}
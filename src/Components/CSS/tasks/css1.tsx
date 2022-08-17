import React from "react";
import { Link } from "react-router-dom";
//links
import letter from "../../../materials/css/css_1/letter.png";
//styles
import "../style.scss"

export const Css1 = () => {
    return (
        <div className="css-task css1">
            <h1>01. CSS. Определение стилей. Работа с оформлением текста</h1>
            <h2>Домашнее задание - базовое #1</h2>
            <p>В файлах с описанием уроков Python определите стиль тела (body) документа.
                Для устройств с типом экрана "screen" необходимо в этом задании применить:</p>
            <div className="exampleCode">
                <h3>Screen</h3>
                <p>
                    font-family: sans-serif; <br/>
                    font-size: 14px;<br/>
                    background-color: #eee;
                </p>
            </div>
            <p>Или для вывода на печать:</p>
            <div className="exampleCode">
                <h3>Print</h3>
                <p>
                    font-family: sans-serif; <br/>
                    font-size: 14px; <br/>
                    background-color: #eee;
                </p>
            </div>
            <p>Следующими способами:</p>
            <ul>
                <li>
                    Используя встроенные стили (только для вывода на экран)
                    <p>Пример: &lt;body style="стили"&gt;</p>
                </li>
                <li>
                    Используя таблицу стилей в файле html
                    <p>
                        &lt;style media="screen"&gt;
                        стили
                        &lt;/style&gt; <br/>
                        &lt;style media="print"&gt;
                        стили
                        &lt;/style&gt;
                    </p>

                </li>
                <li>
                    Импортируйте из файла с использованием тега  &lt;link&gt;
                    <p>
                        &lt;link rel="stylesheet" href="mystyle_for_screen" media="screen"/&gt; <br/>
                        &lt;link rel="stylesheet" href="mystyle_for_print" media="screen"/&gt;
                    </p>

                </li>
                <li>
                    импортируйте, используя директиву @import в таблице стилей файла html (внутри тега &lt;style&gt;)
                    <p>
                        &lt;style&gt;
                            @import "link_to_style_print.css" print
                        &lt;/style&gt; <br/>
                        &lt;style&gt;
                        @import "link_to_style_screen.css" screen
                        &lt;/style&gt;
                    </p>
                </li>
                <li>
                    Импортируйте оба стиля из выше созданных файлов, используя директиву @import во внешнем файле стилей (style.css)
                </li>
            </ul>
            <p>Все варианты должны работать независимо друг от друга. <br/> Постарайтесь каждый вариант выполнить в новом файле.</p>
            <hr/>
            <h2>Домашнее задание - базовое #2</h2>
            <p>Оформите "Сопроводительное письмо" согласно макету</p>
            <Link to={letter} target="_blank">Ссылка на макет</Link>
        </div>
    )
}
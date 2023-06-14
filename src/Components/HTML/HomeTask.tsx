import React from "react";
import {Link, useParams} from "react-router-dom";
// @ts-ignore
import html1add from "../../materials/table/add_task_new.pdf";
// @ts-ignore
import html1first from "../../materials/table/4.pdf";
// @ts-ignore
import html1second from "../../materials/table/5.pdf";
// @ts-ignore
import html1third from "../../materials/table/6.pdf";
// @ts-ignore
import weather from "../../img/table_wether.png";
// @ts-ignore
import month from "../../img/month.png";
// @ts-ignore
import siteBy from "../../img/site_by.png";
// @ts-ignore
import menu from "../../materials/html_3/menu_html.pdf";
// @ts-ignore
import phytonWithLink1 from "../../materials/html_3/python_01_link.pdf";
// @ts-ignore
import phytonWithLink2 from "../../materials/html_3/python_02_link.pdf";
// @ts-ignore
import phytonWithLink3 from "../../materials/html_3/python_03_link.pdf";
// @ts-ignore
import phytonWithImg1 from "../../materials/html_4/python_01_link_img.pdf";
// @ts-ignore
import phytonWithImg2 from "../../materials/html_4/python_02_link_img.pdf";
// @ts-ignore
import phytonWithImg3 from "../../materials/html_4/python_03_link_img.pdf";
// @ts-ignore
import prev from "../../materials/html_4/prev.png";
import next from "../../materials/html_4/next.png";
import home from "../../materials/html_4/home.png";
import phytonLogo from "../../materials/html_4/Icon-Python.png";
import email from "../../materials/html_5/email.jpg";
// @ts-ignore
import formReg from "../../materials/html_5/form_reg.pdf";
// @ts-ignore
import forms from "../../materials/html_5/forms.pdf";
import { ParamTypes } from "../interfaces/parametrs"

import "./style.scss"

export const HomeTask = () => {

    const renderHtml1 = () => {
        return (
            <>
                <h1>01. HTML. Теги и атрибуты</h1>
                <h2>Домашнее задание - базовое</h2>
                <ul>
                    <li><Link to={html1first} target="blank">Программа на Python — часть 1</Link></li>
                    <li><Link to={html1second} target="blank">Программа на Python — часть 2</Link></li>
                    <li><Link to={html1third} target="blank">Программа на Python — часть 3</Link></li>
                </ul>
                <hr/>
                <h2>Домашнее задание - дополнительное</h2>
                <ul>
                    <li>
                        <Link to={html1add} target="blank">Дополнительное задание</Link>
                    </li>
                </ul>
                <hr/>
                <h2>Ссылки для дополнительного изучения:</h2>
                <ul>
                    <li>
                        <Link to="http://html5doctor.com/the-address-element/" target="blank">http://html5doctor.com/the-address-element/</Link>
                    </li>
                    <li>
                        <Link to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote" target="blank">https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote</Link>
                    </li>
                    <li>
                        <Link to="http://html5doctor.com/blockquote-q-cite/" target="blank">http://html5doctor.com/blockquote-q-cite/</Link>
                    </li>
                    <li>
                        <Link to="https://habrahabr.ru/post/72141/" target="blank">https://habrahabr.ru/post/72141/</Link>
                    </li>
                </ul>
            </>
        )
    }

    const renderHtml2 = () => {
        return (
            <>
                <h1>02. HTML. Таблицы</h1>
                <h2>Домашнее задание - базовое</h2>
                <h3>Создайте таблицу с прогнозом погоды как показано на рисунке.</h3>
                <ul>
                    <li>Знак градуса необходимо реализовать как минимум двумя способами</li>
                    <li>Таблицу разместить по центру страницы</li>
                </ul>
                <img src={weather} alt="img"/>
                <hr/>
                <h2>Домашнее задание - дополнительное</h2>
                <h3>Создайте фрагмент календаря месяца вашего дня рождения текущего года согласно образцу показанному ниже.</h3>
                <ul>
                    <li>Таблицу разместить по центру страницы</li>
                    <li>Столбцы с цифровыми значениями должны иметь одинаковую ширину</li>
                </ul>
                <img src={month} alt="img"/>
            </>
        )
    }

    const renderHtml3 = () => {
        return(
            <>
                <h1>03. HTML. Ссылки</h1>
                <h2>Домашнее задание - базовое</h2>
                <h3>Продолжить оформление разделов:</h3>
                <ul>
                    <li><Link to={phytonWithLink1} target="_blank" rel="noreferrer">Программа на Python — часть 1</Link></li>
                    <li><Link to={phytonWithLink2} target="_blank" rel="noreferrer">Программа на Python — часть 2</Link></li>
                    <li><Link to={phytonWithLink3} target="_blank" rel="noreferrer">Программа на Python — часть 2</Link></li>
                </ul>
                <h3>Сделать:</h3>
                <ul>
                    <li>Убрать избыточное форматирование (скорее всего у вас остались теги &lt;u&gt; или &lt;ins&gt; которые дают уже подчеркивание, и ссылки добавляют свои, их можно удалить - это и есть "убрать избыточное форматирование")</li>
                    <li>Добавить ссылки на страницы</li>
                    <li>Добавить ссылки на разделы страниц</li>
                    <li>Добавить ссылки на оглавление</li>
                    <li>В части 3 добавить ссылки на соответствующие статьи в вики на тексте Linux, Mac и Microsoft Windows, данные ссылки должны открываться в новом окне (вкладке)</li>
                </ul>
                <hr/>
                <h2>Домашнее задание - дополнительное</h2>
                <h3>Продолжить оформление разделов:</h3>
                <ul>
                    <li>Оформить меню согласно <Link to={menu} target="_blank" rel="noreferrer">макету</Link>.</li>
                    <li>После оформления организовать "физическую структуру" файлов и каталогов согласно схеме указанной на рисунке.</li>
                    <li>Меню должно находиться в каждом файле и работать таким образом, чтобы из любого файла перейти в любой файл.</li>
                </ul>
                <h3>Примечание: файлы можно создать простым копированием исходного макета </h3>
                <img src={siteBy} alt="img"/>
                <h2>Ссылки для дополнительного изучения:</h2>
                <h3>Относительные и абсолютные ссылки</h3>
                <ul>
                    <li><a href="http://htmlbook.ru/samhtml/ssylki/absolyutnye-i-otnositelnye-ssylki">Абсолютные и относительные ссылки</a></li>
                    <li><a href="http://www.coffeecup.com/help/articles/absolute-vs-relative-pathslinks/">ABSOLUTE VS. RELATIVE PATHS/LINKS</a></li>
                </ul>
                <h3>Физическая структура сайта:</h3>
                <ul>
                    <li><a href="http://webstyleguide.com/wsg3/5-site-structure/3-site-file-structure.html">http://webstyleguide.com/wsg3/5-site-structure/3-site-file-structure.html</a></li>
                    <li><a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/Dealing_with_files">https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/Dealing_with_files</a></li>
                </ul>
            </>
        )
    }

    const renderHtml4 = () => {
        return(
            <>
                <h1>04. HTML. Мультмедиа в HTML</h1>
                <h2>Домашнее задание - базовое</h2>
                <Link to="https://drive.google.com/drive/folders/1yA-4jsgTNgU7_kY4oF2XHBPn43QN1Q3U?usp=sharing" target="_blank" rel="noreferrer">Материал для заданий</Link>
                <h3>Добавить графические элементы в файлах как указано в шаблоне:</h3>
                <ul>
                    <li><Link to={phytonWithImg1} target="_blank" rel="noreferrer">Программа на Python — часть 1</Link></li>
                    <li><Link to={phytonWithImg1} target="_blank" rel="noreferrer">Программа на Python — часть 2</Link></li>
                    <li><Link to={phytonWithImg1} target="_blank" rel="noreferrer">Программа на Python — часть 3</Link></li>
                </ul>
                <h3>Функционал нижних кнопок:</h3>
                <ul>
                    <li>
                        <img src={prev} alt="img"/>
                        - переход на предыдущую страницу (если предыдущей страницы нет - пустая ссылка)
                    </li>
                    <li>
                        <img src={next} alt="img"/>
                        - переход на следующую страницу (если следующей страницы нет - пустая ссылка)
                    </li>
                    <li>
                        <img src={home} alt="img"/>
                        - переход к верхнему (основному содержанию текущей страницы)
                    </li>
                </ul>
                <p>Кнопки должны работать на каждой странице, располагаться в одну линию, левая кнопка - у левого края страницы, правая - у правого, кнопка "к содержанию" должна быть точно по центру страницы. Каждая кнопка должна иметь описанные атрибуты alt и title.</p>
                <p>Добавить логотип Python. Располагаться должен вверху справа страницы и иметь описанные атрибуты alt и title.</p>
                <img src={phytonLogo} alt="img"/>
                <hr/>
                <h2>Домашнее задание - дополнительное</h2>
                <h3>Реализуйте кнопки переходов. описанных в предыдущем задании, при помощи векторной графики (SVG). Материал для изучения:</h3>
                <ul>
                    <li>
                        <a href="https://developer.mozilla.org/ru/docs/Web/SVG" target="_blank" rel="noreferrer">Документация</a>
                    </li>
                    <li>Клипарт: <a href="http://clipart.nicubunu.ro/">http://clipart.nicubunu.ro/</a></li>
                    <li>Клипарт: <a href="http://svgcuts.com/blog/category/fsvgotw/">http://svgcuts.com/blog/category/fsvgotw/</a></li>
                    <li><a href="https://editor.method.ac/">SVG editor online</a></li>
                </ul>
            </>
        )
    }

    const renderHtml5 = () => {
        return (
            <>
                <h1>05. HTML. Формы в HTML</h1>
                <h2>Домашнее задание - базовое</h2>
                <a href="https://drive.google.com/drive/folders/1yA-4jsgTNgU7_kY4oF2XHBPn43QN1Q3U?usp=sharing" target="_blank" rel="noreferrer">Материал для заданий</a>
                <h3>Формы отправки данных: (рекомендации для оформления внутри документов, графические материалы <img src={email} alt="img"/>)</h3>
                <Link to={forms} target="_blank" rel="noreferrer">Формы</Link>
                <p>Для проверки ваших отправляемых значений воспользуйтесь данным скриптом (просто добавьте путь к нему в значение атрибута action, тега form ): http://fe.it-academy.by/TestForm.php</p>
                <hr/>
                <h2>Домашнее задание - дополнительное</h2>
                <Link to={formReg} target="_blank" rel="noreferrer">Форма регистрации</Link>
                <p>Для проверки ваших отправляемых значений воспользуйтесь данным скриптом (просто добавьте путь к нему в значение атрибута action, тега form ): http://fe.it-academy.by/TestForm.php</p>
                <hr/>
                <h3>Ссылки для дополнительного изучения</h3>
                <h4>Регулярные выражения:</h4>
                <ul>
                    <li>
                        <a href="https://ru.wikipedia.org/wiki/%D0%A0%D0%B5%D0%B3%D1%83%D0%BB%D1%8F%D1%80%D0%BD%D1%8B%D0%B5_%D0%B2%D1%8B%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F">Википедия</a>
                    </li>
                    <li>
                        <a href="https://learncodethehardway.org/">Learn Regex The Hard Way</a>
                    </li>
                    <li>
                        <a href="http://htmlbook.ru/html/input/pattern">htmlbook</a>
                    </li>
                    <li>
                        <a href="https://htmlweb.ru/html/form/form_input_pattern.php">Примеры шаблонов для html5 form input pattern</a>
                    </li>
                    <li>
                        <a href="https://www.the-art-of-web.com/html/html5-form-validation/">pattern - примеры использования pattern для валидации данных в формах</a>
                    </li>
                </ul>
                <h4>Прочее</h4>
                <ul>
                    <li><a href="https://sitear.ru/material/zapret-keshirovaniya-stranicy-html-php-htaccess">Запрет кэширования в браузере</a></li>
                </ul>
            </>
        )
    }

    const { id } = useParams<ParamTypes>();

    return(
        <>
            <div className="HomeTaskStyle">
                <Link to="/html">Назад</Link>
                <hr/>
                {id === "1" ? renderHtml1(): null }
                {id === "2" ? renderHtml2(): null }
                {id === "3" ? renderHtml3(): null }
                {id === "4" ? renderHtml4(): null }
                {id === "5" ? renderHtml5(): null }
            </div>
        </>
    )
}

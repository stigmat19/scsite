import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import {Collapse} from "antd";

const { Panel } = Collapse;

export const FrameworkMain = () => {

    return(
        <>
            <div className="CssMain">
                <h1>Frameworks</h1>
                <Collapse defaultActiveKey={['1']}>
                    <Panel header="Задания" key="1">
                        <ul>
                            <li><Link to="frameworks/1">01. FW. Задания</Link></li>
                        </ul>
                    </Panel>
                    <Panel header="Ссылки" key="2">
                        <ul>
                            <li><a href="https://proglib.io/p/css-grid/" target="_blank" rel="noreferrer">Выучить CSS Grid за 5 минут – миссия выполнима</a></li>
                            <li><a href="http://habrahabr.ru/post/156747/" target="_blank" rel="noreferrer">http://habrahabr.ru/post/156747/</a></li>
                        </ul>
                    </Panel>
                </Collapse>
            </div>
        </>
    )
}
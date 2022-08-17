import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import {Collapse} from "antd";

const { Panel } = Collapse;

export const JqueryMain = () => {

    return(
        <>
            <div className="JqueryMain">
                <h1>Jquery</h1>
                <Collapse defaultActiveKey={['1']}>
                    <Panel header="Задания" key="1">
                        <ul>
                            <li><Link to="jquery/1">01. JQ. Задания</Link></li>
                        </ul>
                    </Panel>
                </Collapse>
            </div>
        </>
    )
}
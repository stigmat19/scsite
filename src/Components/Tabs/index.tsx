import React from "react";
import { Tabs } from "antd";
import "antd/dist/antd.css";
import "./style.scss";
import { useHistory, useLocation } from "react-router-dom";

const { TabPane } = Tabs;

export const CustomTabs = () => {
    const history = useHistory();
    const location = useLocation();
    console.log("location", location);

    const changeLink = (key: string) => {
        history.push(`/${key}`);
    }

    return(
        <div className="tabs-style">
            <Tabs defaultActiveKey={location.pathname.slice(1)} onChange={changeLink}>
                <TabPane tab="Главная" key="main"/>
                <TabPane tab="HTML" key="html"/>
                <TabPane tab="CSS" key="css"/>
                <TabPane tab="Frameworks" key="frameworks"/>
                <TabPane tab="Jquery" key="jquery"/>
            </Tabs>
        </div>
    )
}
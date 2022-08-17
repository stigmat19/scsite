import React from "react";
import {Link, useParams} from "react-router-dom";
import {Css1} from "./tasks/css1";
import {Css2} from "./tasks/css2";
import {Css3} from "./tasks/css3";
import {Css4} from "./tasks/css4";

interface ParamTypes {
    id: string
}

export const CssHomeTask = () => {

    const { id } = useParams<ParamTypes>();

    return(
        <>
            <Link to="/css">Назад</Link>
            { id === "1" ? <Css1/> : null }
            { id === "2" ? <Css2/> : null }
            { id === "3" ? <Css3/> : null }
            { id === "4" ? <Css4/> : null }
        </>
    )
}

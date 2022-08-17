import React from "react";
import {Link, useParams} from "react-router-dom";
import {Jq1} from "./tasks/jq1";

interface ParamTypes {
    id: string
}

export const JqueryHomeTask = () => {

    const { id } = useParams<ParamTypes>();

    return(
        <>
            <Link to="/jquery">Назад</Link>
            {
                id === "1" && <Jq1/>
            }
        </>
    )
}

import React from "react";
import {Link, useParams} from "react-router-dom";
import {Frame1} from "./tasks/fram1";

interface ParamTypes {
    id: string
}

export const FrameworkHomeTask = () => {

    const { id } = useParams<ParamTypes>();

    return(
        <>
            <Link to="/frameworks">Назад</Link>
            <h1>frameworks Home task {id}</h1>
            { id === "1" && <Frame1/>}
        </>
    )
}

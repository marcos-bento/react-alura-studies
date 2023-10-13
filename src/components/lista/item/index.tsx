import React from "react";
import lista from '../lista.module.css';

export default function Item({tarefa, tempo}: {tarefa: string, tempo: string}){

    return (
        <li className={lista.item}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}

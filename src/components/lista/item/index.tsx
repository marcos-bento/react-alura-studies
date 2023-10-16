import React from "react";
import lista from '../lista.module.css';
import { ITarefa } from "../../../types/tarefa";

export default function Item({tarefa, tempo, selecionado, completado, id}: ITarefa){
    console.log('Item atual: ', {tarefa, tempo, selecionado, completado, id})
    return (
        <li className={lista.item}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}

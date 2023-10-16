import React from "react";
import lista from "./lista.module.css";
import Item from "./item";
import { ITarefa } from "../../types/tarefa";

function Lista({tarefas}: {tarefas: ITarefa[]}){
    return(
        <aside className={lista.listaTarefas}>
            <h2> Estudos do dia </h2>
            <ul>
                {tarefas.map((item, index)=>(
                    <Item
                        key={index}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;

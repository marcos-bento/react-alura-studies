import React from "react";
import lista from "./lista.module.css";
import Item from "./item";
import { ITarefa } from "../../types/tarefa";

interface Props{
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

function Lista({tarefas, selecionaTarefa}: Props){
    return(
        <aside className={lista.listaTarefas}>
            <h2> Estudos do dia </h2>
            <ul>
                {tarefas.map((item)=>(
                    <Item
                        selecionaTarefa={selecionaTarefa}
                        key={item.id}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;

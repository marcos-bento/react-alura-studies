import React from "react";
import Botao from "../botao";
import style from "./form.module.css";
import { ITarefa } from "../../types/tarefa";
import { v4 as uuidv4 } from 'uuid';

class Formulario extends React.Component<{setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>}>{
    state = {tarefa: "", tempo: "00:00"};

    adicionarTarefa(evento: React.FormEvent<HTMLFormElement>): any{
        evento.preventDefault();
        this.props.setTarefas(tarefasAntigas => [...tarefasAntigas, {...this.state, selecionado: false, completado: false, id: uuidv4()}]);
        this.setState({tarefa: "", tempo: "00:00"})
    };

    render() {
        return(
            <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">Adicione um novo estudo</label>
                    <input value={this.state.tarefa} onChange={evento =>{this.setState({...this.state, tarefa: evento.target.value})}} type="text" name="tarefa" id="tarefa" placeholder="O que você quer estudar?" required/>
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">Tempo</label>
                    <input value={this.state.tempo} onChange={evento =>{this.setState({...this.state, tempo: evento.target.value})}} type="time" step="1" name="tempo" id="tempo" min="00:00:00" max="01:30:00" required/> 
                </div>
                <Botao type="submit" texto ="Adicionar"/>
            </form>
        )
    }
}

export default Formulario;

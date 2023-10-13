import React from "react"
import Botao from "../botao"
import Relogio from "./relogio"
import style from "./cronometro.module.css";

export default function Cronometro(){
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Relogio/>
            </div>
            <Botao texto="Começar!"/>
        </div>
    )
}

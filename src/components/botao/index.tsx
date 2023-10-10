import React from "react";
import botao from "./botao.module.css"

class Botao extends React.Component{

    render(){
        return (
            <button className={botao.botao}>
                Adicionar
            </button>
        )
    }
};

export default Botao;

import React from "react";
import style from "./botao.module.css"

class Botao extends React.Component<{onClick?: () => void,type?: "button" | "submit" | "reset" | undefined, texto: string}>{

    render(){
        const { type = "button", onClick } = this.props;
        return (
            <button onClick={onClick} type={type} className={style.botao}>
                {this.props.texto}
            </button>
        )
    }
};

export default Botao;

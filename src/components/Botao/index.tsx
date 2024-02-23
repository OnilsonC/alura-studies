import React from "react";
import style from './Botao.module.scss';

class Botao extends React.Component {
    render(){
        //const estaAtivo = false;
        const backgroundColor = 'red';
        const styles = {backgroundColor}
        return (
            <button className={style.botao}> 
                Botão
            </button>
        );
    }
}

export default Botao;
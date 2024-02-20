import React from "react";

class Botao extends React.Component {
    render(){
        const estaAtivo = false;
        const backgroundColor = 'red';
        const styles = {
            backgroundColor
        }
        return (
            <button style={styles
                //backgroundColor: estaAtivo ? "red" : "green"
            }>
                Botão
            </button>
        );
    }
}

export default Botao;
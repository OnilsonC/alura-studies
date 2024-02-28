import React from "react";
import Item from "./Item";
import style from './Lista.module.scss';

function lista() {
    const tarefas = [{
        tarefa: 'React',
        tempo: '02:00:00'
    }, {
        tarefa: 'Javascript',
        tempo: '01:00:00'
    }, {
        tarefa: 'Java',
        tempo: '02:30:00'
    }]
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                   <Item
                    //tarefa= {item.tarefa}
                    //tempo= {item.tempo}
                    key={index}
                    {...item}
                   />
                ))}
            </ul>
        </aside>
    )
}

export default lista;
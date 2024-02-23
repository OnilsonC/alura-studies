import React from "react";
import style from './Lista.module.scss';

function lista() {
    const tarefa = [{
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
                {tarefa.map((item, index) => (
                    <li key={index} className={style.item}>
                        <h3>
                            {item.tarefa}
                        </h3>
                        <span>
                            {item.tempo}
                        </span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default lista;
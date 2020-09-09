import React from 'react';
import './index.css'


//Выводим задачи блока
function Task(props) {
       
        return (
            <>
            <h1>Задач в блоке: {props.list.length}</h1>
            {props.list.map(item => (
                <div key = {item.id} className="task">{item.title}</div>
            ))}
            </>
            
        )
    }

export default Task;
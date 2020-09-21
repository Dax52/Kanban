import React from 'react';
import './index.css';



//Выводим задачи блока
function Task(props) {
    // console.log (props.full);
    if (props.full) {
        return (
            <>
                {props.list.map(item => (
                    <div key = {item.id} className="task-full">
                        <div  className="list__title">{item.title}</div>
                        <p className="list__text">Created at {item.createdAt}</p>
                        <p className="list__text">{item.text}</p>
                    </div> 
                ))}
            </>
           )

       } else {
        return (
            <>
                {props.list.map(item => (
                    <div key = {item.id} className="task">{item.title}</div>
                ))}
            </>
            
        )}
        

    }

export default Task;
import React from 'react';
import './index.css'

const Button = (props) => {
    return (
        <button
        className="btn" 
        onClick={props.onClick}
        >
            {props.name}
        </button>
        
    )
}
export default Button; 
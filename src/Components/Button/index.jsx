import React from 'react';
import './index.css';

const Button = (props) => {
  if (
    (props.type === 0 && !props.inputActivity) ||
    (props.type === 0 && props.value) ||
    (props.list.length > 0 && !props.inputActivity)
  ) {
    // console.log ('btn enabled');
    return (
      <button className="btn" onClick={props.onClick}>
        {props.name}
      </button>
    );
  } else {
    return (
      <button className="btn" disabled>
        {props.name}
      </button>
    );
  }
};

export default Button;

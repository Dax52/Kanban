import React from 'react';
import './index.css'

function Input(props)  {
    if (props.type === 0) {
        return (
            <input className='input' type="text"/>
        )    
        } else
         {
        return (
              
            <select className='input'>
                <option className='input' disabled selected value></option>
                {props.list.map(item => (
                  <option key = {item.id} className='' value={item.id}>{item.title}</option>
              ))}
                      
            </select>    
            
        );
    }
    
  }
  
  
  export default Input;
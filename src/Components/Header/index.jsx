import React from 'react';
// import User from './'
import Avatar from './user-avatar.png';
import Arrow from './arrow-down.svg';
import './index.css'

class Header extends React.Component {
    // constructor (props) {
    //     super (props);
       
    // }
    
    render () {
        
        return (
            <header className="header">
            <h1 className="logo">Awesome Kanban Board</h1>
            <div className="user-menu">
                <img className="user-menu__avatar" src={Avatar} alt=""/>
                <img src={Arrow} alt=""/>
            </div>
        </header>
        )
        
    }
}
export default Header;
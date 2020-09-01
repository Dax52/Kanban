import React from 'react';
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
                <img src={Avatar} alt=""/>
                <img src={Arrow} alt=""/>
            </div>
        </header>
        )
        
    }
}
export default Header;
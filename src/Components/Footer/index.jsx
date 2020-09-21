import React from 'react';
import './index.css';
import logo from './logo.svg';

class Footer extends React.Component {
    constructor (props) {
        super();
        this.state = {
            activeTasks:props.activeTasks,
            finishedTasks:props.finishedTasks,
        }
        
    }
    render () {
        
        return (
            <section className="footer">
                <div className="footer__counterblock">
                    <div>Active tasks:{this.state.activeTasks}</div>
                    <div>Finished tasks:{this.state.finishedTasks}</div>
                </div>
                <div className="footer__copyright">Kanban board by <a className="footer__copyright-link" href="https://github.com/Dax52" target="_blank" rel="noopener noreferrer">Dax</a>, 2020  <img src={logo} className="App-logo" alt="logo" /></div>
            </section>
            
        )
    }
}

export default Footer;
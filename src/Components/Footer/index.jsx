import React from 'react';
import './index.css'
import logo from './logo.svg';

class Footer extends React.Component {
    render () {
        return (
            <section className="footer">
                <div className="footer__counterblock">Active tasks:00   Finished tasks:00</div>
                <div className="footer__copyright">Kanban board by <a className="footer__copyright-link" href="https://github.com/Dax52">Dax</a>, 2020  <img src={logo} className="App-logo" alt="logo" /></div>
            </section>
            
        )
    }
}

export default Footer;
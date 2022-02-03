import React from 'react';
import './index.css';
import logo from './logo.svg';

function Footer(props) {
  return (
    <section className="footer">
      <div className="footer__counterblock">
        <div>Active tasks:{props.activeTasks}</div>
        <div>Finished tasks:{props.finishedTasks}</div>
      </div>
      <div className="footer__copyright">
        Kanban board by{' '}
        <a
          className="footer__copyright-link"
          href="https://github.com/Dax52"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dax
        </a>
        , 2020 <img src={logo} className="App-logo" alt="logo" />
      </div>
    </section>
  );
}
export default Footer;

import React from 'react';
import './index.css'

class Footer extends React.Component {
    render () {
        return (
            <section className="footer">
                <div className="footer__counterblock">Active tasks:00   Finished tasks:00</div>
                <div className="footer__copyright">Kanban board by <a href="https://github.com/Dax52">Dax</a>, 2020 </div>
            </section>
            
        )
    }
}

export default Footer;
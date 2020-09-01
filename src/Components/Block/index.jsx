import React from 'react';
import './index.css'

class Block extends React.Component {


    render () {
        return (
            <section className ="table">
                <div className="block">
                    <div className="block_title">Заголовок</div>
                    <div>Задача</div>
                    <button>Кнопка</button>
                </div>
                <div className="block">
                    <div className="block_title">Заголовок</div>
                    <div>Задача</div>
                    <button>Кнопка</button>
                </div>
                <div className="block">
                    <div className="block_title">Заголовок</div>
                    <div>Задача</div>
                    <button>Кнопка</button>
                </div>
                <div className="block">
                    <div className="block_title">Заголовок</div>
                    <div>Задача</div>
                    <button>Кнопка</button>
                </div>
            </section>
            
        )
    }
}
export default Block;
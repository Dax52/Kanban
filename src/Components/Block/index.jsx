import React from 'react';
import Task from '../Task'
import Button from '../Button'
// import Input from '../Input';
import './index.css'

const tableSteps = [
    {id: 0, title:'Backlog'},
    {id: 1, title:'Ready'},
    {id: 2, title:'In progress'},
    {id: 3, title:'Finished'}
];



class Block extends React.Component {
    // onClickBtn = () => {
    //     // const { inputValue, todoList } = this.state;
       
    //     // this.setState({
    //     // //   todoList: [inputValue, ...todoList],
    //     //   inputValue:'',
    //       render () {
    //           return (
    //             <>
    //                 <Input/>
    //             </>
    //      )}
    //     }
    //   }

    render () {
        return (
            <section className ="table">
               {tableSteps.map(item => (
                    <div key={item.id} className="block">
                        <div className="block_title">{item.title}</div>
                        <Task 
                            block={item.id}
                        />
                        <Button
                            name="+ Add card"
                            // onClick={this.onClickBtn}
                        />
                    </div>
               ))} 
            </section>
            
        )
    }
}
export default Block;
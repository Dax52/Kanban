import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Task from '../Task';
import Button from '../Button';
import Input from '../Input';
import Footer from '../Footer';
import './index.css';

const tableSteps = [
    {id: 0, title: 'Backlog', inputActivity: false, btnName: '+ Add card', link: '/backlog'},
    {id: 1, title: 'Ready', inputActivity: false,  btnName: '+ Add card', link: '/ready'},
    {id: 2, title: 'In progress', inputActivity: false,  btnName: '+ Add card', link: '/inprogress'},
    {id: 3, title: 'Finished', inputActivity: false,  btnName: '+ Add card', link: '/finished'}
];

//  Временная модель данных
// const tasks = [
//     {
//         id: 0,
//         createdAt: '01.09.2020',
//         title:'TestIssue', 
//         text: 'Это был темный лес, издали казавшийся непроходимым. Там Пахапиль охотился, глушил рыбу, спал на еловых ветках. Короче – жил, пока русские не выгнали оккупантов. А когда немцы ушли, Пахапиль вернулся. Он появился в Раквере, где советский капитан наградил его медалью. Медаль была украшена четырьмя непонятными словами, фигурой и восклицательным знаком.', 
//         status: 0
//     },
//     {
//         id: 1,
//         createdAt: '01.09.2020',
//         title:'TestIssue2', 
//         text: 'Это был темный лес, издали казавшийся непроходимым. Там Пахапиль охотился, глушил рыбу, спал на еловых ветках. Короче – жил, пока русские не выгнали оккупантов. А когда немцы ушли, Пахапиль вернулся. Он появился в Раквере, где советский капитан наградил его медалью. Медаль была украшена четырьмя непонятными словами, фигурой и восклицательным знаком.', 
//         status: 1
//     },
//     {
//         id: 2,
//         createdAt: '01.09.2020',
//         title:'TestIssue3', 
//         text: 'Это был темный лес, издали казавшийся непроходимым. Там Пахапиль охотился, глушил рыбу, спал на еловых ветках. Короче – жил, пока русские не выгнали оккупантов. А когда немцы ушли, Пахапиль вернулся. Он появился в Раквере, где советский капитан наградил его медалью. Медаль была украшена четырьмя непонятными словами, фигурой и восклицательным знаком.', 
//         status: 3
//     },
//     {
//         id: 3,
//         createdAt: '01.09.2020',
//         title:'TestIssue4', 
//         text: 'Это был темный лес, издали казавшийся непроходимым. Там Пахапиль охотился, глушил рыбу, спал на еловых ветках. Короче – жил, пока русские не выгнали оккупантов. А когда немцы ушли, Пахапиль вернулся. Он появился в Раквере, где советский капитан наградил его медалью. Медаль была украшена четырьмя непонятными словами, фигурой и восклицательным знаком.', 
//         status: 3
//     },
//     {
//         id: 4,
//         createdAt: '01.09.2020',
//         title:'TestIssue5', 
//         text: 'Это был темный лес, издали казавшийся непроходимым. Там Пахапиль охотился, глушил рыбу, спал на еловых ветках. Короче – жил, пока русские не выгнали оккупантов. А когда немцы ушли, Пахапиль вернулся. Он появился в Раквере, где советский капитан наградил его медалью. Медаль была украшена четырьмя непонятными словами, фигурой и восклицательным знаком.', 
//         status: 0
//     },
//     {
//         id: 5,
//         createdAt: '01.09.2020',
//         title:'TestIssue6', 
//         text: 'Это был темный лес, издали казавшийся непроходимым. Там Пахапиль охотился, глушил рыбу, спал на еловых ветках. Короче – жил, пока русские не выгнали оккупантов. А когда немцы ушли, Пахапиль вернулся. Он появился в Раквере, где советский капитан наградил его медалью. Медаль была украшена четырьмя непонятными словами, фигурой и восклицательным знаком.', 
//         status: 0
//     },
//     {
//         id: 6,
//         createdAt: '01.09.2020',
//         title:'TestIssue7 TestIssue7 TestIssue7 TestIssue7 TestIssue7', 
//         text: 'Это был темный лес, издали казавшийся непроходимым. Там Пахапиль охотился, глушил рыбу, спал на еловых ветках. Короче – жил, пока русские не выгнали оккупантов. А когда немцы ушли, Пахапиль вернулся. Он появился в Раквере, где советский капитан наградил его медалью. Медаль была украшена четырьмя непонятными словами, фигурой и восклицательным знаком.', 
//         status: 0
//     },
// ];



//функция отбора значений для блока задач
function TasksSelect(list,step) {
    const newlist = list.filter(stage => stage.status === step);
    return (newlist)
}
//Подсчет элементов массива по статусу задачи
function Count(list,step) {
    const counter = list.filter(stage => stage.status === step).length;
    return (counter)
}

class Block extends React.Component {

    constructor() {
        super ();
        this.state = {
            tasks:[],
            value:null,
        };
    }

componentDidMount () {
    const savedtasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedtasks) {
        this.setState ({
            tasks:savedtasks,
        })
        
    }
}

componentDidUpdate () {
    const saveTasks = JSON.stringify(this.state.tasks)
    localStorage.setItem('tasks', saveTasks);
  }
    
    onClickBtn = (type) => {
        if (type === 0 && tableSteps[type].inputActivity === false) {
            tableSteps[type].inputActivity = true;
            tableSteps[type].btnName = 'Submit';
            this.setState({ })
        } else if (type === 0 && tableSteps[type].inputActivity === true) {
            this.state.tasks.push(
                {id:this.state.tasks.length,
                createdAt: new Date().toDateString(),
                title: this.state.value, 
                text: 'Это был темный лес, издали казавшийся непроходимым. Там Пахапиль охотился, глушил рыбу, спал на еловых ветках. Короче – жил, пока русские не выгнали оккупантов. А когда немцы ушли, Пахапиль вернулся. Он появился в Раквере, где советский капитан наградил его медалью. Медаль была украшена четырьмя непонятными словами, фигурой и восклицательным знаком.', 
                status: 0
                }
            );
            tableSteps[0].inputActivity = false;
            tableSteps[type].btnName = '+ Add card';
            this.setState({ 
                value:null,
            })
            
        }  else if (type > 0&& tableSteps[type].inputActivity === false) {
            tableSteps[type].inputActivity = true;
            this.setState({ })
        } else  {
            return(null);
        }
    
    }
    onChangeSelect = (event) => {
            let newtasks = this.state.tasks;
            newtasks[event.target.value].status++;
            tableSteps[this.state.tasks[event.target.value].status].inputActivity = false;
            this.setState({
                tasks:newtasks,
            })
    }
    onChangeInput = (event) => {
         this.setState({
            value:event.target.value
         })
      }
    
   

    render () {
        return (
            <>
            <Router>
                <Switch>
                    <Route path="/backlog">
                        <section className="list">
                            <div className="list__header">
                                <div className="block_title inactive">{tableSteps[0].title}</div>
                                <Link to="/" className="list__close-sign" ></Link>
                            </div>
                            <div className="list__content">
                                <Task 
                                    list = {TasksSelect(this.state.tasks,0)}
                                    full = {true}
                                />
                            </div>
                        </section>
                        
                    </Route>    
                    <Route path="/ready">
                        <section className="list">
                            <div className="list__header">
                                <div className="block_title inactive">{tableSteps[1].title}</div>
                                <Link to="/" className="list__close-sign" ></Link>
                            </div>
                            <div className="list__content">
                                <Task 
                                    list = {TasksSelect(this.state.tasks,1)}
                                    full = {true}
                                />
                            </div>
                        </section>
                        
                    </Route>
                    <Route path="/inprogress">
                        <section className="list">
                            <div className="list__header">
                                <div className="block_title inactive">{tableSteps[2].title}</div>
                                <Link to="/" className="list__close-sign" ></Link>
                            </div>
                            <div className="list__content">
                                <Task 
                                    list = {TasksSelect(this.state.tasks,2)}
                                    full = {true}
                                />    
                            </div>
                            
                        </section>
                    </Route>
                    <Route path= "/finished">
                        <section className="list">
                            <div className="list__header">
                                <div className="block_title inactive">{tableSteps[3].title}</div>
                                <Link to="/" className="list__close-sign" ></Link>
                            </div>
                            <div className="list__content">
                                <Task 
                                    list = {TasksSelect(this.state.tasks,3)}
                                    full = {true}
                                />
                            </div>
                            
                        </section>
                        
                    </Route>        
                    <Route path="/">
                    <section className ="table">
                        {tableSteps.map(item => (
                            <div key={item.id} className="block">
                                <Link className="block__title"  to={item.link}>{item.title}</Link>
                                <div className="block__content">
                                    <Task 
                                        list = {TasksSelect(this.state.tasks,item.id)}
                                        full = {false}
                                    />
                                    <Input 
                                        activity = {item.inputActivity}          
                                        type = {item.id}
                                        list = {TasksSelect(this.state.tasks,item.id-1)}
                                        value = {this.value}
                                        onChange={this.onChangeInput}
                                        onSelect={this.onChangeSelect}
                                    />
                                </div>
                                    <Button
                                        type = {item.id}
                                        list = {TasksSelect(this.state.tasks,item.id-1)}
                                        name={item.btnName}
                                        inputActivity = {item.inputActivity}
                                        onClick={() => this.onClickBtn(item.id)}
                                        value={this.state.value}
                                    />
                                
                                
                            </div>    
                            
                        
                        ))} 
                    </section>
                    </Route> 
                    
                </Switch>

            </Router>
            <Footer
                activeTasks={Count(this.state.tasks,0)}
                finishedTasks={Count(this.state.tasks,3)}
            />
           </>
            
        )
    }
}
export default Block;
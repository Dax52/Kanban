import React from 'react';
import Task from '../Task'
import Button from '../Button'
import Input from '../Input';
import './index.css'

const tableSteps = [
    {id: 0, title: 'Backlog', inputActivity: false, btnName: '+ Add card'},
    {id: 1, title: 'Ready', inputActivity: false,  btnName: '+ Add card'},
    {id: 2, title: 'In progress', inputActivity: false,  btnName: '+ Add card'},
    {id: 3, title: 'Finished', inputActivity: false,  btnName: '+ Add card'}
];

//  Временная модель данных
const tasks = [
    {
        id: 0,
        createdAt: '01.09.2020',
        title:'TestIssue', 
        text: 'Это был темный лес, издали казавшийся непроходимым. Там Пахапиль охотился, глушил рыбу, спал на еловых ветках. Короче – жил, пока русские не выгнали оккупантов. А когда немцы ушли, Пахапиль вернулся. Он появился в Раквере, где советский капитан наградил его медалью. Медаль была украшена четырьмя непонятными словами, фигурой и восклицательным знаком.', 
        status: 0
    },
    {
        id: 1,
        createdAt: '01.09.2020',
        title:'TestIssue2', 
        text: 'Это был темный лес, издали казавшийся непроходимым. Там Пахапиль охотился, глушил рыбу, спал на еловых ветках. Короче – жил, пока русские не выгнали оккупантов. А когда немцы ушли, Пахапиль вернулся. Он появился в Раквере, где советский капитан наградил его медалью. Медаль была украшена четырьмя непонятными словами, фигурой и восклицательным знаком.', 
        status: 1
    },
    {
        id: 2,
        createdAt: '01.09.2020',
        title:'TestIssue3', 
        text: 'Это был темный лес, издали казавшийся непроходимым. Там Пахапиль охотился, глушил рыбу, спал на еловых ветках. Короче – жил, пока русские не выгнали оккупантов. А когда немцы ушли, Пахапиль вернулся. Он появился в Раквере, где советский капитан наградил его медалью. Медаль была украшена четырьмя непонятными словами, фигурой и восклицательным знаком.', 
        status: 3
    },
    {
        id: 3,
        createdAt: '01.09.2020',
        title:'TestIssue4', 
        text: 'Это был темный лес, издали казавшийся непроходимым. Там Пахапиль охотился, глушил рыбу, спал на еловых ветках. Короче – жил, пока русские не выгнали оккупантов. А когда немцы ушли, Пахапиль вернулся. Он появился в Раквере, где советский капитан наградил его медалью. Медаль была украшена четырьмя непонятными словами, фигурой и восклицательным знаком.', 
        status: 3
    },
    {
        id: 4,
        createdAt: '01.09.2020',
        title:'TestIssue5', 
        text: 'Это был темный лес, издали казавшийся непроходимым. Там Пахапиль охотился, глушил рыбу, спал на еловых ветках. Короче – жил, пока русские не выгнали оккупантов. А когда немцы ушли, Пахапиль вернулся. Он появился в Раквере, где советский капитан наградил его медалью. Медаль была украшена четырьмя непонятными словами, фигурой и восклицательным знаком.', 
        status: 0
    },
    {
        id: 5,
        createdAt: '01.09.2020',
        title:'TestIssue6', 
        text: 'Это был темный лес, издали казавшийся непроходимым. Там Пахапиль охотился, глушил рыбу, спал на еловых ветках. Короче – жил, пока русские не выгнали оккупантов. А когда немцы ушли, Пахапиль вернулся. Он появился в Раквере, где советский капитан наградил его медалью. Медаль была украшена четырьмя непонятными словами, фигурой и восклицательным знаком.', 
        status: 0
    },
    {
        id: 6,
        createdAt: '01.09.2020',
        title:'TestIssue7 TestIssue7 TestIssue7 TestIssue7 TestIssue7', 
        text: 'Это был темный лес, издали казавшийся непроходимым. Там Пахапиль охотился, глушил рыбу, спал на еловых ветках. Короче – жил, пока русские не выгнали оккупантов. А когда немцы ушли, Пахапиль вернулся. Он появился в Раквере, где советский капитан наградил его медалью. Медаль была украшена четырьмя непонятными словами, фигурой и восклицательным знаком.', 
        status: 0
    },
];



//функция отбора значений для блока задач
function TasksSelect(list,step) {
    const newlist = list.filter(stage => stage.status === step);
    return (newlist)
}

class Block extends React.Component {

    constructor() {
        super ();
        this.state = {
            tableSteps: [
                {id: 0, title: 'Backlog', inputActivity: false, btnName: '+ Add card'},
                {id: 1, title: 'Ready', inputActivity: false,  btnName: '+ Add card'},
                {id: 2, title: 'In progress', inputActivity: false,  btnName: '+ Add card'},
                {id: 3, title: 'Finished', inputActivity: false,  btnName: '+ Add card'}
            ],
            value:null,
        }
    }

    
    
    onClickBtn = (type) => {
        //  console.log('Кнопка нажата, блок', type);
        //  console.log('input activity now',tableSteps[type].inputActivity);
        //  console.log('tableSteps previos',tableSteps)
        if (type === 0 && tableSteps[type].inputActivity === false) {
            tableSteps[type].inputActivity = true;
            tableSteps[type].btnName = 'Submit';
            this.setState({ })
        } else if (type === 0 && tableSteps[type].inputActivity === true) {
            console.log('tasks previos',tasks);
            tasks.push(
                {id:tasks.length,
                createdAt: '01.09.2020',
                title: this.state.value, 
                text: 'Это был темный лес, издали казавшийся непроходимым. Там Пахапиль охотился, глушил рыбу, спал на еловых ветках. Короче – жил, пока русские не выгнали оккупантов. А когда немцы ушли, Пахапиль вернулся. Он появился в Раквере, где советский капитан наградил его медалью. Медаль была украшена четырьмя непонятными словами, фигурой и восклицательным знаком.', 
                status: 0
                }
            );
            tableSteps[0].inputActivity = false;
            tableSteps[type].btnName = '+ Add card';
            this.setState({ 
                value:null 
            })
            console.log('tasks now',tasks);
        }  else if (type > 0&& tableSteps[type].inputActivity === false) {
            tableSteps[type].inputActivity = true;
            this.setState({ })
        } else  {
            return(null);
        }
    
    }
    onChangeSelect = (event) => {
        console.log (event.target.value);
             tasks[event.target.value].status++;
             tableSteps[tasks[event.target.value].status].inputActivity = false;
             this.setState({ })
        
    }
    onChangeInput = (event) => {
        
    
         this.setState({
            value:event.target.value
         })
        
      }
    
   

    render () {
        
        return (
            <section className ="table">
               {tableSteps.map(item => (
                    
                
                    <div key={item.id} className="block">
                        <div className="block_title">{item.title}</div>
                        <Task 
                            list = {TasksSelect(tasks,item.id)}
                        />
                         <Input 
                            activity = {item.inputActivity}          
                            type = {item.id}
                            list = {TasksSelect(tasks,item.id-1)}
                            value = {this.value}
                            onChange={this.onChangeInput}
                            onSelect={this.onChangeSelect}
                        />
                        
                        <Button
                            type = {item.id}
                            list = {TasksSelect(tasks,item.id-1)}
                            name={item.btnName}
                            inputActivity = {item.inputActivity}
                            onClick={() => this.onClickBtn(item.id)}
                            value={this.state.value}
                        />
                    </div>    
                    
                
               ))} 
            </section>
            
        )
    }
}
export default Block;
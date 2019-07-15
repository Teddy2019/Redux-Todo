import React from 'react'
import { connect} from 'react-redux'
import Task from './Task'
import { addTodo, togglecompleted } from '../action'

class Todo extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            task: ''
        }
    }

    changeHandeler = (e) => {
        e.preventDefault();
        this.setState({ task: e.target.value })
    }

    addtask =(e) => {
        e.preventDefault();
        this.props.addTodo(this.state.task);
        this.setState({ task: '' })
    }

    // toggletaskCompleted =(e) => {
    //     e.preventDefault();
    //     this.props.togglecompleted(2);
    // }

    render(){
        return (
            <div>
                <h1>Todo</h1>
                {this.props.tasks.map((task, index) => {return <Task togglecompleted={this.props.togglecompleted}  task={task} index={index} key={index} />})}
                <form onSubmit={this.addtask}>
                    <input 
                       type='text' 
                       name='todo' 
                       placeholder='..add task' 
                       value={this.state.task} 
                       onChange={this.changeHandeler} 
                    />
                    <button>addTask</button>
                </form>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    }
}

const mapDispatchToProps = {
    addTodo: addTodo,
    togglecompleted:togglecompleted
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
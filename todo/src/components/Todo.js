import React from 'react'
import { connect} from 'react-redux'
import { addTodo } from '../action'

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

    render(){
        return (
            <div>
                <h1>Todo</h1>
                {this.props.task.map((task, index) => {return <li className='TaskList' key={index} >{task}</li>})}
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
        task: state.task
    }
}

const mapDispatchToProps = {
    addTodo: addTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
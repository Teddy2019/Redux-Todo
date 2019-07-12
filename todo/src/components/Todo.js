import React from 'react'

class Todo extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            task: ''
        }
    }

    render(){
        return (
            <div>
                <h1>Todo</h1>
            </div>
        )
    }
};

export default Todo;
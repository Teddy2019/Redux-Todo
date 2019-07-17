import React from 'react'


 function Task(props){

    const toggleHandelr = (e) => {
        e.preventDefault();
        props.togglecompleted(props.index)
    }

    const deleteHandelr = (e) =>{
        e.preventDefault();
        props.deleteTodo(props.index)
    }

    return(
        <div>
           <li className='TaskList' onClick={toggleHandelr} >{props.task.value}</li>
           <button type='button' onClick={deleteHandelr} >Delete</button>
        </div>
    )
}

export default Task;
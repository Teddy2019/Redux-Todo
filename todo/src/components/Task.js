import React from 'react'


 function Task(props){

    const clickHandeler = (e) => {
        e.preventDefault();
        props.togglecompleted(props.index)
    }

    return(
        <li className='TaskList' onClick={clickHandeler} >{props.task.value}</li>
    )
}

export default Task;
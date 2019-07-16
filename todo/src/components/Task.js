import React from 'react'


 function Task(props){

    const clickHandeler = (e) => {
        e.preventDefault();
        props.togglecompleted(props.index)
    }

    return(
        <div>
           <li className='TaskList' onClick={clickHandeler} >{props.task.value}</li>
           <button>Delete</button>
        </div>
    )
}

export default Task;
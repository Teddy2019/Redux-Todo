import {ADD_TODO, TOGGLE_COMPLETED, DELETE_TODO } from './action';

 const intialstate = {
    tasks: []
}

export default function(state = intialstate, action) {
  switch(action.type){
      case ADD_TODO:
          
      return {
       ...state,
       tasks: [...state.tasks, action.payload]
      }

      case TOGGLE_COMPLETED:
        const id = action.payload
        const newTodos = state.tasks.map((task, inedx) => {
          if(inedx === id){return {...task, completed: !task.completed}}
          else { return task}
        })

        return {
          ...state,
          tasks: newTodos
         }
      case DELETE_TODO:

      //need more work to delet only the completed one 
        const idTask = action.payload
        let newTasks = state.tasks
         newTasks.splice(idTask, 1);
      console.log(idTask)
        return {
          ...state,
          tasks: newTasks
          } 
      

      default:
          return state
  }
}
import {ADD_TODO, TOGGLE_COMPLETED} from './action';

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
        const newstate = state.tasks.map((task, inedx) => {
          if(inedx === id){return {...task, completed: !task.completed}}
          else { return task}
        })

        return {
          ...state,
          tasks: newstate
         }
       
      default:
          return state
  }
}
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
        if(state.tasks[id].completed === state.tasks[id].completed){
          return {
           ...state,
           tasks: [...state.tasks, state.tasks[id].completed = !state.tasks[id].completed]
          }
        }
        break;

      default:
          return state
  }
}
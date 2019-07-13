import {ADD_TODO} from './action';

 const intialstate = {
    task: []
}

export default function(state = intialstate, action) {
  switch(action.type){
      case ADD_TODO:
          
      return{
       ...state,
       task: [...state.task, action.todo]
      }

      default:
          return state
  }
}
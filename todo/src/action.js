//action type
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED'
export const DELETE_TODO   = 'DELETE_TODO '

//action creator

export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: {
                  value: todo,
                  completed: false
                  }
    }
}

export const togglecompleted = (id) => {
    return {
        type: TOGGLE_COMPLETED,
        payload: id
    }

}

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        payload: id
    }

}
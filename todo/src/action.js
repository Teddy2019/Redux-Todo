//action type
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED'

//action creator

export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: {id: Date.now(),
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
//action type
export const ADD_TODO = 'ADD_TODO'

//action creator

export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        todo
    }
}
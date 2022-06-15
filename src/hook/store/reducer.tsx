import { SET_TODO_INPUT, ADD_TODO_INPUT, DELETE_TODO_INPUT, UPDATE_TODO_INPUT } from './type'

// init state
export const initState = {
    todoInput: '',
    todos: []
}

const reducer = (state: any, action: any) => {

    switch (action.type) {
        case SET_TODO_INPUT:
            return { ...state, todoInput: action.payload }
        case ADD_TODO_INPUT:
            return { ...state, todos: [...state.todos, action.payload] }
        case DELETE_TODO_INPUT:
            const newtodos = [...state.todos]
            newtodos.splice(action.payload, 1)
            return { ...state, todos: newtodos }
        case UPDATE_TODO_INPUT:
            const updateTodos = [...state.todos];
            updateTodos[action.index] = action.payload;
            return { ...state, todos: updateTodos }
        default:
            return state
    };

}
export default reducer
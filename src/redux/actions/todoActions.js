import todoActionTypes from "./todoActionsTypes"

export const loadTodos = (todos) => {
    return {
        type: todoActionTypes.LOAD_TODOS
        , payload: { todos }
    }
}
export const addTodo = text => {
    return {
        type: todoActionTypes.ADD_TODO,
        payload: { text }
    }
}
export const removeTodo = text => {
    return {
        type: todoActionTypes.removeTodo,
        payload: { id }
    }
}
export const completeTodo = text => {
    return {
        type: todoActionTypes.MARK_COMPLETED,
        payload: { id }
    }
}
import todoActionTypes from "../actions/todoActionsTypes";
export const todos = (state = [], action) => {
    const { type, payload } = action;


    switch (type) {
        case todoActionTypes.ADD_TODO:
            const { text } = payload
            const newId = state.length === 0 ? 1 : state[state.length - 1].id + 1
            const newTodo = {
                id: newId,
                text,
                isCompleted: false
            }
            return [...state, newTodo]

        case todoActionTypes.REMOVE_TODO:
            return state.filter(todo => todo.id !== payload.id)

        case todoActionTypes.MARK_COMPLETED:
            const { id } = payload
            const newState = [...state]
            const index = newState.findIndex(todo => todo.id === id)
            newState[index]['isCompleted'] = true
            return newState
        case todoActionTypes.LOAD_TODOS:
            const { todos } = payload
            return todos
        default:
            return state
    }
}
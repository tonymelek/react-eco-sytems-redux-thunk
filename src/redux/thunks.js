import axios from "axios"
import { loadTodos } from "./actions/todoActions";
const loadFakeTodosAPI = () => async (dispatch, getState) => {
    try {
        const response = await axios('https://jsonplaceholder.typicode.com/todos/');
        const todos = response.data.map(todo => { return { ...todo, text: todo.title, isCompleted: todo.completed } })
        dispatch(loadTodos(todos));
    } catch (error) {
        console.log(error);
    }
}

export { loadFakeTodosAPI }
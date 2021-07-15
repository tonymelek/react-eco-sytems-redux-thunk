import React, { useEffect } from 'react'
import { hot } from 'react-hot-loader'
import './App.css'
import NewTodoForm from './forms/NewTodoForm'
import TodoList from './todos/TodoList'
import { loadFakeTodosAPI } from './redux/thunks'
import { useDispatch } from 'react-redux'
const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadFakeTodosAPI()) //Dispatches a Thunk to load
    }, [])
    return (
        <div>
            <NewTodoForm />
            <TodoList />
        </div>
    )
}
export default hot(module)(App);

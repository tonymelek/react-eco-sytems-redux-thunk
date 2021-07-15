import React from 'react'
import TodoItem from './TodoItem'
import { useDispatch, useSelector } from 'react-redux'
import actionTypes from '../redux/actions/todoActions'

export default function TodoList() {
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos)
    console.log(todos);
    return (
        <div className="list-wrapper">
            {todos.map((todo, index) => <TodoItem todo={todo} key={index} />)}
        </div>
    )
}

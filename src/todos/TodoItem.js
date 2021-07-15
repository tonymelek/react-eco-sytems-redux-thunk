import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { completeTodo, removeTodo } from '../redux/actions/todoActions'
import './TodoItem.css'
export default function TodoItem({ todo }) {
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos)
    const handleMarkCompleted = id => {
        dispatch(completeTodo(id))
    }
    const removeTodoItem = id => {
        dispatch(removeTodo(id))
    }
    return (
        <div>
            <h3 className={todo.isCompleted ? 'text-green' : ''}>{todo.text}</h3>
            <div>
                <button onClick={() => handleMarkCompleted(todo.id)}>Mark As Completed</button>
                <button onClick={() => removeTodoItem(todo.id)}>Remove Todo</button>

            </div>
        </div>
    )
}

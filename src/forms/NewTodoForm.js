import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../redux/actions/todoActions'



const NewTodoForm = () => {
    const [newTodo, setNewTodo] = useState('')
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    const handleAddTodo = () => {
        dispatch(addTodo(newTodo))
        setNewTodo('')
    }
    return (
        <div>
            <input type="text"
                placeholder="Type your new todo"
                value={newTodo}
                onChange={e => setNewTodo(e.target.value)}
            />
            <button onClick={handleAddTodo}>Add new todo item</button>
        </div>
    )
}


export default NewTodoForm

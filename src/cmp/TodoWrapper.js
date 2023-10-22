import React from 'react'
import { TodoForm } from './TodoForm'
import { useState, useContext } from 'react'
import { TodoContext, TodoProvider } from './Todo'

import { EditTodoForm } from './EditTodoForm'

export const TodoWrapper = () => {
  
  const todoStore = useContext(TodoContext);

  return (
    <div className='TodoContainer'>
        <h1>Todo List</h1>
        <TodoForm todoStore={todoStore}/>
        <EditTodoForm todoStore={todoStore}/>
        <div className='ResetButtonContainer'>
          <button onClick={() => {todoStore.filterToggleComplete()}}>Filter Complete</button>
        </div>
    </div>
  )
}

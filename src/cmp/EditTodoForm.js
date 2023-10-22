import React from 'react'
import "../css/App.css"

export const SingleTodo = ({ children, id, todoStore }) => {
  const [editMode, setEditMode] = React.useState(false);
  const [value, setValue] = React.useState(children);

  const checkBox = () => {
      if (todoStore.isClompleted(id)) {
        return "check_circle";
      }
      return "radio_button_unchecked";
  }

  return (
    <div className='SingleTodo'>
      <div className='SingleTodoText'>
        <div>{editMode ? <input type='text' value={value} onChange={(e) => { setValue(e.target.value)  }}/>  : <p>{children}</p>}</div>
      </div>
      <div className='SingleTodoButton'>
        <button onClick={() => { todoStore.deleteTodo(id) }}>❌</button>
        <button onClick={() => {
          if (editMode) {
            todoStore.editTodo(id, value)
          }
          setEditMode(prev => !prev)
        }
        }>✏️</button>
        <button style={{ padding: "8px 0 0 0" }} onClick={() => {todoStore.toggleComplete(id)}}>
          <span className="material-symbols-outlined">
            {checkBox()}
          </span>
        </button>
      </div>
    </div>
  )
}

export const EditTodoForm = ({ todoStore }) => {

  function test() {
    if (todoStore.todos.length === 0) return "Add thing to do !"
    return todoStore.todos.map(todo => (
      <SingleTodo key={todo.id} id={todo.id} todoStore={todoStore}>{todo.text}</SingleTodo>
    ));
  }

  return (
    <div className='SingleTodoContainer'>
      {test()}
    </div>
  )
}

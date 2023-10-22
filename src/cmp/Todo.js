import React from 'react'
import { useContext, useState } from 'react'

// context

export const TodoContext = React.createContext(null);



// class TodoStore 

export class TodoStore {
  constructor({ todoList, setTodoList }) {
    this.todoList = todoList;
    this.setTodoList = setTodoList;
  }

  // getter 
  get todos() {
    return this.todoList;
  }
  // setter
  addTodo(text) {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false
    };
    this.setTodoList(prevTodos => [...prevTodos, newTodo]);
  }
  // delete
  deleteTodo(id) {
    const newTodo = this.todoList.filter(todo => todo.id !== id);
    this.setTodoList(newTodo);
  }

  // edit todo
  editTodo(id, text) {
    const newTodo = this.todoList.map(todo => {
      if (todo.id === id) {
        todo.text = text;
      }
      return todo;
    });
    this.setTodoList(newTodo);
  }

  // toggle complete
  toggleComplete(id) {
    const newTodo = this.todoList.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setTodoList(newTodo);
  }

  isClompleted(id) {
    const todo = this.todoList.filter(todo => todo.id === id);
    return todo[0].completed;
  }

  // filter toggle complete
  filterToggleComplete() {
    const newTodo = this.todoList.filter(todo => todo.completed === false);
    this.setTodoList(newTodo);
  }
}

// hook

export const TodoProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([]);
  const todoStore = new TodoStore({ todoList, setTodoList });

  return (
    <TodoContext.Provider value={todoStore}>
      {children}
    </TodoContext.Provider>
  );
}

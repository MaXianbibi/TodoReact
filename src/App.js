import React, { useContext, useState } from 'react'
import './css/App.css'
import { TodoWrapper } from './cmp/TodoWrapper'
import { TodoContext, TodoProvider } from './cmp/Todo'


export default function App() {
  return (
    <TodoProvider>
      <div className='App'>
        <TodoWrapper />
      </div>
    </TodoProvider>
  );
}



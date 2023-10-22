import React from 'react'

export const TodoForm = ({todoStore}) => {


  const [value, setValue] = React.useState('')
  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const buttonClick = () => {
    if (value === '') return;
    todoStore.addTodo(value)
    setValue('');
  }

  return (
    <div className='TodoForm'>
        <div className='TodoFormInput'>
            <form>
              <input type='text' placeholder='Add a todo' onChange={handleChange} value={value}/>
            </form>
        </div>
        <div className='TodoFormButton'>
          <button onClick={buttonClick}>+</button>
        </div>
    </div>
  )
}

import React from 'react'
import TodoItem from './TodoItem'
const Todolist = (props) => {
    // console.log(props.data)
  return (
    <div>
        {props.data.map(todo=> <TodoItem item={todo}/>)}
        
    </div>
  )
}

export default Todolist
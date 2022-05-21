import React from 'react'
import "./TodoItem.css"
 
const TodoItem = (props) => {
    // console.log(props.item);
  return (
    <div className='main1'>
      <h3>{props.item.title}</h3>
      <input type="radio"/>
    </div>
  )
}

export default TodoItem
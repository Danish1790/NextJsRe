'use client'
import { addTodo,removeTodo } from '@/src/reduxtoolkit/TodoSlice'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux/es/hooks/useSelector'



const page = () => {
    const todoData = useSelector((data)=>data.todoData.todos)
    const [todoList,setTodoList] = useState("")
    const dispatch = useDispatch();

    const handleTodo = () =>{
        if(todoList!=""){
            dispatch(addTodo(todoList))
        }
        else{
            window.alert("empty list item")
        }
    }


   
  return (
    <div>
        <h2>Add and remove tasks</h2>
        <div>
            <h4>Add task</h4>
            <input type='text' placeholder='Add tasks here' onChange={(e)=>{setTodoList(e.target.value)}}/>
            <button onClick={handleTodo} >Add Task</button>
        </div>
        <hr />
        <hr />
        <div>
        <h4>My tasks</h4>
        {
            todoData.map((item)=>(
                <div>
                <span>
                    {item.name}
                </span>
                <button onClick={()=>{dispatch(removeTodo(item.id))}}>Remove task</button>
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default page
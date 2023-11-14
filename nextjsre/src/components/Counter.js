"use client"
import React,{useState} from 'react'


const Counter = () => {
    const [count,setCount] = useState(0)
    return(
        <div>
            <h2>Count:{count}</h2>
            <button onClick={()=>setCount(count+1)}>Add</button>
        </div>
    )
}

export default Counter
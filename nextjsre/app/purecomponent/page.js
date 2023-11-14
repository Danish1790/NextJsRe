"use client"
import React, { useState,useMemo } from 'react'

const page = () => {
    const [count,setCount] = useState(0)
    const [item,setItem] = useState(10)

    const multiCount = () =>{
        console.warn("multicount")
        return count*50
    }
    const multiCountMemo = useMemo(()=>{
        multiCount()
    },[count])

  return (
    <div>
    <h2>Count:{count}</h2>
    <h2>Item:{item}</h2>
    <h2>{multiCountMemo}</h2>
    <button onClick={()=>{setCount(count+1)}}>set count</button>
    <button onClick={()=>{setItem(item*10)}}>set item</button>
    </div>
  )
}

export default page
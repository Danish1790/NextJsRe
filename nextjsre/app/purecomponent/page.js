"use client"
import React, { useState,useMemo, useEffect } from 'react'

const page = () => {
    const [count,setCount] = useState(0)
    const [item,setItem] = useState(10)

    const [data,setData] = useState("old")

    const multiCount = () =>{
        console.warn("multicount")
        return count*50
    }

    const multiCountMemo = useMemo(()=>{
        multiCount()
    },[count])

    const updateData = () =>{
        setData("new")
    }

    useEffect(()=>{
        console.log("use Effect 3")
    },[updateData])


    useEffect(()=>{
        console.log("use Effect1")
    },[count])

    useEffect(()=>{
        console.log("use Effect2")
    },[item])

    const [val,setVal] = useState("")

  return (
    <div>
    <h2>Data:{data}</h2>
    <h2>Count:{count}</h2>
    <h2>Item:{item}</h2>
    <h2>{multiCountMemo}</h2>
    <input type='text'  value={val} onChange={(e)=>{setVal(e.target.value)}}/>

    <button onClick={()=>{setCount(count+1)}}>set count</button>
    <button onClick={()=>{setItem(item*10)}}>set item</button>
    <button onClick={()=>{updateData()}}>Update data</button>
    <button onClick={()=>{console.log("value is",val)}}>Submit</button>
    </div>
  )
}

export default page
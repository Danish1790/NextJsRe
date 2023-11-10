"use client"
import React,{useState} from 'react'

const calc = () => {
    const [number,setNumber] = useState(0)

    const addNumber = () =>{
        setNumber(number+1)
    }
    const subNumber = () =>{
        setNumber(number-1)
    }
  return (
    <div>
        <h1>Calculation</h1>
        <div>
            <button onClick={()=>addNumber()}>add</button>
            <button onClick={()=>{subNumber()}}>subtract</button>
            <h5>state = {number}</h5>
        </div>
    </div>
  )
}

export default calc
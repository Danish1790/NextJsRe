"use client"
import React,{useState} from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { addNumber,subNumber } from '@/src/reduxtoolkit/numberSlice'
import { useDispatch } from 'react-redux'
useSelector


const calc = () => {
    const numberData = useSelector((data)=>data.numberData.number)
    const dispatch = useDispatch()

    
  return (
    <div>
        <h1>Calculation</h1>
        <div>
            <button onClick={()=>{dispatch(addNumber())}}>add</button>
            <button onClick={()=>{dispatch(subNumber())}}>subtract</button>
            <h5>state = {numberData}</h5>
        </div>
    </div>
  )
}

export default calc
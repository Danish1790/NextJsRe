"use client"

import React,{useContext} from 'react'
import { globalContext } from '@/app/context/page'

const Child = () => {
    const {nameData} = useContext(globalContext)
  return (
    <div>
        <h1 style={{backgroundColor:'green'}}>Extreme Child</h1>
        <h2>Data value in Child: {nameData}</h2>
    </div>
  )
}

export default Child
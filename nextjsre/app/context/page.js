"use client"

import React, { useState,createContext } from 'react'
import PropGetter from '@/src/components/PropGetter'

export const globalContext = createContext()

const page = () => {
    const [data,setData] = useState("Old")
    return (
        <div>
            <globalContext.Provider value={{nameData:data}}>
                <h1 style={{backgroundColor:"orange"}}>Parent : {data}</h1>
                <PropGetter name={data} />
                <button onClick={()=>{setData("New")}} >Click me</button>
            </globalContext.Provider>
        </div>
    )
}

export default page
"use client"

import React, { useState } from 'react'
import Counter from '@/src/components/Counter'

const page = () => {
  return (
    <div>
        <HOCRed cmp={Counter} />
        <HOCBlue cmp={Counter} />
        <HOCGreen cmp={Counter} />
    </div>
  )
}


const HOCRed = (props) =>{
    return(
        <h2 style={{backgroundColor:'red'}}><props.cmp /></h2>
    )
}
const HOCBlue = (props) =>{
    return(
        <h2 style={{backgroundColor:'blue'}}><props.cmp/></h2>
    )
}
const HOCGreen = (props) =>{
    return(
        <h2 style={{backgroundColor:'green'}}><props.cmp /></h2>
    )
}



export default page
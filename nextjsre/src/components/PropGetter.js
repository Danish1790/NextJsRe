"use client"

import React from 'react'
import Child from './Child'

const PropGetter = (props) => {
  return (
    <div style={{backgroundColor:'cyan'}}>
        <h2 style={{backgroundColor:'red'}}>PropGetter{props.name}</h2>
        <Child />
    </div>
  )
}

export default PropGetter
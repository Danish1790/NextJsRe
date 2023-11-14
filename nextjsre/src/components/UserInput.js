"use client"
import React,{forwardRef,useRef} from 'react'

const UserInput = (props,ref) => {
  return (
    <div>
        <input ref={ref} type='text' /> 
    </div>
  )
}

export default forwardRef(UserInput)
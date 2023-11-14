"use client"

import React,{useRef} from 'react'

const page = () => {

    let inputRef = useRef(null)

    const submitForm = (e) =>{
        console.log("submit form")
        e.preventDefault();
        console.warn("input ref value",inputRef.current.value)
    }
  return (
    <div>
        <form onSubmit={submitForm}>
            <input ref={inputRef} type='text' />
            <br/>
            <br/>
            <input type='text' />
            <br/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default page
"use client"

import React, { useRef, useState } from 'react'

const page = () => {

  // using uncontrolled
  let inputRef = useRef(null)

  const submitForm = (e) => {
    console.log("submit form")
    e.preventDefault();
    console.warn("input ref value", inputRef.current.value)
  }

  // controlled
  const [formData, setFormData] = useState({})

  const getData = (value, name) => {
    const newData = {[name]:value}
    setFormData({...formData,...newData})
  }
  // console.log("form Data",formData)

  return (
    <div>
      <form onSubmit={submitForm}>
        <input ref={inputRef} type='text' />
        <br />
        <br />
        <input type='text' />
        <br />
        <button>Submit</button>
      </form>

      <br />
      <br />
      <br />
      <div className='form'>
        <input type='text' name="name" placeholder='enter name' onChange={(e) => { getData(e.target.value, e.target.name) }} />
        <input type='number' name="age" placeholder='enter age' onChange={(e) => { getData(e.target.value, e.target.name) }} />
        <input type='date' name="date" placeholder='enter date' onChange={(e) => { getData(e.target.value, e.target.name) }} />
        <button onClick={()=>{console.log(formData)}}>Submit</button>
      </div>
    </div>
  )
}

export default page
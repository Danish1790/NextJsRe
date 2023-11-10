"use client"
import React, { useState } from 'react'
import { addUser } from '../reduxtoolkit/slice'
import { useDispatch } from 'react-redux'

const AddUsers = () => {

  const [name, setName] = useState("")
  const dispatch  = useDispatch()
  const userDispatch = () => {
    if(name!=""){

      dispatch(addUser(name))
    }
    else{
      window.alert("empty user")
    }
  }
  return (
    <div>
      <h3>AddUsers</h3>
      <input
        type='text'
        placeholder='add new user'
        onChange={(e) => { setName(e.target.value) }}
      />
      <button onClick={userDispatch}>Add user</button>
    </div>
  )
}

export default AddUsers
"use client"
import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { removeUser } from '../reduxtoolkit/slice'


const DisplayUsers = () => {
  const userData = useSelector((data)=> data.users)
  const dispatch = useDispatch()

  console.log(userData)
  return (
    <div>
        <h3>DisplayUsers</h3>
        {
          userData.map((item)=>(
            <div>
            <span>
              {item.name}
            </span>
            <button onClick={()=>{dispatch(removeUser(item.id))}}>Remove User</button>
            </div>
          ))
        }
    </div>
  )
}

export default DisplayUsers
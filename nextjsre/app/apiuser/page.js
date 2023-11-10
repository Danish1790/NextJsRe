"use client"
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {fetchApiUsers} from "../../src/reduxtoolkit/slice"
import { useSelector } from 'react-redux/es/hooks/useSelector'

const ApiUser = () => {
  const apiUserData = useSelector((data)=>data.userData.userApiData)

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchApiUsers())
  },[])

  return (
    <div>
        <h3>
        ApiUser
        </h3>
        {
          apiUserData.map((user)=>(
            <div>
              {user.name}
            </div>
          ))
        }
    </div>
  )
}

export default ApiUser
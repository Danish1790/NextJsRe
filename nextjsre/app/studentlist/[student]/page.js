"use client"
import React from 'react'



const Student = ({params}) => {
    console.log("studentNameParameter",params)
    
  return (
    <div>
        <h2>Student Details</h2>
        <h4>{params.student}</h4>
    </div>
  )
}

export default Student
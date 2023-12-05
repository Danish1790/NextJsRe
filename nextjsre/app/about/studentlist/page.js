"use client"
import Link from 'next/link'
import React from 'react'

const StudentList = () => {
  return (
    <div>
        <h4>Student List</h4>
        <ul>
            <li><Link href="/studentlist/1">Anil</Link></li>
            <li><Link href="/studentlist/2">paltr</Link></li>
            <li><Link href="/studentlist/3">Hajr</Link></li>
            <li><Link href="/studentlist/4">tarh</Link></li>
        </ul>
    </div>
  )
}

export default StudentList
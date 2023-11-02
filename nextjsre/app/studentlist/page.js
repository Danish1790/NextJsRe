import Link from 'next/link'
import React from 'react'

const StudentList = () => {
    const names = ["ali", "umer", "paresh", "adam", "usman", "hasan"]
    return (

        <div>
        <h3>Student List</h3>
            {
                names.map(name => (
                    <li><Link href="/studentlist/ali">{name}</Link></li>

                ))
            }            
        </div>
    )
}

export default StudentList
"use client"

import React, { useRef } from 'react'
import UserInput from '@/src/components/UserInput'

const page = () => {
    let userUpdateRef = useRef(null)
    const updateRef = () => {
        userUpdateRef.current.value = "updated value"
        userUpdateRef.current.style.color = "red"
    }
    return (
        <div>
            <UserInput ref={userUpdateRef} />

            <button onClick={updateRef}>
                Update counter from outside using forwardRef
            </button>
        </div>
    )
}

export default page
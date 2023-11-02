"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
const layout = ({ children }) => {
    const path  = usePathname()
    return (
        <div>
            <div>
                {
                    path !== "/login/teacherlogin" ?
                        <div>
                            <h2>Common Login  Page</h2>
                            <Link href="/">Goto Home Page</Link>
                            <br />
                            <Link href="login/loginstudent">Login Student Page</Link>
                            <br />
                            <Link href="login/loginteacher">Login Teacher Page</Link>

                        </div>
                        : null
                }
            </div>
            {children}
        </div>
    )
}

export default layout
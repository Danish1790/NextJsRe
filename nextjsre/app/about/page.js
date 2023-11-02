import Link from 'next/link'
import React from 'react'

const AboutPage = () => {
  return (
    <div>
    <div>About Page</div>
    <Link href="/aboutstudent">Goto About Student</Link>
    <br/>
    <Link href="/">Goto Home Page</Link>
    </div>
  )
}

export default AboutPage
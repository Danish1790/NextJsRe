"use client"
import Link from 'next/link'

const About = () => {
    return (
        <div>
            <h3>About page</h3>
            <button><Link href="/">Goto Home Page</Link></button>
            <hr/>
            <Link href="/about/aboutstudent">About Student</Link>
            <hr />
            <Link href="/about/aboutcollege">About College</Link>
            <hr />
            <Link href="/about/aboutteacher">About Teacher</Link>
        </div>
    )
}

export default About
'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();

  const navigate = (path) =>{
    router.push(path)
  }
  return (
   <div>
   <h1>Home Page</h1>
   <Link href="/login">Go to Login Page</Link>
    <br/>
   <Link href="/login">Go to About Page</Link>

    <button onClick={()=>navigate("/login")}>
      Goto Login Page
    </button>
    <button onClick={()=>navigate("/about")}>
      Goto About Page
    </button>
   </div>
  )
}

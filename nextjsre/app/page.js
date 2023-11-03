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
   <br/>
   <Link href="/productlist">Go to Product Page</Link>
    <br/>
    <br/>
    <br/>
    <button onClick={()=>navigate("/productlist")}>
      Goto Product Page
    </button>

   </div>
  )
}

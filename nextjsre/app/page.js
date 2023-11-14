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
    <Link href="calc">Goto Calculation</Link>
    <br/>
    <Link href="user">Goto Users</Link>
    <br/>
    <Link href="todo">Goto Tasks</Link>
    <br/>
    <Link href="apiuser">Goto Api Users</Link>
    <br/>
    <Link href="purecomponent">Goto pure compoonent</Link>
    <br/>
    <Link href="form">Goto form </Link>
    <br/>
    <Link href="hoc">Goto HOC </Link>
    <br/>
    <Link href="fref">Goto Fref </Link>

    <br/>
    <button onClick={()=>navigate("/productlist")}>
      Goto Product Page
    </button>

   </div>
  )
}

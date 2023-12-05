"use client"
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const Layout = ({ children }) => {
    const pathName = usePathname()
    console.log("pathName", pathName)
    return (
        // <div>
        //     {
        //         pathName !== "/about/aboutteacher" ?
        //             <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', backgroundColor: 'lightgreen', alignItems: 'center' }}>
        //                 <h2 >Navbar About: Common layout</h2>
        //                 <div>
        //                     <Link href="/about">About</Link>
        //                     <Link href="/about/aboutcollege">About College</Link>
        //                     <Link href="/about/aboutstudent">About Student</Link>
        //                     <Link href="/about/aboutteacher">About Teacher</Link>
        //                     <Link href="/about/studentlist">Student List</Link>
        //                 </div>
        //             </div>
        //             :
        //             <div>
        //             <h2>Teacher saperate page</h2>
        //             <br/>
        //             <Link href="/about">Goto About</Link>
        //             </div>
        //     }
        //     {children}
        // </div>
        <div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', backgroundColor: 'lightgreen', alignItems: 'center' }}>
            <h2 >Navbar About: Common layout</h2>
            <div>
                <Link href="/about">About</Link>
                <Link href="/about/aboutcollege">About College</Link>
                <Link href="/about/aboutstudent">About Student</Link>
                <Link href="/about/aboutteacher">About Teacher</Link>
                <Link href="/about/studentlist">Student List</Link>
            </div>
        </div>
            {children}
        </div>
    )
}

export default Layout
import { NextResponse } from 'next/server'
import { redirect } from 'next/navigation'

export function middleware(request) {

    // if (request.nexUrl.pathname != "/login") {

    return NextResponse.redirect(new URL("/login", request.url))
    // }




    // // Given an incoming request...
    // const loginUrl = new URL('/login', request.url)
    // // Add ?from=/incoming-url to the /login URL
    // loginUrl.searchParams.set('/about', request.nextUrl.pathname)
    // // And redirect to the new URL
    // return NextResponse.redirect(loginUrl)
}

// export default middleware

export const config = {
    matcher: ["/study"]
}
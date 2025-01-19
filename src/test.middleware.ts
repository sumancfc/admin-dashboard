//import { NextResponse } from 'next/server';
//import type { NextRequest } from 'next/server';

//export function middleware(request: NextRequest) {
// Retrieve the token from cookies
// const token = request.cookies.get('token')?.value;

// Check if the user is trying to access a protected route under /dashboard without a token
// if (request.nextUrl.pathname.startsWith('/dashboard') && !token) {
// return NextResponse.redirect(new URL('/auth/login', request.url));
//}

// Allow the request to proceed if authenticated
// return NextResponse.next();
//}

// Configure which routes the middleware should apply to
//export const config = {
// matcher: ['/dashboard/:path*'], // Protect all routes starting with /dashboard
//};

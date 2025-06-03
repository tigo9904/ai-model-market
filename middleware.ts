import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Get the pathname
  const path = request.nextUrl.pathname

  // Check if the path is for admin pages (except login)
  const isAdminPath = path.startsWith("/admin") && !path.startsWith("/admin/login")

  // If it's an admin path, redirect to login
  if (isAdminPath) {
    const url = new URL("/admin/login", request.url)
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

// Configure the middleware to run only on admin routes
export const config = {
  matcher: ["/admin/:path*"],
}

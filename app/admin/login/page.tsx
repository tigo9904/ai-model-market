"use client"

// import { useState, useEffect } from "react"
// import { useRouter, useSearchParams } from "next/navigation"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Alert, AlertDescription } from "@/components/ui/alert"
// import { loginAdmin, isAdminAuthenticated } from "@/lib/auth"
// import Link from "next/link"

export default function AdminLoginPage() {
  // const [username, setUsername] = useState("")
  // const [password, setPassword] = useState("")
  // const [error, setError] = useState<string | null>(null)
  // const [isLoading, setIsLoading] = useState(false)
  // const router = useRouter()
  // const searchParams = useSearchParams()

  // // Check if already authenticated
  // useEffect(() => {
  //   if (isAdminAuthenticated()) {
  //     const redirect = searchParams.get("redirect") || "/admin"
  //     router.push(redirect)
  //   }
  // }, [router, searchParams])

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault()
  //   setError(null)
  //   setIsLoading(true)

  //   try {
  //     const success = loginAdmin(username, password)

  //     if (success) {
  //       // Small delay to ensure cookie is set
  //       setTimeout(() => {
  //         const redirect = searchParams.get("redirect") || "/admin"
  //         router.push(redirect)
  //         router.refresh() // Force a refresh to update auth state
  //       }, 100)
  //     } else {
  //       setError("Invalid username or password")
  //     }
  //   } catch (err) {
  //     console.error("Login error:", err)
  //     setError("An error occurred during login")
  //   } finally {
  //     setIsLoading(false)
  //   }
  // }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-purple-600">Admin Login</h1>
          <p className="text-gray-600 mt-2">Please contact support to access the admin panel</p>
        </div>
      </div>
    </div>
  )
}

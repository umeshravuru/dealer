'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ResetPassword() {
    const [email, setEmail] = useState('')
    const router = useRouter()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Here you would typically send a request to your backend
        console.log('Password reset requested for:', email)
        // For now, we'll just show an alert and redirect to login
        alert('If an account exists for this email, you will receive password reset instructions.')
        router.push('/login')
    }

    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Reset Password</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                    </div>
                    <CardFooter className="flex justify-between mt-4 px-0">
                        <Button type="submit">Reset Password</Button>
                    </CardFooter>
                </form>
            </CardContent>
            <CardFooter>
                <p className="text-sm text-gray-500">
                    Remember your password? <Link href="/login" className="text-blue-500 hover:underline">Login</Link>
                </p>
            </CardFooter>
        </Card>
    )
}


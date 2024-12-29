'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function CreatePool() {
    const [poolName, setPoolName] = useState('')
    const [targetAmount, setTargetAmount] = useState('')
    const [description, setDescription] = useState('')
    const [participants, setParticipants] = useState('')
    const router = useRouter()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Here you would typically send a request to your backend
        console.log('Create pool attempt with:', { poolName, targetAmount, description, participants })
        // For now, we'll just redirect to a hypothetical dashboard
        router.push('/dashboard')
    }

    return (
        <Card className="w-[450px]">
            <CardHeader>
                <CardTitle>Create Money Pool</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="pool-name">Pool Name</Label>
                            <Input id="pool-name" placeholder="Enter pool name" value={poolName} onChange={(e) => setPoolName(e.target.value)} required />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="target-amount">Target Amount</Label>
                            <Input id="target-amount" type="number" placeholder="Enter target amount" value={targetAmount} onChange={(e) => setTargetAmount(e.target.value)} required />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="description">Description</Label>
                            <Textarea id="description" placeholder="Describe the purpose of this pool" value={description} onChange={(e) => setDescription(e.target.value)} required />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="participants">Participants (comma-separated emails)</Label>
                            <Input id="participants" placeholder="Enter participant emails" value={participants} onChange={(e) => setParticipants(e.target.value)} required />
                        </div>
                    </div>
                    <CardFooter className="flex justify-between mt-4 px-0">
                        <Button type="submit">Create Pool</Button>
                    </CardFooter>
                </form>
            </CardContent>
        </Card>
    )
}


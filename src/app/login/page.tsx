import '@/styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Money Pool System',
    description: 'A system for group money pooling and management',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={inter.className}>
        <body className="bg-background text-foreground">
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            {children}
        </main>
        </body>
        </html>
    )
}


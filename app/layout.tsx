import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'wholly embrace | celebrate the imperfect',
  description: 'philosophy: embrace yourself. embrace others. embrace life. made with love by Earb Amari.',
  icons: {
    icon: '/logo.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100">{children}</body>
    </html>
  )
} 
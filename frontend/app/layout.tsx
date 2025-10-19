import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Girdhar Trading Company | Commission Agent & Grain Retailer',
  description: 'Girdhar Trading Company specializes in commission-based grain trading and retail. With years of experience and strong market presence, we help farmers, wholesalers, and buyers connect with the right opportunities in the grain market.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}


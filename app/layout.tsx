import { Navbar } from '@/components'
import './globals.css'
import type { Metadata } from 'next'
import { ShoppingCartProvider } from '@/context/ShoppingCartContext'
import DataProvider from '@/context/DataProvider'


export const metadata: Metadata = {
  title: 'Ecommerce App | by-Aditya',
  description: 'Buy & Sell',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <DataProvider>
    <ShoppingCartProvider>

    <html lang="en" className='relative'>

      <body >

     <Navbar/>
        {children}
        </body>
    </html>

    </ShoppingCartProvider>
    </DataProvider>

  )
}

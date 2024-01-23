import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Copyright from './components/Copyright'
import DataContextProvider from './context/DataContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cafe de Altura',
  description: 'Cafe de Altura project',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DataContextProvider>
          <Navbar/>
          {children}
          <Copyright/>
        </DataContextProvider>
      
      </body>
    </html>
  )
}

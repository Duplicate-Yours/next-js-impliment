

import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next js starter',
  description: 'Generated by create next app',
}

const  RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <a href="/">Home</a>
        </nav>
        {children}
        <footer>
          Next js starter
          Developer Mahafuj
        </footer>
        </body>
    </html>
  )
}

export default RootLayout;

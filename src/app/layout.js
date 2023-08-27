import NavBar from '@/components/header/NavBar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })
import "./globals.css"
// -------- context apis --------
import RegistrationStates from "../context/registration/registrationStates"
import Head from 'next/head'


export const metadata = {
  title: 'igit mca website 2023',
  description: 'This website is designed for junior students of IGIT MCA ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className={`${inter.className}`} >
        <NavBar/>
        <RegistrationStates> {/*Registration context*/}
          {children}
        </RegistrationStates>
        <Footer/>
      </body>
    </html>
  )
}

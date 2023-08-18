import NavBar from '@/components/header/NavBar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })
import "./globals.css"
import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'

export const metadata = {
  title: 'igit mca website 2023',
  description: 'This website is designed for junior students of IGIT MCA ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <Link href={"https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"} rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous" />
      </Head>
      <body className={`${inter.className}`} >
        <NavBar/>
          {children}
        <Footer/>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous" ></Script>
      </body>
    </html>
  )
}

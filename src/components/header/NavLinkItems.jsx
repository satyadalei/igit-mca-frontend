import Link from 'next/link'
import React from 'react'

const NavLinkItems = () => {
  return (
    <>
         <ul>
              <li><Link href="/batch" >Batch</Link></li>
              <li><Link href="/semesters" >Semesters</Link></li>
              <li><Link href="/notes" >Notes</Link></li>
              <li><Link href="/galleries" >Galleries</Link></li>
              <li><Link href="/about" >About</Link></li>
              <li><Link href="/contacts" >Contacts</Link></li>
            </ul>
    </>
  )
}

export default NavLinkItems
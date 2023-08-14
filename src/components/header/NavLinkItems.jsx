import Link from 'next/link'
import React from 'react'

const NavLinkItems = (props) => {
  console.log(props);
  console.log(props.toggleNav);
  return (
    <>
         <ul>
              <li onClick={props.toggleNav} ><Link href="/batch" >Batch</Link></li>
              <li onClick={props.toggleNav} ><Link href="/semesters" >Semesters</Link></li>
              <li onClick={props.toggleNav} ><Link href="/notes" >Notes</Link></li>
              <li onClick={props.toggleNav} ><Link href="/galleries" >Galleries</Link></li>
              <li onClick={props.toggleNav} ><Link href="/about" >About</Link></li>
              <li onClick={props.toggleNav} ><Link href="/contacts" >Contacts</Link></li>
            </ul>
    </>
  )
}

export default NavLinkItems
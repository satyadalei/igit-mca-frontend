"use client"
import React, { useRef, useState } from 'react'
import styles from "./navbar.module.css"
import "./navbar.css"
import Link from 'next/link'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import NavLinkItems from './NavLinkItems'
import UserNameAndAvatar from './UserNameAndAvatar'
import UserAvatarAndNameReverse from './UserAvatarAndNameReverse'
import LogOutBtn from './LogOutBtn'

const NavBar = () => {

  const [logedIn, setLogedIn] = useState(false);
  const responsive_Nav_ref = useRef();

  const toggleNavBar = () => {
    responsive_Nav_ref.current.classList.toggle("active_nav");
  }


  return (
    <>
      <nav className={styles.navbar} >
        <div className={styles.navbar_container} >

          {/* Logo */}
          <h1 className={styles.logo}>
            <Link href="/" >IGIT-MCA</Link>
          </h1>

          {/* Nav Menus */}
          <ul className={styles.nav_item} >
            <li><Link  href="/batch" >Batch</Link></li>
            <li><Link href="/semesters" >Semesters</Link></li>
            <li><Link href="/notes" >Notes</Link></li>
            <li><Link href="/galleries" >Galleries</Link></li>
            <li><Link href="/about" >About</Link></li>
            <li><Link href="/contacts" >Contacts</Link></li>
          </ul>

          {/* Login & registartion Details starts*/}
          <div className={styles.login_credentials} >
            {/* show based on log in status*/}
            {logedIn ?
              <div className={styles.logedIn_user} >
                <span className={styles.logout_btn} >Logout</span>
                <UserNameAndAvatar/>
              </div>
              :
              <div>
                <Link className={styles.login_link} href="/login">Login</Link>
                <Link className={styles.registration_link} href="/registration">Registration</Link>
              </div>
            }
          </div>
          {/* Login & registartion Details ends */}

          {/* hamburger */}
          <span className={styles.hamburger_menu} >
            <MenuIcon onClick={toggleNavBar}  />
          </span>

          {/* Responsive nav links*/}
          <div ref={responsive_Nav_ref} className={`${styles.responsive_nav}`} >
            <CloseIcon onClick={toggleNavBar} className={styles.cross_hamburger_menu} />
            <UserAvatarAndNameReverse/>
            {/* when a link is clicked then closes responsive navbar */}
            <NavLinkItems toggleNav={toggleNavBar} />
            <LogOutBtn/>
          </div>

        </div>
      </nav>
    </>
  )
}

export default NavBar
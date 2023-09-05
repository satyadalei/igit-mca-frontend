"use client"
import React, { useRef } from 'react'
import styles from "./navbar.module.css"
import "./navbar.css"
import Link from 'next/link'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import NavLinkItems from './NavLinkItems'
import UserNameAndAvatar from './UserNameAndAvatar'
import UserAvatarAndNameReverse from './UserAvatarAndNameReverse'
import LogOutBtn from './LogOutBtn'
import ActiveUserAndLoginStatusContext from '@/context/activeUserAndLoginStatus/activeUserAndLoginStatusContext'
import { useContext } from 'react'
import { useEffect } from 'react'

const NavBar = () => {

  // ----- Context -----
  const { activeUser, loginStatus, fetchActiveUser } = useContext(ActiveUserAndLoginStatusContext)


  const responsive_Nav_ref = useRef();
  useEffect(() => {
    fetchActiveUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const toggleNavBar = () => {
    responsive_Nav_ref.current.classList.toggle("active_nav");
  }


  return (
    <>
      <nav className={`${styles.navbar} "navbar" `} >
        <div className={styles.navbar_container} >

          {/* Logo */}
          <h1 className={`${styles.logo}`}>
            <Link href="/" className={`${styles.link_text}`} >IGIT-MCA</Link>
          </h1>

          {/* Nav Menus */}
          <ul className={`${styles.nav_item}`} >
            <li><Link href={"/"} >Home</Link></li>
            <li><Link href="/batch" >Batch</Link></li>
            <li><Link href="/semesters" >Semesters</Link></li>
            <li><Link href="/notes" >Notes</Link></li>
            <li><Link href="/galleries" >Galleries</Link></li>
            <li><Link href="/about" >About</Link></li>
            <li><Link href="/contacts" >Contacts</Link></li>
          </ul>

          {/* Login & registration Details starts*/}
          <div className={styles.login_credentials} >
            {/* show based on log in status*/}
            
            {loginStatus &&
              <div className={styles.logedIn_user} >
                {/* <LogOutBtn /> */}
                <UserNameAndAvatar />
              </div>
            }

            {loginStatus === false &&
              <div>
                <Link className={styles.login_link} href="/login">Login</Link>
                <Link className={styles.registration_link} href="/registration">Registration</Link>
              </div>
            }
          </div>
          {/* Login & registartion Details ends */}

          {/* hamburger */}
          <span className={styles.hamburger_menu} >
            <MenuIcon onClick={toggleNavBar} />
          </span>

          {/* Responsive nav links*/}
          <div ref={responsive_Nav_ref} className={`${styles.responsive_nav}`} >
            <CloseIcon onClick={toggleNavBar} className={styles.cross_hamburger_menu} />
            {/* when a link is clicked then closes responsive navbar */}
            {loginStatus &&
              <>
                <UserAvatarAndNameReverse />
                {/* <div className={styles.logedIn_user} >
                  <LogOutBtn />
                  <UserNameAndAvatar />
                </div> */}
              </>
            }
            {(loginStatus === false) &&
              <div>
                <Link className={styles.login_link} onClick={toggleNavBar} href="/login">Login</Link>
                <Link className={styles.registration_link} onClick={toggleNavBar} href="/registration">Registration</Link>
              </div>
            }
            <NavLinkItems toggleNav={toggleNavBar} />
            {/* show based on log in status*/}
          </div>

        </div>
      </nav>
    </>
  )
}

export default NavBar
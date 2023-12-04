import Link from "next/link";
import React from "react";
import { useRouter, usePathname } from "next/navigation";


const NavLinkItems = ({toggleNav, navItemType}) => {
  const currentUrlPath = usePathname();
  // navItemType -> vertical or horizontal

  return (
      <ul>
        <li onClick={toggleNav}>
          <Link 
          className={`${currentUrlPath === "/" && 'text-sky-500'}`} 
          shallow={true} href="/">Home</Link>
        </li>
        <li onClick={toggleNav}>
          <Link 
          className={`${currentUrlPath === "/profile" && 'text-sky-500'}`} 
          shallow={true} href="/profile">Profile</Link>
        </li>
        <li onClick={toggleNav}>
          <Link 
          className={`${
            currentUrlPath.startsWith("/batch") && "text-sky-500"
          }`} 
          shallow={true} href="/batch">Batch</Link>
        </li>
        <li onClick={toggleNav}>
          <Link 
          className={`${
            currentUrlPath.startsWith("/notes") && "text-sky-500"
          }`}
          shallow={true} href="/notes">Notes</Link>
        </li>
        
        <li onClick={toggleNav}>
          <Link 
          className={`${currentUrlPath === "/gallery" && 'text-sky-500'}`} 
          shallow={true}
          href="/gallery">Gallery</Link>
        </li>
        <li onClick={toggleNav}>
          <Link  
          className={`${currentUrlPath === "/about" && 'text-sky-500'}`} 
          shallow={true}
          href="/about">About</Link>
        </li>
      </ul>
  );
};

export default NavLinkItems;

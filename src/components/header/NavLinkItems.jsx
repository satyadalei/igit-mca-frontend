import Link from "next/link";
import React from "react";

const NavLinkItems = (props) => {
  const disableLink = (event) => {
    event.preventDefault();
  };

  return (
      <ul>
        <li onClick={props.toggleNav}>
          <Link shallow={true} href="/">Home</Link>
        </li>
        <li onClick={props.toggleNav}>
          <Link shallow={true} href="/profile">Profile</Link>
        </li>
        <li onClick={props.toggleNav}>
          <Link shallow={true} href="/batch">Batch</Link>
        </li>
        <li onClick={props.toggleNav}>
          <Link shallow={true} href="/notes">Notes</Link>
        </li>
        
        <li onClick={props.toggleNav}>
          <Link shallow={true}
          href="/gallery">Gallery</Link>
        </li>
        <li onClick={props.toggleNav}>
          <Link  
          shallow={true}
          href="/about">About</Link>
        </li>
        {/* Not required */}
        {/* <li onClick={props.toggleNav}>
          <Link 
          shallow={true}
          className="disabled_link_text"
          onClick={disableLink}
          href="/contacts">Contacts</Link>
        </li> */}
      </ul>
  );
};

export default NavLinkItems;

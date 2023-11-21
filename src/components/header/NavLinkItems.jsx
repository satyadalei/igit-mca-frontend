import Link from "next/link";
import React from "react";

const NavLinkItems = (props) => {
  const disableLink = (event) => {
    event.preventDefault();
  };

  return (
    <>
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
        {/* <li onClick={props.toggleNav}>
          <Link
          className="disabled_link_text"
          onClick={disableLink}
           href="/semesters">Semesters</Link>
        </li> */}
        
        <li onClick={props.toggleNav}>
          <Link shallow={true}
          href="/galleries">Galleries</Link>
        </li>
        <li onClick={props.toggleNav}>
          <Link  
          shallow={true}
          className="disabled_link_text"
          onClick={disableLink}
          href="/about">About</Link>
        </li>
        <li onClick={props.toggleNav}>
          <Link 
          shallow={true}
          className="disabled_link_text"
          onClick={disableLink}
          href="/contacts">Contacts</Link>
        </li>
      </ul>
    </>
  );
};

export default NavLinkItems;

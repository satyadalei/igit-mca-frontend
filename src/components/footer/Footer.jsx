"use client";
import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const disableLink = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <div className={styles.footer_section}>
        {/* --------Footer top section ----------- */}
        <div className={styles.footer_top}>
          {/* 1st div */}
          <div className={`${styles.footer_item} ${styles.footer_item1} `}>
            <h4 className={styles.footer_link_heading}>MCA</h4>
            <p>
              Welcome to IGIT MCA Batch Page. This page is designed in view of
              junior for interacting with seniors. They can also view various
              resources inlcuding notes & wifi passwords.
            </p>
          </div>

          {/* 2nd div */}
          <div className={`${styles.footer_item} ${styles.footer_item2} `}>
            <h4 className={styles.footer_link_heading}>On this website</h4>
            <div className={styles.dual_links_box}>
              {/* link -left*/}
              <ul>
                <li>
                  <Link href={"/"}>Home</Link>
                </li>
                <li>
                  <Link href={"/batch"}>Batch</Link>
                </li>
                <li>
                  <Link href={"/notes"}>Notes</Link>
                </li>
                <li>
                  <Link href={"/gallery"}>Gallery</Link>
                </li>
              </ul>
              {/* links - right*/}
              <ul>
                <li>
                  <Link href={"/about"}>About </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href={"https://firebasestorage.googleapis.com/v0/b/mca-community.appspot.com/o/documents%2Fhowto%2Fdocument.pdf?alt=media&token=9bdc2dc2-04c1-4273-8fb9-0479b077b490"}
                  >
                    Docs
                  </Link>
                </li>
                <li>
                  <p
                  // after this link is done remove p & add Link
                    href={"/blogs"}
                    className={styles.disabled_link_text}
                    onClick={disableLink}
                  >
                    Blogs
                  </p>
                </li>

              </ul>
            </div>
          </div>
          {/* 2nd div complete */}

          {/* 3rd div */}
          <div className={`${styles.footer_item} ${styles.footer_item3} `}>
            <h4 className={styles.footer_link_heading}>Important Links</h4>
            <ul>
              <li>
                <Link target="_blank" href={"https://igitsarang.ac.in/"}>
                  IGIT Website{" "}
                  <OpenInNewIcon className={styles.font_size_inherit} />{" "}
                </Link>
              </li>
              <li>
                <Link target="_blank" href={"https://igit.icrp.in/academic/"}>
                  IGIT payment portal{" "}
                  <OpenInNewIcon className={styles.font_size_inherit} />{" "}
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href={
                    "https://www.linkedin.com/school/indira-gandhi-institute-of-technology-igit-sarang/"
                  }
                >
                  IGIT LinkedIn page{" "}
                  <OpenInNewIcon className={styles.font_size_inherit} />
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href={"https://scholarship.odisha.gov.in/website/home"}
                >
                  Scholarship Portal{" "}
                  <OpenInNewIcon className={styles.font_size_inherit} />{" "}
                </Link>
              </li>
            </ul>
          </div>

          {/* 4th div */}
          <div className={`${styles.footer_item} ${styles.footer_item4} `}>
            <h4 className={`${styles.footer_link_heading} !mb-0`}>Contact Us</h4>
            <ul>
              <li>
                <p>igitmcacommunity@gmail.com</p>
              </li>
              <li>
                <p className={styles.technical_issue_text}>
                  For any technical issues contact to your CR or mail to {" "}
                  <span>satyaprofessional99@gmail.com</span>
                </p>
              </li>
            </ul>
            <div>
              <h3 className="text-sky-500 text-sm mt-5" >Illustration Credits</h3>
              <p className="text-xs" >
              <a rel="noopener noreferrer"  target="_blank" href="https://www.freepik.com/free-vector/pair-programming-concept-illustration_10838789.htm#fromView=search&term=coding&page=1&position=30&track=sph&regularType=vector&uuid=6131a9aa-835a-40e4-85dc-9c74b3a5c372">Image by storyset</a> on Freepik
              </p>
            </div>
          </div>
        </div>

        {/* --------Footer bottom section ----------- */}
        {/* <hr style={{backgroundColor:"grey", height:"1px"}} /> */}
        <div className={styles.footer_bottom}>
          <p>
            Copyrights ©{`${currentYear}`} igit MCA. All rights reserved ||
            Designed & developed by{" "}
            <span>
              <Link
                target="_blank"
                className={styles.link_text}
                href={"https://linktr.ee/satya_it"}
              >
                Satyanarayan
              </Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;

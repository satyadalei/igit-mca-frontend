/* eslint-disable react/no-unescaped-entities */

import React from 'react'
import styles from "./css/hero.module.css"
import Link from 'next/link'
import Image from 'next/image'
import classmateImage from "../../../public/images/classmates.jpg"
import CarouselComponent from "./Carousel"

const HeroSectionMain = () => {
  return (
    <>
       <div className={styles.hero_main_container} >
          <div className={styles.container_box} >
          {/* left_section */}
             <div className={`${styles.left_section} ${styles.hero_main_items}`} >
                  <h1 className={styles.hero_heading} >
                      Welcome to IGIT <br />
                      MCA student <br />
                      website.
                   </h1>
                   <p className={styles.hero_text} >
                   This page is developed by MCA 41th in view of helping the juniors.This page will help to connect their seniors and juniors.It includes. all the semester notes, questions and assignments. It lets you to contact your senior throught their instagram and linkedin profile.
                   </p>

                   <div>
                       <Link className={styles.hero_btn} href={"/login"} >
                          Get started
                       </Link>
                   </div>
            </div>
             {/* left_section ends*/}
             
             {/* right_section start*/}
             <div className={`${styles.right_section} ${styles.hero_main_items}`} >
                 {/* carosule image */}
                 {/* <div className={styles.carosule_img_box} > */}
                       {/* <Image 
                        className={styles.hero_section_image}
                        src={classmateImage}
                        width={500} 
                        alt="41th batch students image with niroj sir"
                       /> */}
                       <CarouselComponent/>
                 {/* </div> */}
             </div>
             {/* right_section ends*/}
             


          </div>
       </div>   
       {/* hero section ends */}
    </>
  )
}

export default HeroSectionMain
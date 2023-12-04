"use client"
import React from 'react'
import styles from "./hero.module.css"
import Link from 'next/link'
import TypeWriter from '../TypeWriter'
import welComeImage from "../../../public/images/welcome_icons.png"
import welcomeImage2 from "../../../public/images/boy_girl_coding.jpg"
import Image from "next/image"
import CarouselComponent from './Carousel'


const HeroSectionMain = () => {

  return (
    <>
       <div className={styles.hero_main_container} >
          <div className={styles.container_box} >
          {/* left_section */}
             <div className={`${styles.left_section} ${styles.hero_main_items}`} >
                  <h1 className={`${styles.hero_heading} font-bold`} >
                      Welcome to IGIT <br />
                      <span className='text-sky-500' >MCA</span> student <br />
                      website.
                   </h1>
                   <p className='text-sm' >Managed & maintained by <span className='text-sky-500' >MCA</span> students</p>
                  <TypeWriter />
                   <p className={styles.hero_text} >
                   This website is developed to keep all MCA students at one place. It includes all the semester notes, questions and assignments. This website will help to connect their seniors, juniors & classmates.
                   </p>
                   <div>
                       <Link className={styles.hero_btn} href={"/batch"} >
                          Get started
                       </Link>
                   </div>
            </div>
             {/* left_section ends*/}
             
             {/* right_section start*/}
             <div className={`${styles.right_section} ${styles.hero_main_items}`} >
                  {/* <CarouselComponent/> */}
                  <Image className="!w-[100%] !h-fit" width={1000} height={1000} alt='Welcome image' src={"https://firebasestorage.googleapis.com/v0/b/mca-community.appspot.com/o/images%2Fhomepage-welcome%2Fboy_girl_coding.jpg?alt=media&token=f721236c-1909-4e64-b362-e8c7c1af12ed"}  />
             </div>
             {/* right_section ends*/}
          </div>
       </div>   
       {/* hero section ends */}
    </>
  )
}

export default HeroSectionMain
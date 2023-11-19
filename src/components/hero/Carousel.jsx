"use client"
import React from 'react'
import Carousel from "nuka-carousel"
import Image from 'next/image'
import styles from "./hero.module.css"
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
const CarouselComponent = () => {

  const defaultControlsConfig = {
    nextButtonText: React.ReactNode = <NavigateNextIcon />,
    prevButtonText: React.ReactNode = <ArrowBackIosNewIcon />,
    pagingDotsStyle: {
      margin: "0 2.5px 0 2.5px",
      // backgroundColor:"white", 
      // color : "red!important" // not working
    },
    pagingDotsContainerClassName: `${styles.paging_dot_container}`,
    // pagingDotsClassName : `${styles.paging_dot_container}`
  }

  return (
    <div>
      <Carousel
        className={styles.carosule_img_box}
        autoplay
        wrapAround
        defaultControlsConfig={defaultControlsConfig}
      >
        <Image className={styles.hero_section_image} src={"https://firebasestorage.googleapis.com/v0/b/mca-community.appspot.com/o/images%2FfrontPage%2Fmca_41_new_building.jpg?alt=media&token=33fd2518-222e-460f-850f-79cec1b6b048"} width={580} height={300} alt='panorama1' />
        <Image className={styles.hero_section_image} src={"https://firebasestorage.googleapis.com/v0/b/mca-community.appspot.com/o/images%2FfrontPage%2F41_saraswati_puja_with_seniors.jpeg?alt=media&token=cebcd992-7dd1-4300-9886-f09a43fb8db9"} width={580} height={300} alt='panorama2' />
        <Image className={styles.hero_section_image} src={"https://firebasestorage.googleapis.com/v0/b/mca-community.appspot.com/o/images%2FfrontPage%2Fmca_41_with_niroj_sir.jpeg?alt=media&token=5fd86d8a-6e87-4f09-8e07-513b0de5ff84"} width={580} height={300} alt='panorama3' />
        <Image className={styles.hero_section_image} src={"https://firebasestorage.googleapis.com/v0/b/mca-community.appspot.com/o/images%2FfrontPage%2F41_saraswati_puja.jpeg?alt=media&token=0607b947-50f0-48bb-810e-235782acae1b"} width={580} height={300} alt='panorama1' />
        <Image className={styles.hero_section_image} src={"https://firebasestorage.googleapis.com/v0/b/mca-community.appspot.com/o/images%2FfrontPage%2Fmca_puja.jpeg?alt=media&token=f65e0554-2b0a-400e-8e5f-5834ca0a8e41"} width={580} height={300} alt='panorama2' />
      </Carousel>
    </div>
  )
}

export default CarouselComponent
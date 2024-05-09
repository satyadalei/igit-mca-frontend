"use client"
import React from 'react'
import Carousel from "nuka-carousel"
import Image from 'next/image'
import styles from "./hero.module.css"
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
const CarouselComponent = ({className}) => {

  const defaultControlsConfig = {
    nextButtonText: React.ReactNode = <NavigateNextIcon />,
    prevButtonText: React.ReactNode = <ArrowBackIosNewIcon />,
    pagingDotsStyle: {
      margin: "0 2.5px 0 2.5px",
    },
    pagingDotsContainerClassName: `${styles.paging_dot_container}`,
  }

  return (
    <div className={`${className}`} >
      <Carousel
        autoplay
        wrapAround
        defaultControlsConfig={defaultControlsConfig}
      >
        <Image className={styles.hero_section_image} src={"https://firebasestorage.googleapis.com/v0/b/community-common-images.appspot.com/o/images%2Fcommon-images%2Fhome-page%2Fmemory%2Fmca_41_new_building.jpg?alt=media&token=87196d35-c5ce-431a-93a8-93e868f81560"} width={580} height={300} alt='panorama1' />

        <Image className={styles.hero_section_image} src={"https://firebasestorage.googleapis.com/v0/b/community-common-images.appspot.com/o/images%2Fcommon-images%2Fhome-page%2Fmemory%2Fall-41_and_42_ganesh_puja.jpg?alt=media&token=78694278-5c3c-4484-9fa6-1d7c8222f657"} width={580} height={300} alt='panorama1' />

        <Image className={styles.hero_section_image} src={"https://firebasestorage.googleapis.com/v0/b/community-common-images.appspot.com/o/images%2Fcommon-images%2Fhome-page%2Fmemory%2Fmca_saraswati_puja_.jpg?alt=media&token=2e040bf6-63c1-4ced-8f7a-0f1fe6f51d08"} width={580} height={300} alt='panorama2' />

        <Image className={styles.hero_section_image} src={"https://firebasestorage.googleapis.com/v0/b/community-common-images.appspot.com/o/images%2Fcommon-images%2Fhome-page%2Fmemory%2Fmca_41_with_niroj_sir.jpeg?alt=media&token=0c722bf2-dae8-4e5d-8e3e-b2a1ab8b4662"} width={580} height={300} alt='panorama3' />

        <Image className={styles.hero_section_image} src={"https://firebasestorage.googleapis.com/v0/b/community-common-images.appspot.com/o/images%2Fcommon-images%2Fhome-page%2Fmemory%2F41_saraswati_puja.jpeg?alt=media&token=e9b4d004-b595-4c9a-a13f-72c3a85355cd"} width={580} height={300} alt='panorama1' />

        <Image className={styles.hero_section_image} src={"https://firebasestorage.googleapis.com/v0/b/community-common-images.appspot.com/o/images%2Fcommon-images%2Fhome-page%2Fmemory%2Fmca_puja.jpeg?alt=media&token=7e5da75c-7d58-49b4-8436-c47a870b918a"} width={580} height={300} alt='panorama2' />
      </Carousel>
    </div>
  )
}

export default CarouselComponent
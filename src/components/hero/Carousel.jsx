"use client"
import React from 'react'
import Carousel from "nuka-carousel"
import Image from 'next/image'
import styles from "./css/hero.module.css"
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
const CarouselComponent = () => {

    const defaultControlsConfig = {
        nextButtonText : React.ReactNode = <NavigateNextIcon />,
        prevButtonText: React.ReactNode = <ArrowBackIosNewIcon/>,
        pagingDotsStyle: {
            margin: "0 2.5px 0 2.5px",
            // backgroundColor:"white", 
            // color : "red!important" // not working
        },
        pagingDotsContainerClassName : `${styles.paging_dot_container}`,
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
    <Image className={styles.hero_section_image} src={"https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=600"} width={580} height={300} alt='panorama1' />
    <Image className={styles.hero_section_image} src={"https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=600"} width={580} height={300} alt='panorama2' />
    <Image className={styles.hero_section_image} src={"https://images.pexels.com/photos/6457579/pexels-photo-6457579.jpeg?auto=compress&cs=tinysrgb&w=600"} width={580} height={300} alt='panorama3' />
    {/* <img src="/image1.png" />
      <img src="/image2.png" />
      <img src="/image3.png" />
      <img src="/image4.png" />
      <img src="/image5.png" /> */}
    </Carousel>
    </div>
  )
}

export default CarouselComponent
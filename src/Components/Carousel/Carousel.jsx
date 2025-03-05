import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import classes from './Carousel.module.css' 
import { img } from './img/data'
import "react-responsive-carousel/lib/styles/carousel.min.css"

function CarouselEffect() {
  return (
    <div> {/* Wrap Carousel with overlay container */}
      <Carousel
              autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img.map((imageItemLink, index) => (
          <img key={index} src={imageItemLink} alt="" />
        ))}
      </Carousel>
      <div className={classes.hero_img}/>
    </div>
  )
}

export default CarouselEffect
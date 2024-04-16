import React from 'react'
import {Slide} from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import slide1 from './mycon/slide1.jpg' 
import slide2 from './mycon/slide2.jpg'
import slide3 from './mycon/slide3.jpg'
import slide4 from './mycon/slide4.jpg'
    const images =[
        slide1,
        slide2,
        slide3,
        slide4
    ]
function Slider() {
  return (
    <div>
    <Slide images={images} >
    {images.map((each, index) => (
      <div key={index} className="each-slide" >
        <img src={each} alt={`Slide ${index}`} height={775} width={1700} style={{  maxWidth: '100%', height: 'auto', maxHeight: '100vh'}}/>
      </div>
    ))}
    </Slide>
    <style>
    {`
      /* Responsive styles */
      @media (max-width: 600px) {
        .each-slide {
          text-align: center;
          
        }
        img {
          width: 100%; /* Make images fill the container */
          height: auto;
          max-height: 50vh;
        }
      }
    `}
    </style>
</div>
  )
}

export default Slider
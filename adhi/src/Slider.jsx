import React from 'react'
import {Slide} from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import slide1 from './mycon/slide1.jpg' 
import slide2 from './mycon/slide2.jpg'
import slide3 from './mycon/slide3.jpg'
import slide4 from './mycon/slide4.jpg'
document.body.style.display = 'block'
function Slider() {
    const borderRadius = '20px'
    const images =[
        slide1,
        slide2,
        slide3,
        slide4
    ]
    
  return (
    <div>
        <Slide images={images} >
        {images.map((each, index) => (
          <div key={index} className="each-slide" >
            <img src={each} alt={`Slide ${index}`} height={775} width={1500} style={{borderRadius}}/>
          </div>
        ))}
        </Slide>
    </div>
  )
}

export default Slider
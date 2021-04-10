import React from "react"
import Carousel from "react-bootstrap/Carousel"

import vonderharr from "../../images/photos/vonderharr.jpg"
import hernandez1 from "../../images/photos/hernandez1.jpg"
import devore from "../../images/photos/devore.jpg"
import hernandez2 from "../../images/photos/hernandez2.jpg"
import villarreal from "../../images/photos/villarreal.jpg"
import cam from "../../images/photos/cam.jpg"

const PhotoSlides = [
  {
    image: vonderharr,
    caption: "Former lab member Rachel Vonderharr presenting at Psychonomics.",
  },
  {
    image: hernandez1,
    caption:
      "Lab member Rosaury Hernandez presenting at the ISU research symposium.",
  },

  {
    image: devore,
    caption:
      "Lab member Amanda DeVore presenting at the 2019 Annual Meeting of the Psychonomic Society, Montreal",
  },
  {
    image: hernandez2,
    caption:
      "Lab member Rosaury Hernandez presenting at the 2019 Annual Meeting of the Psychonomic Society, Montreal",
  },

  {
    image: villarreal,
    caption:
      "Lab member Selena Villarreal presenting at the 2019 Annual Meeting of the Psychonomic Society, Montreal",
  },
  {
    image: cam,
    caption:
      "Lab member Yonca Cam presenting at the 2019 Annual Meeting of the Psychonomic Society, Montreal",
  },
]
export default function Slider() {
  return (
    <Carousel>
      {PhotoSlides.map(p => (
        <Carousel.Item>
          <img className="d-block w-100" src={p.image} alt={p.caption} />
          <Carousel.Caption>
            <p>{p.caption}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

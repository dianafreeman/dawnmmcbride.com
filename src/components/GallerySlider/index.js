import React from "react"

export default function GallerySlider() {
  return (
    <div id="gallery-slider" className="photo-gallery">
      <a
        href="./graphics/photos/vonderharr.jpg"
        style="background-image: url('./graphics/photos/vonderharr.jpg')"
        title="Former lab member Rachel Vonderharr presenting at Psychonomics."
      >
        <img
          style="visibility: hidden"
          src="./graphics/photos/vonderharr.jpg"
        />
      </a>
      <a
        href="./graphics/photos/hernandez.jpg"
        style="background-image: url('./graphics/photos/hernandez.jpg')"
        title="Lab member Rosaury Hernandez presenting at the ISU research symposium."
      >
        <img style="visibility: hidden" src="./graphics/photos/hernandez.jpg" />
      </a>
      <a
        href="./graphics/photos/001.jpg"
        style="background-image: url('./graphics/photos/001.jpg')"
        title="Lab member Amanda DeVore presenting at the 2019 Annual Meeting of the Psychonomic Society, Montreal"
      >
        <img style="visibility: hidden" src="./graphics/photos/001.jpg" />
      </a>
      <a
        href="./graphics/photos/002.jpg"
        style="background-image: url('./graphics/photos/002.jpg')"
        title="Lab member Rosaury Hernandez presenting at the 2019 Annual Meeting of the Psychonomic Society, Montreal"
      >
        <img style="visibility: hidden" src="./graphics/photos/002.jpg" />
      </a>
      <a
        href="./graphics/photos/003.jpg"
        style="background-image: url('./graphics/photos/003.jpg')"
        title="Lab member Selena Villarreal presenting at the 2019 Annual Meeting of the Psychonomic Society, Montreal"
      >
        <img style="visibility: hidden" src="./graphics/photos/003.jpg" />
      </a>
      <a
        href="./graphics/photos/004.jpg"
        style="background-image: url('./graphics/photos/004.jpg')"
        title="Lab member Yonca Cam presenting at the 2019 Annual Meeting of the Psychonomic Society, Montreal"
      >
        <img style="visibility: hidden" src="./graphics/photos/004.jpg" />
      </a>
    </div>
  )
}

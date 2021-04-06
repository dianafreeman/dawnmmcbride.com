import React from "react";
import Slider from "react-slick";
import settings from "./sliderSettings";
import Section from "..";

import vonderharr from "../../../graphics/photos/vonderharr.jpg";
import hernandez1 from "../../../graphics/photos/hernandez1.jpg";
import devore from "../../../graphics/photos/devore.jpg";
import hernandez2 from "../../../graphics/photos/hernandez2.jpg";
import villarreal from "../../../graphics/photos/villarreal.jpg";
import cam from "../../../graphics/photos/cam.jpg";

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
];
export default function MemoryLab() {
  return (
    <Section title="Human Memory Lab" id="memory-lab">
      <div className="col-sm-6">
        <p className="lead">
          In the Human Memory Lab, we examine the processes involved in
          different types of memory, including: prospective memory, false
          memory, implicit memory, and forgetting. Students working in the lab
          have the opportunity to develop experimental research skills,
          presentation skills, and leadership skills. For more information about
          the opportunities in my lab,{" "}
          <a className="text-secondary" href="mailto:dmmcbri@ilstu.edu">
            contact me
          </a>{" "}
          or
          <a
            href="https://psychology.illinoisstate.edu/research/researchApprent/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-secondary pb-6"
          >
            visit the ISU Undergraduate Research Opportunities{" "}
          </a>{" "}
          website.
        </p>
      </div>
      <div className="col-sm-6">
        <Slider {...settings}>
          {PhotoSlides.map((p) => (
            <div className="col-sm-12">
              <a href={p.image}>
                <img className="d-block w-100" src={p.image} alt={p.caption} />
              </a>
              <p className="text-center strong">{p.caption}</p>
            </div>
          ))}
        </Slider>
      </div>
    </Section>
  );
}

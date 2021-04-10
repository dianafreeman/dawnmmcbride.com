import React from "react";
const settings = {
  lazyLoad: "ondemand",
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  margin: 3,
  prevArrow: (() => (
    <button className="nav-btn nav-prev btn">
      <i className="fas fa-angle-left"></i>
    </button>
  ))(),
  nextArrow: (() => (
    <button className="nav-btn nav-next btn">
      <i className="fas fa-angle-right"></i>
    </button>
  ))(),
  responsive: [
    {
      breakpoint: 996,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 568,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
  ],
};

export default settings

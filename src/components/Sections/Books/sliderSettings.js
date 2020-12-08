import React from "react";
export default {
  lazyLoad: "ondemand",
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  margin: 3,
  prevArrow: (() => (
    <button class="nav-btn nav-prev btn">
      <i class="fas fa-angle-left"></i>
    </button>
  ))(),
  nextArrow: (() => (
    <button class="nav-btn nav-next btn">
      <i class="fas fa-angle-right"></i>
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

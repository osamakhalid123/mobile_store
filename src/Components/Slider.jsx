import "../Styles/Slider.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useContext } from "react";

import ProductsContext from "../Context_Api/Context";
import Slider from "react-slick";

function HomeSlider() {
  const { SliderImages } = useContext(ProductsContext);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div>
      <Slider className="slide" {...settings}>
        {SliderImages.map((image) => {
          return (
            <div key={image.id}>
              <img src={image.img} alt="img" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default HomeSlider;

import "../Styles/Slider.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Styles/ProductsSlider.scss";

import React, { useContext } from "react";

import { Link } from "react-router-dom";
import ProductsContext from "../Context_Api/Context";
import Slider from "react-slick";

function ProductsSlider() {
  const { products } = useContext(ProductsContext);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 785,
        settings: {
          dots: true,
          infinite: true,
          speed: 600,
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          rows: 2,
        },
      },
    ],
  };

  return (
    <Slider className="products_slide" {...settings}>
      {products.map((product) => {
        return (
          <div className="product" key={product.id}>
            <Link to={`/${product.id}`}>
              <img src={product.img[0]} alt="img" />
            </Link>
            <div className="Products_details">
              <p className="name">{product.name}</p>
              <div className="prices">
                <p className="discount">${product.priceAfterdiscount}.00</p>
                <p className="price">${product.price}.00</p>
              </div>
              {product.inStock > 0 ? (
                <p className="inStock">In Stock </p>
              ) : (
                <p className="outStock">Out of Stock </p>
              )}
            </div>
          </div>
        );
      })}
    </Slider>
  );
}

export default ProductsSlider;

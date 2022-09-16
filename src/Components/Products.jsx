import "../Styles/Slider.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Styles/Products.scss";

import ProductsSlider from "./ProductsSlider";
import React from "react";

function Products() {
  return (
    <div className="products_container">
      <h2 className="header">Explore Products</h2>

      <div className="products">
        <ProductsSlider />
      </div>
    </div>
  );
}

export default Products;

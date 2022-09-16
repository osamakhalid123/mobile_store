import React, { createContext, useEffect, useState } from "react";

import axios from "axios";

const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const [products, setproducts] = useState([]);
  const [SliderImages, setSliderImages] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      await axios
        .get("https://63189f2cf6b281877c71eab0.mockapi.io/products")
        .then((res) => {
          let response = res.data;
          setproducts(response);
        })
        .catch(console.error);
    };

    fetchProducts();

    const fetchImages = async () => {
      await axios
        .get("https://63189f2cf6b281877c71eab0.mockapi.io/slider")
        .then((res) => {
          let response = res.data;
          setSliderImages(response);
        })
        .catch(console.error);
    };

    fetchImages();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
        SliderImages,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsContext;

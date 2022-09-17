import "../Styles/ProductDetails.scss";

import React, { useContext, useState } from "react";

import ProductsContext from "../Context_Api/Context";
import ProductsSlider from "./ProductsSlider";
import StarsRating from "stars-rating";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const [quantity, setquantity] = useState(1);
  const [heartColor, setheartColor] = useState(false);
  const { productId } = useParams();
  const { products } = useContext(ProductsContext);
  const thisProduct = products.find((product) => {
    return product.id == productId;
  });

  const Heartcolor = () => {
    setheartColor(!heartColor);
  };
  const Increasequantity = () => {
    setquantity(quantity + 1);
  };
  const Decreasequantity = () => {
    if (quantity <= 1) {
    } else {
      setquantity(quantity - 1);
    }
  };

  return (
    <>
      <div className="Details_container">
        <div className="Left_Section">
          <div className="side_images_container">
            {thisProduct.img.map((image) => {
              return <img className="side_images" src={image} alt="" />;
            })}
          </div>
          <div className="main_image">
            <img src={thisProduct.img[0]} alt="" />
          </div>
        </div>
        <div className="Right_Section">
          <div className="Block">
            <div>
              <p className="Brand">APPLE</p>
              <h3 className="Name">{thisProduct.name}</h3>
              <div className="Rating">
                <StarsRating
                  count={5}
                  size={28}
                  color2={"#ffd700"}
                  value={thisProduct.numberOfStars}
                  edit={false}
                />
                <p className="Reviews">
                  ( {thisProduct.numberOfReviews} Reviews)
                </p>
              </div>

              <p className={thisProduct.inStock > 0 ? "PriceIn" : "PriceOut"}>
                ${thisProduct.price}
              </p>
            </div>
            <div onClick={() => Heartcolor()} className="heart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g id="heart" transform="translate(-236 -188)">
                  <path
                    id="Vector"
                    d="M10.62,17.71a2.181,2.181,0,0,1-1.24,0C6.48,16.72,0,12.59,0,5.59A5.574,5.574,0,0,1,5.56,0,5.515,5.515,0,0,1,10,2.24,5.547,5.547,0,0,1,20,5.59C20,12.59,13.52,16.72,10.62,17.71Z"
                    transform="translate(238 191.1)"
                    fill={heartColor ? "#BE0F0F" : "#FFFFFF"}
                    stroke={heartColor ? "#BE0F0F" : "#888"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                  <path
                    id="Vector-2"
                    data-name="Vector"
                    d="M0,0H24V24H0Z"
                    transform="translate(236 188)"
                    fill="none"
                    opacity="0"
                  />
                </g>
              </svg>
            </div>
          </div>
          {thisProduct.inStock > 0 ? (
            <p className="inStock">In Stock </p>
          ) : (
            <p className="outStock">Out of Stock </p>
          )}

          <div className="quantity">
            <button onClick={() => Increasequantity()} className="plus">
              +
            </button>
            <p className="Qnumber">{quantity}</p>
            <button onClick={() => Decreasequantity()} className="minus">
              -
            </button>
          </div>
          <div className="Bay">
            <p className="fullPrice">fullPrice</p>
            <p className="Installments">Installments</p>
          </div>
          <div className="Bank">
            <img src="/Assets/20170616022541!CIB_Logo.png" alt="" />
            <img src="/Assets/20170616022541!CIB_Logo.png" alt="" />
            <img src="/Assets/20170616022541!CIB_Logo.png" alt="" />
            <img src="/Assets/20170616022541!CIB_Logo.png" alt="" />
          </div>
          <div className="Memory">
            <h3>Memoery</h3>
            <div className="options">
              <div className="option">
                <p>128GB</p>
                <p>$999.00</p>
              </div>
              <div className="option">
                <p>256GB</p>
                <p>$999.00</p>
              </div>
              <div className="option">
                <p>512GB</p>
                <p>$999.00</p>
              </div>
              <div className="option">
                <p>1TB</p>
                <p>$999.00</p>
              </div>
            </div>
          </div>
          <div className="color">
            <h3>Color</h3>

            <div className="colors">
              <div className="silver">
                <p>Silver</p>
                <span></span>
              </div>
              <div className="blue">
                <p>Sierra Blue</p>
                <span></span>
              </div>
            </div>
          </div>
          <div className="insurance">
            <h3>Insurance</h3>
            <div className="years">
              <div className="one_year">
                <p>1 year</p>
                <p className="price">$99.00</p>
              </div>
              <div className="two_year">
                <p>2 year</p>
                <p className="price">$159.00</p>
              </div>
            </div>
          </div>
          <div className="purchase">
            <button
              className={thisProduct.inStock > 0 ? "purchaseIn" : "purchaseOut"}
            >
              Add to cart
            </button>
          </div>
          <span className="line"></span>

          <div className="shipping">
            <img src="/Assets/vuesax-linear-group.png" alt="" />
            <p>Free shipping, arrives by Tue, Nov 23</p>
          </div>
          <div className="return">
            <img src="/Assets/vuesax-linear-convert-3d-cube.png" alt="" />
            <p>Free 10-day return window starts Dec 26th Details</p>
          </div>
        </div>
      </div>
      <div className="Slider_container">
        <ProductsSlider />
      </div>
    </>
  );
}

export default ProductDetails;

import "../Styles/NavBar.scss";

import React, { useState } from "react";

import { Link } from "react-router-dom";

function NavBar() {
  const [ShowMobile, SetShowMobile] = useState(false);

  const HandleView = () => {
    SetShowMobile(!ShowMobile);
  };
  return (
    <div className="nav_container">
      <Link to="/">
        <div className="logo">
          <img src="/Assets/Group 2925.png" alt="apple" />
        </div>
      </Link>

      <div className={ShowMobile ? "nav_items_mobile" : "nav_items"}>
        <ul className={ShowMobile ? "nav_items_ul_mobile" : "nav_items_ul"}>
          <li>Mac</li>
          <li>iPad</li>
          <li>iPhone</li>
          <li>Watch</li>
          <li>TV</li>
          <li>Accessories</li>
          <li>Offers</li>
          <span></span>
          <li>Support</li>
          <li>Services</li>
          <li>Loction</li>
        </ul>
      </div>
      <div className={"nav_icons"}>
        <img src="/Assets/vuesax-linear-search-normal.png" alt="Search" />
        <img src="/Assets/vuesax-linear-profile.png" alt="profile" />
        <img src="/Assets/vuesax-linear-bag-2.png" alt="bag" />
      </div>
      <div className="mobile_nav_menu" onClick={HandleView}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <g
            id="vuesax_linear_menu"
            data-name="vuesax/linear/menu"
            transform="translate(-684 -380)"
          >
            <g id="menu">
              <path
                id="Vector"
                d="M0,0H18"
                transform="translate(687 387)"
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeWidth="1.5"
              />
              <path
                id="Vector-2"
                data-name="Vector"
                d="M0,0H18"
                transform="translate(687 392)"
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeWidth="1.5"
              />
              <path
                id="Vector-3"
                data-name="Vector"
                d="M0,0H18"
                transform="translate(687 397)"
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeWidth="1.5"
              />
              <path
                id="Vector-4"
                data-name="Vector"
                d="M0,0H24V24H0Z"
                transform="translate(684 380)"
                fill="none"
                opacity="0"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default NavBar;

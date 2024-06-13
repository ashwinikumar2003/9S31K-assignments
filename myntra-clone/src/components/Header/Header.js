import React from 'react';
import './Header.css';
import { IoSearchOutline } from "react-icons/io5";
import { CiShoppingCart, CiUser, CiHeart } from "react-icons/ci";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src="https://cdn.iconscout.com/icon/free/png-256/free-myntra-2709168-2249158.png?f=webp" alt="Myntra Logo" />
      </div>
      <nav className="header__nav">
        <ul>
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
          <li>Home & Living</li>
          <li>Beauty</li>
          <li>Studio</li>
        </ul>
      </nav>
      <div className="header__search">
        <IoSearchOutline/>
        <input type="text" placeholder="Search for products, brands and more" />
      </div>
      <div className="header__icons">
        <div>
        <CiUser style={{height:30, width:30}}/>
        Profile
        </div>
        <div>
        <CiHeart style={{height:30, width:30}}/>
        Wishlist
        </div>
        <div>
        <CiShoppingCart style={{height:30, width:30}}/>
        Bag
        </div>
      </div>
    </header>
  );
};

export default Header;

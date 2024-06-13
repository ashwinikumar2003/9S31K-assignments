import React from 'react';
import './Footer.css';
import { AiFillFacebook, AiOutlineTwitter, AiFillYoutube, AiFillInstagram} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__sections">
        <div>
          <h4>Online Shopping</h4>
          <ul>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Home & Living</li>
            <li>Beauty</li>
            <li>Gift Cards</li>
            <li>Myntra Insider</li>
          </ul>
        </div>
        <div>
          <h4>Customer Policies</h4>
          <ul>
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>T&C</li>
            <li>Terms Of Use</li>
            <li>Track Orders</li>
            <li>Shipping</li>
            <li>Cancellation</li>
            <li>Returns</li>
            <li>Privacy policy</li>
            <li>Grievance Officer</li>
          </ul>
        </div>
        <div>
          <h4>Experience Myntra App on Mobile</h4>
          <img src="https://www.shutterstock.com/image-vector/ukraine-kropyvnytskyi-april-26-2023-260nw-2293917457.jpg" alt="App Store" style={{width:300, height:75}}/>
        
          <h4>Keep In Touch</h4>
          <div className="footer__social-icons">
            <AiFillFacebook style={{height:30, width:30, color:'#282c3f'}}/>
            <AiOutlineTwitter style={{height:30, width:30, color:'#282c3f'}}/>
            <AiFillYoutube style={{height:30, width:30, color:'#282c3f'}}/>
            <AiFillInstagram style={{height:30, width:30, color:'#282c3f'}}/>
          </div>
          </div>
          <div>
          <h4>100% ORIGINAL</h4>
          <p>guarantee for all products at myntra.com</p>
        
          <h4>Return within 14 days</h4>
          <p>of receiving your order</p>
        </div>
      </div>
      <div className="footer__popular-searches">
        <p>POPULAR SEARCHES</p>
        <ul>
          <li>Makeup</li>
          <li>Dresses</li>
          <li>T-Shirts</li>
          <li>Sandals</li>
          <li>Blazers</li>
          <li>Headphones</li>
          <li>Sport Shoes</li>
          <li>Ladies Watches</li>
          <li>Handbags</li>
          <li>Smart Watches</li>
          <li>Titan Watches</li>
          <li>Wallets</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

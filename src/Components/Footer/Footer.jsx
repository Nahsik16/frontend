import React from 'react'
import './Footer.css'
import footer_logo from "../assets/logo_big.png"
import whatsapp from "../assets/whatsapp_icon.png"
import insta from  "../assets/instagram_icon.png"
import pintester from "../assets/pintester_icon.png"

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={footer_logo} alt="" />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat ad ab incidunt rerum soluta doloremque esse, nisi delectus tenetur quam inventore, itaque dignissimos officia unde mollitia earum, iusto molestiae dolorem?</p>
          <div className="footer-social-icons">
            <img src={whatsapp} alt="" />
            <img src={insta} alt="" />
            <img src={pintester} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>SHOP</li>
            <li>ABOUT</li>
            <li>OFFICES</li>
            <li>DELIVERY</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>CONTACT US</h2>
          <ul>
            <li>+1-289-567-6679</li>
            <li>contactus@clothes.org</li>
          </ul>
        </div>
      </div>
      <p className="footer-copyright">Copyright 2024 @ Clothes = All Right Reserved.

      </p>
    </div>
  )
}

export default Footer
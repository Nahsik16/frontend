import React from 'react'
import exclusive_image from "../assets/exclusive_image.png"
import './Offers.css'
const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>EXCLUSIVE</h1>
        <h1>OFFER FOR YOU</h1>
        <p>ONLY ON BESTSELLER PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt=''/>
        </div>
      
    </div>
  )
}

export default Offers

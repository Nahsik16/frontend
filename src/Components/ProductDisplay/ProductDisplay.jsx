/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import './ProductDisplay.css'
import star_icon from '../assets/star_icon.png'
import star_dull_icon from '../assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'
const ProductDisplay = (props) => {
  const {product}=props;
  const [activeSize,setActiveSize]=useState('M');
  const handleSize=(size)=>{
    setActiveSize(size);
  }

  const { cartItems, setcartItems,addtocart,removefromcart}=useContext(ShopContext)
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img src={product.image} alt="" className="productdisplay-main-img" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-prices-old">
            ₹{product.old_price *10}
          </div>
          <div className="productdisplay-right-prices-new">
            ₹{product.new_price *10}
          </div>
        </div>
        <div className="productdisplay-right-description">
          <h3>Description</h3>
          <p>Lorem ipsum dolor sit amet consectetur</p>
        </div>
        <div className="productdisplay-right-size">
          <h3>Size</h3>
          <div className="productdisplay-right-sizes">
            {['S','M','L','XL','XXL'].map((size)=>(
              <div key={size} className={`size-option ${activeSize===size? 'active':''}`}
               onClick={()=> handleSize(size)}>
              {size}
            </div>))}
            {/* <div >S</div>
            <div >M</div>
            <div >L</div>
            <div >XL</div>
            <div >XXL</div> */}
          </div>
        </div>
        <div className="quantity-addtocart">
        <button onClick={()=>{addtocart(product.id)}}>ADD TO CART</button>
        
        </div>
        <p className='productdisplay-right-category'><span>Category:</span>Women ,T-Shirt,Crop Top</p>
        <p className='productdisplay-right-category'><span>Tags:</span>Mordern ,Latest</p>
        
      </div>
    </div>
  )
}

export default ProductDisplay
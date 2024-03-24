import React from 'react'
import './offers.css'
import exclusive_image from '../Assets/exclusive_image.png'
import hero_image2 from "../Assets/shopping.webp"
const Offers = () => {
    return (
        <div className='offers'>
            <div className="offers-right">
                <img src={hero_image2} alt="" />
            </div>
            <div className="offers-left">
                <h1>Exclusive</h1>
                <h1>Offers For You</h1>
                <p>ONLY ON BEST SELLERS PRODUCT</p>
                <button>Check Now</button>
            </div>


        </div>
    )
}

export default Offers

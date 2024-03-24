import React, { useEffect } from 'react'
import './Popular.css'
// import data_product from '../Assets/data'
import Item from '../Item/Item'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Popular = () => {
    const [popularProducts, setPopularProduct] = useState([])
    useEffect(() => {
        fetch('https://shopper-8qol.onrender.com/popularinwomen')
            .then((response) => response.json())
            .then((data) => setPopularProduct(data));
    }, [])


    return (
        <div className='popular'>
            <h1>POPULAR IN WOMEN</h1>
            <hr />
            <div className="popular-item  mar">
                {popularProducts.map((item, i) => {
                    let image = <img src={item.image} alt="" />
                    // Include the image variable here
                    return (
                        <div className='return'>
                            <Link to={`product/${item.id}`}>{image}</Link>
                            <Link to={`product/${item.id}`} style={{ textDecoration: "none" }}><Item key={i} id={item.id} name={item.name} new_price={<p style={{ color: "#841fff" }}><b> Price :₹{item.new_price}</b></p>} old_price={<p>Old price :₹{item.old_price} </p>} /></Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Popular

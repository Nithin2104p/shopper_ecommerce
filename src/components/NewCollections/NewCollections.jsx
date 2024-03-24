import React, { useEffect, useState } from 'react'
import './NewCollections.css'
// import new_collections from '../Assets/new_collections'
import Item from '../Item/Item'
import { Link } from 'react-router-dom'

const NewCollections = () => {
    const [new_collections, setnew_collection] = useState([])
    useEffect(() => {
        fetch('https://shopper-8qol.onrender.com/newcollections')
            .then((response) => response.json())
            .then((data) => setnew_collection(data));
    }, [])

    return (
        <div className='new-collections'>
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className="collections">
                {new_collections.map((item, i) => {
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

export default NewCollections

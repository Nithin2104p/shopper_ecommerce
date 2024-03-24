import React from 'react'
import './Footer.css'
import insta from '../Assets/instagram_icon.png'
import pinterest from '../Assets/pintester_icon.png'
import whatsapp from '../Assets/whatsapp_icon.png'
import footerlogo from '../Assets/ecommerce3.webp'
import logo from '../Assets/logo_big.png'
const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img className='shopper' id='footer' src={footerlogo} alt="" />
                <p>shopper</p>
                <ul className='footer-links'>
                    <li>NIVI</li>
                    <li>aboutUs</li>
                    <li>PortFolio</li>
                    <li>contact</li>
                </ul>


            </div>

            <div className="footer-copyright">
                <hr />
                <p>copyright @ 2024 - All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer

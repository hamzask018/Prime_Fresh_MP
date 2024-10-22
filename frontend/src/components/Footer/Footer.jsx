import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
         <div className="footer-content">
            <div className="footer-content-left">
               <img src={assets.logo} alt="" />
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, consequatur perferendis, amet numquam ducimus dolores aperiam dignissimos exercitationem suscipit doloremque temporibus veritatis, alias facere aliquam porro delectus quas? Quibusdam voluptatibus provident reiciendis atque laborum.</p>
               <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
               </div>
            </div>
            <div className='footer-content-center'>
                   <h2>Company</h2>
                   <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                   </ul>
            </div>
            <div className='footer-content-right'>
                  <h2>GET IN Touch</h2>
                  <ul>
                    <li>+91 7559111595</li>
                    <li>alex1mike786@gmail.com</li>
                  </ul>
            </div>
         </div>
         <hr />
         <p className="footer-copyright">
            Copyright 2024 &copy; Vanguards - All Right Reserved
         </p>
    </div>
  )
}

export default Footer

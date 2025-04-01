import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div className='banner'>
          <div className='left'>Tha Don Car Rentals</div>
          <div className='right'>
            <p>Bideford, EX391PS, England</p>
            <p>Open: 08:00 AM - 6:00 PM</p>
          </div>
        </div>
        <div className='banner'>
          <div className='left'>
            <p>Copyright © 2025 Tha Don. All Rights Reserved</p>
          </div>
          <div className='right'>
          <p>
            <a href="https://www.linkedin.com/in/tafadzwa-munyuki-6a225155/" target="_blank" rel="noopener noreferrer">
               <FaLinkedin size={30} className="footer" />
            </a>

            <a href="https://www.github.com/tafadzwamunyuki" target="_blank" rel="noopener noreferrer">
                <FaGithub size={30} className="footer"/>
            </a>

            <a href="https://www.facebook.com/tafadzwa.munyuki" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={30} className="footer" />
            </a>
                   
            <a href="https://www.x.com/tafadzwa1twit" target="_blank" rel="noopener noreferrer">
                <FaXTwitter size={30} className="footer" />
            </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

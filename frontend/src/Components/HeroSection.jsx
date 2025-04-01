import React from 'react'
import Navbar from "./Navbar"

const HeroSection = () => {
  return (
    <section className='heroSection' id='heroSection'>
        <Navbar />
      <div className='container'>
        <div className='banner'>
            <div className='largeBox'><h1 className='title'>Supreme</h1></div>
            <div className='combined_boxes'>
                <div className='imageBox'>
                    <img src='/rent_a_car.jpg' alt='hero1' />
                </div>
                <div className='textAndLogo'>
                    <div className="textWithSvg">
                        <h1 className='title'>Cars</h1>
                        <h1 className='title dishes_title'>Available</h1>
                        <img src='/threelines.svg' alt='three' />
                    </div>
                </div>
            </div>
        </div>
        <div className='banner'>
            <div className='imageBox'>
                <img src='/car_rental.jpg' alt='' />
            </div>
            <h1 className='title dishes_title'>Available</h1>
        </div>
      </div>

    </section>
  )
}

export default HeroSection

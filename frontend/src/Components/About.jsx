import React from 'react'

const About = () => {
  return (
    <section className='about' id='about'>
      <div className='container'>
        <div className='banner'>
          <div className='top'>
            <h1 className='heading'>About Us</h1>
            <p>We Have The Drive And Passion To Get You To Your Next Destination!</p>
            <br />
          </div>
          <p className='mid'>
            At <b>Tha Don Car Rental</b>, we are committed to providing a seamless and hassle-free car rental experience. With a fleet of well-maintained vehicles, competitive pricing, and exceptional customer service, we ensure that you get the best value for your money. Whether you need a car for a business trip, vacation, or daily commute, our easy booking process and swift response time make renting a car simple and convenient. Your journey starts with us—where reliability meets affordability.
          </p>
        </div>
        <div className='banner'>
          <img src="/about.png" alt='' />
        </div>
      </div>
    </section>
  )
}

export default About

import React from 'react'
import { data } from "../restApi.json"

const Menu = () => {
  return (
    <section className='menu'>
      <div className='container'>
        <div className='heading_section'>
          <h1 className='heading'>Cars for Hire: Reliable, Affordable, and Ready for Your Journey</h1>
          <p>Discover a wide selection of well-maintained vehicles tailored to suit your travel needs. Whether you're looking for a compact car for city drives, a luxury ride for special occasions, or a spacious SUV for family trips, we have the perfect option for you. With flexible rental plans, competitive pricing, and exceptional service, hiring a car has never been easier. Book with us today and enjoy a smooth, stress-free ride!</p>
        </div>
        <div className='dishes_container'>
          {data[0].rentalCars.map((element) => {
            return (
              <div className='card' key={element.id}>
                <img src={element.image} alt={element.title} />
                <h3>{element.title}</h3>
                <button>{element.category}</button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Menu

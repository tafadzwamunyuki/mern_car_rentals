import React from 'react'
import { data } from "../restApi.json"

const Services = () => {
  return (
    <section className='qualities' id='qualities'>
      <div className='container'>
        {data[0].exceptionalService.map((element) => {
          return (
            <div className='card' key={element.id}>
              <img src={element.image} alt={element.title} />
              <p>{element.title}</p>
              <p className='description'>{element.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Services

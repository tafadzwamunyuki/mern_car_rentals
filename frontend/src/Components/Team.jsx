import React from 'react'
import { data } from "../restApi.json"

const Team = () => {
  return (
    <section className='team' id='team'>
      <div className='container'>
        <div className='heading_section'>
          <h1 className='heading'>Personnel Behind Our Success</h1>
          <p>At Tha Don Car Rental, our team is committed to delivering top-notch service and ensuring a seamless car rental experience for every customer. With a passion for excellence and a focus on customer satisfaction, our professionals work tirelessly to provide reliable vehicles, swift assistance, and personalized support. From our friendly customer service representatives to our expert maintenance crew, we are here to make your journey smooth, safe, and enjoyable.</p>
        </div>
        <div className='team_container'>
          {
            data[0].team.map((element) => {
              return (
                <div className='card' key={element.id}>
                    <img src={element.image} alt={element.name} />
                    <h3>{element.name}</h3>
                    <p>{element.designation}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Team

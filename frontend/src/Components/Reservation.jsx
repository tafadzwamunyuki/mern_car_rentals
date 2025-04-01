import React, { useState } from 'react'
import axios from "axios"
import { HiOutlineArrowRight } from "react-icons/hi"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

const Reservation = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState()
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")

  const navigate = useNavigate()
  const handleReservation = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post("http://localhost:4000/api/v1/reservation/send",
        {firstName, lastName, email, phone, date, time},
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      )

      toast.success(data.message)
      setFirstName("")
      setLastName("")
      setEmail("")
      setPhone("")
      setTime("")
      setDate("")
      navigate("/success")

    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  return (
    <section className='reservation' id='reservation'>
      <div className='container'>
        <div className='banner'>
          <img src="/A6.jpg" alt='' />
        </div>
        <div className='banner'>
          <div className='reservation_form_box'>
            <h1>Reserve A Car</h1>
            <p>Contact Tha Don Car Rentals: <b>+447425363721</b></p>
              <form>
                <div>
                  <input
                    type='text'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder='Enter First Name'
                  />

                <input
                  type='text'
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder='Enter Last Name'
                />
                </div>

                <div>
                <input
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Enter Email Address'
                />
                <input
                  type='number'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder='Enter Phone Number'
                />               
                </div>

                <div>
                <input
                  type='date'
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  placeholder='Enter Date'
                />

                <input
                  type='time'
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  placeholder='Enter Time'
                />
                </div>

                <button type="submit" onClick={handleReservation}>
                  Rent This Car{" "}
                  <span>
                    <HiOutlineArrowRight />
                  </span>
                </button>
              </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reservation

import React from 'react'
import { Link } from "react-router-dom"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"

const NotFound = () => {
  return (
    <>
    <section className='notFound'>
      <div className='container'>
        <img src="/notFound.svg" alt='' />
        <h1>OOOPS. LOOKING FOR SOMETHING?</h1>
        <p>Sorry but you are lost</p>
        <Link to={"/"}>
        Go To Homepage{" "}
        <span>
          <HiOutlineArrowNarrowRight />
        </span>
        </Link>
      </div>
    </section>
    </>
  )
}

export default NotFound

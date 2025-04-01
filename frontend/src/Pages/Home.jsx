import React from 'react'
import HeroSection from '../Components/HeroSection'
import About from '../Components/About'
import Menu from '../Components/Menu'
import Services from '../Components/Services'
import Team from '../Components/Team'
import WhoWeAre from '../Components/WhoWeAre'
import Reservation from '../Components/Reservation'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <>
    <HeroSection />
    <About />
    <Menu />
    <Services />
    <Team />
    <WhoWeAre />
    <Reservation />
    <Footer />
    </>
  )
}

export default Home

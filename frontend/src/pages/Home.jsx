import React from 'react'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import About from '../components/About'
import Services from '../components/Services'

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Footer />
    </div>
  )
}

export default Home
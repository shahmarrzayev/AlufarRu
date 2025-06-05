import React from 'react'
import Banner from './banner/Banner'
import About from './about/About'
import OurCompany from './ourCompany/OurCompany'
import Projects from './projects/Projects'
import HomeAccardion from './homeAccardion/HomeAccardion'
import Teammate from './Teammate/Teammate'
import Contact from './homeContact/Contact'
import Partners from './partners/Partners'

const Home = () => {
  return (
    <main>
        <Banner/>
        <About/>
        <OurCompany/>
        <Partners/>
        <Projects/>
        <HomeAccardion/>
        {/* <Teammate/> */}
        <Contact/>
    </main>
  )
}

export default Home
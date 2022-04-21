import React from 'react'
// import Navbar1 from './components/TopNavbar/Navbar'
import Hero from './Hero/Hero'
import Temp from './TemplateShowCase/Temp'
import Carousal from './Carousal/Carousal'
// import { Routes, Route } from "react-router-dom";
import Contact from './ContactUsPage/Contact'
import  Card  from './PricingCards/Card'
import  Banner  from './SmallBanner/Banner'
// import About from './components/AboutUs/About';
function Home() {
  return (
    <>
<Hero/>
<Banner/>
    <Temp/>
    <div className='carousalDiv ' >
    <Carousal/>
    </div>
    <Card/>
    <Contact/>
    </>
  )
}

export default Home
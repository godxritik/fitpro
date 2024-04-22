import React from 'react'
import Hero_img from "../../assets/hero img-1.jpg"
import Cards from '../Cards/Cards'
import Navbar from '../Navbar/Navbar'
import Accordion from '../Accordion/Accordion'
import Footer from '../Footer/Footer'
import Pricing from '../Pricing/Pricing'

function Hero() {
  return (
    <div>
      <Navbar/>

      <section>
  <div className=" px-4 py-8 sm:px-6 sm:py-12 lg:px-16 lg:py-16 bg-black min-h-[80vh] ">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
        <img
          alt=""
          src={Hero_img}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="lg:py-24">
        <div className='flex flex-col gap-3'>
        <h2 className="text-4xl font-bold sm:text-6xl text-white  ">UNLEASH</h2>
        <h2 className="text-4xl font-bold sm:text-6xl text-white  ">the beast inside you</h2>
        </div>

        <p className="mt-4 text-gray-500">
        "Transform Your Body, Elevate Your Life: Unleash Your Potential with Our Fitness Revolution!"
        </p>

        <a
          href="#"
          className="mt-8 inline-block rounded bg-black border-white border px-12 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-black focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Get Started Today
        </a>
      </div>
    </div>
  </div>
      </section>

      <Cards/>
      <Pricing/>
      <Accordion/>
      <Footer/>

    </div>
  )
}

export default Hero

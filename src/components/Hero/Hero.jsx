import React from 'react'
import wallpaper from '../../assets/wallper.png';

const Hero = () => {
  return (
    <div className='relative'>
      <div>
        <img src={wallpaper} alt="main" />
      </div>
      <section className='absolute p-2 bg-[#FFF3E3] md:p-7 rounded top-5 md:top-10 lg:p-14 lg:top-36 lg:right-36 lg:w-[550px] md:right-5 right-3 w-[250px] text-sm md:w-[400px] md:text-2xl'>
        <p className='font-bold'>New Arrivals</p>
        <h2 className='font-black text-xl text-[#B88E2F] md:text-4xl'>Discover Our <br/>
        Our Collection.</h2>
        <p className='text-xs my-1 md:my-5 lg:text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
        <button className='p-2 md:p-5 bg-[#B88E2F] text-white font-bold'>Buy Now</button>
      </section>
    </div>
  )
}

export default Hero

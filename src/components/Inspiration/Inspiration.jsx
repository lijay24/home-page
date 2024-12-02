import React from 'react'
import photo1 from '../../assets/page1.png';
import photo2 from '../../assets/page2.png';
import photo3 from '../../assets/page3.png';

import { Navigation, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
 


const Inspiration = () => {
  return (
<div className='bg-[#FFF3E3] md:flex-row gap-2 flex flex-col items-center w-full'>
<section className='p-5  md:p-5 rounded top-5 md:top-10 lg:p-14  lg:right-36 lg:w-[550px] md:left-4 left-3 w-[250px] text-sm md:w-[400px] md:text-2xl'>
        <p className='font-bold'></p>
        <h2 className='font-black text-xl  md:text-4xl'>50+ Beautiful rooms <br />
        inspiration</h2>
        <p className='text-xs my-1 md:my-5 lg:text-lg'>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
        <button className='p-2 md:p-5 bg-[#B88E2F] text-white font-bold'>Explore More</button>
      </section>
      <section className='flex w-full overflow-hidden'>
      <Swiper
      
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={5}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
        <SwiperSlide>
        <div className='relative'>
          <img className='w-72' src={photo1} alt="" />
          <h5 className='absolute bottom-11 ml-20 bg-white w-[70%]  h-16 text-center font-light'>01 ---BED ROOM <br /><span className='font-black'> Inner Peace</span></h5>
        </div>
        </SwiperSlide>
        <SwiperSlide>
  <img className='w-64' src={photo2} alt="" />
        </SwiperSlide>

  <SwiperSlide>
  <img className='w-64' src={photo3} alt="" />
  </SwiperSlide>
  <SwiperSlide>
  <img className='w-64' src={photo2} alt="" />
  </SwiperSlide>
  <SwiperSlide>
  <img className='w-64' src={photo1} alt="" />
  </SwiperSlide>
  <SwiperSlide>
  <img className='w-64' src={photo2} alt="" />
  </SwiperSlide>
  <SwiperSlide>
  <img className='w-64' src={photo3} alt="" />
  </SwiperSlide>
  <SwiperSlide>
  <img className='w-64' src={photo3} alt="" />
  </SwiperSlide>
  </Swiper>
      </section>
</div>

  )
}

export default Inspiration

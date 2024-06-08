import React from 'react'
import  { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay,  } from 'swiper/modules';
import { sharxlar } from '../../Data';
const Sharx = () => {
  return (
    <>
        <section className='pb-20'>
            <div className="containerb">
              <h2 className='text-center md:text-4xl lg:text-6xl mb-20'>Что о нас говорят</h2>
            <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
       
        modules={[Autoplay, ]}
        className="mySwiper sharx "
      >
        {
            sharxlar.map((e)=>{
                return(

                    <SwiperSlide className=' px-12 sm:px-16 md:px-20 lg:px-28 py-8 md:py-12 ' key={e.id}>
                        <div className='flex items-center text-center md:text-start mb-7 lg:mb-16'>
                            <h3 className=' text-3xl xl:text-[40px] mr-4 '>{e.name}</h3>
                            <p className='hidden md:block'>{e.like}</p>
                        </div>
                        <p className=' text-sm md:text-base lg:text-xl xl:text-2xl text-center md:text-start lg:font-medium'>{e.sharx}</p>
                    </SwiperSlide>
                )
            })
        }

      </Swiper>
    </>
            </div>
        </section>
    </>
  )
}

export default Sharx
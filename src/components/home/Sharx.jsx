import React from 'react'
import  { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { sharxlar } from '../../Data';
const Sharx = () => {
  return (
    <>
        <section className='pb-20'>
            <div className="containerb">
            <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
       
        modules={[Autoplay, Pagination]}
        className="mySwiper "
      >
        {
            sharxlar.map((e)=>{
                return(

                    <SwiperSlide className='px-28 py-12' key={e.id}>
                        <div className='flex items-center mb-16'>
                            <h3 className='text-[40px] mr-4 '>{e.name}</h3>
                            <p>{e.like}</p>
                        </div>
                        <p className='text-2xl font-medium'>{e.sharx}</p>
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
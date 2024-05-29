import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import { Proects } from '../Data'

const Galareya = () => {
  return (
    <>
        <section className='py-10'>
            <div className="containerb">


<Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        modules={[ Autoplay,Pagination]}
        className="mySwiper"
      >
        {
            Proects.map((e)=>{
                return(
                    <SwiperSlide key={e.id}>
                        <img src={e.img} alt="" />
                    </SwiperSlide>
                )
            })
        }

      </Swiper>
            </div>
        </section>
    </>
  )
}

export default Galareya
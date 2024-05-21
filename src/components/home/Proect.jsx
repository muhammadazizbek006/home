// import React from 'react'
// // swiper
// import { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-fade';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';



// // import required modules
// import {Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
// import { swipers } from '../../Data';
// const Proect = () => {
//   return (
//     <>
//         <section className='py-20'>
//             <div className="containerb">
//                 <h2 className='text-6xl mb-14 '>Проекты и цены</h2>
//                 {/* swiper va malumot */}
//                 <div>
//                   {/* left */}
//                   <div>
//                   <>
//                     <Swiper
//                       spaceBetween={30}
//                       effect={'fade'}
//                       navigation={true}
//                       pagination={{
//                         clickable: true,
//                       }}
//                       autoplay={{
//                         delay: 2500,
//                         disableOnInteraction: false,
//                       }}
//                       modules={[Autoplay, EffectFade, Navigation, Pagination]}
//                       className="mySwiper "
//                     >
//                       {
//                         swipers.map((e)=>{
//                           return(
//                             <>
//                              <SwiperSlide className='flex justify-between' key={e.id} >
                              
//                               {/* left */}
//                               <img className='w-[835px] h-[607px] ' src={e.img} />
//                             </SwiperSlide>
//                                 {/* right */}
//                                 <div>
//                                    <h3 className='text-6xl mb-8'>{e.joylashuv}</h3>
//                                   <div>
//                                    <span>{e.maydoni}</span>
//                                     <span>{e.etaji}</span>                                            
//                                  </div>
//                                 </div>
                                       
//                             </>
                                      
//                           )
//                         })
//                       }
//                     </Swiper>
//                   </>
//                   </div>

//                 </div>
//             </div>
//         </section>
//     </>
//   )
// }

// export default Proect
import React from 'react'
import { useParams } from 'react-router-dom'
import { Proects } from '../../Data';
import Aloqa from '../home/Aloqa'
// img
import razmer from '../../imgs/loyihalar/razmer.svg'
import maydon from '../../imgs/loyihalar/maydon.svg'
import etaj from '../../imgs/loyihalar/etaj.svg'
import Galareya from '../../components/Galareya';

const ProectDetail = () => {
    const {title} = useParams();

    const Detail = Proects.filter((e) => e.title == title);
  return (
    <>
        <section className='py-16'>
            <div className="containerb">
                {
                    Detail.map((e)=>{
                        return(
                        <div>
                            <h3 className='text-6xl mb-10 text-center lg:text-start'>Проект:  {e.title}</h3>
                        </div>

                        )
                    })
                }
                {/* */}
            <ul className='mb-40 '>
                {
                    Detail.map((e)=>{
                        return(
                            <li className='flex flex-col items-center lg:items-start lg:flex-row  justify-between '>
                                {/* left */}
                                <div className='mb-8 lg:mb-0'>
                                    <img className=' lg:w-[500px] xl:w-[696px] lg:h-[700px] xl:h-[798px] rounded object-cover ' src={e.img} alt="" />
                                </div>
                                {/* right */}
                                <div className='flex flex-col justify-between'>
                                    {/* narx and sxema wrapper */}
                                   <div>
                                <div className='text-xl flex justify-end xl:justify-start space-x-4 lg:space-x-5 xl:space-x-11 mb-16'>
                                    {/* razmer */}
                                    <div  className='flex flex-col items-center' >
                                        <div className='bg-gren px-7 py-4 rounded'>
                                          <img  className='' src={razmer} alt="" />
                                        </div>
                                        <h4 className='text-center'>{e.razmer}</h4>
                                    </div>
                                      {/* etaj */}
                                      <div   className='flex flex-col items-center' >
                                        <div className='bg-gren px-7 py-4 rounded'>
                                          <img  className='' src={etaj} alt={e.title} />
                                        </div>
                                        <h4 className='text-center'>{e.etaji}</h4>
                                    </div>
                                      {/* maydoni */}
                                      <div   className='flex flex-col items-center' >
                                        <div className='bg-gren px-7 py-4 rounded'>
                                          <img  className='' src={maydon} alt="" />
                                        </div>
                                        <h4 className='text-center'>{e.maydoni}</h4>
                                    </div>
                                </div>
                                {/* narxlar */}

                                <ul className='flex flex-col space-y-5 mb-8 lg:mb-40'>
                                     {/* 1 */}
                                    <li className='flex items-center justify-evenly xl:justify-between py-5 border-y-2'>
                                            <p className='text-xl '>{e.sxema}</p>
                                            <p className='text-gren text-2xl sm:text-3xl lg:text-4xl xl:text-5xl'>{e.tugamagansxema }  руб .</p>
                                    </li>
                                  {/* 2 */}
                                   <li  className='flex items-center justify-evenly xl:justify-between py-5  border-y-2'>
                                            <p className='text-xl '>{e.sxema}</p>
                                            <p className='text-gren text-2xl sm:text-3xl lg:text-4xl xl:text-5xl'>{e.tugamagancounter} руб .</p>
                                    </li>
                                   {/* 3 */}
                                    <li  className='flex items-center justify-evenly xl:justify-between py-5  border-y-2'>
                                            <p className='text-xl '>{e.sxema}</p>
                                            <p className='text-gren text-2xl sm:text-3xl lg:text-4xl xl:text-5xl'>{e.tugatilgan}  руб .</p>
                                    </li>

                                </ul>

                                   </div>
                     
                                    <button className=' sm:px-14 xl:px-28 py-5   bg-gren text-white text-base lg:text-xl'>Оставить заявку на строительство</button>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>

            {/* o plan dom */}
            {
                Detail.map((e)=>{
                    return(
                        <div className='flex flex-col  items-center'>
                            <h2 className='text-6xl mb-20'>План дома</h2>
                            <img className='mb-10' src={e.reja} alt="" />

                        </div>

                    )
                })
            }

            
            </div>
        </section>
        <Galareya/>
        <Aloqa/>

    </>
  )
}

export default ProectDetail
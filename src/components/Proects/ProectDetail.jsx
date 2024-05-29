import React from 'react'
import { useParams } from 'react-router-dom'
import { Proects } from '../../Data';
import Aloqa from '../home/Aloqa'
// img
import razmer from '../../imgs/loyihalar/razmer.svg'
import maydon from '../../imgs/loyihalar/maydon.svg'
import etaj from '../../imgs/loyihalar/etaj.svg'

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
                            <h3 className='text-6xl mb-10'>Проект:  {e.title}</h3>
                        </div>

                        )
                    })
                }
                {/* */}
            <ul className='mb-40'>
                {
                    Detail.map((e)=>{
                        return(
                            <li className='flex justify-between '>
                                {/* left */}
                                <div>
                                    <img className='w-[826px] h-[819px] rounded object-cover ' src={e.img} alt="" />
                                </div>
                                {/* right */}
                                <div className='flex flex-col justify-between'>
                                    {/* narx and sxema wrapper */}
                                   <div>
                                <div className='text-xl flex space-x-11 mb-16'>
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

                                <ul className='flex flex-col space-y-5'>
                                     {/* 1 */}
                                    <li className='flex items-center justify-between py-5 border-y-2'>
                                            <p className='text-xl '>{e.sxema}</p>
                                            <p className='text-gren text-5xl'>{e.tugamagansxema }  руб .</p>
                                    </li>
                                  {/* 2 */}
                                   <li  className='flex items-center justify-between py-5  border-y-2'>
                                            <p className='text-xl '>{e.sxema}</p>
                                            <p className='text-gren text-5xl'>{e.tugamagancounter} руб .</p>
                                    </li>
                                   {/* 3 */}
                                    <li  className='flex items-center justify-between py-5  border-y-2'>
                                            <p className='text-xl '>{e.sxema}</p>
                                            <p className='text-gren text-5xl'>{e.tugatilgan}  руб .</p>
                                    </li>

                                </ul>

                                   </div>
                     
                                    <button className='px-28 py-5  bg-gren text-white text-xl'>Оставить заявку на строительство</button>
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
        <Aloqa/>
    </>
  )
}

export default ProectDetail
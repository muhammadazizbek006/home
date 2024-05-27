import React from 'react'
import { useParams } from 'react-router-dom'
import { Proects } from '../../Data';
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
                                    <img className='w-[826px] ' src={e.img} alt="" />
                                </div>
                                {/* right */}
                                <div className='text-xl flex space-x-11'>
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
    </>
  )
}

export default ProectDetail
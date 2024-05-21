import React from 'react'
import { Link } from 'react-router-dom'
import { loyihalar } from '../../Data'
// img

import next from '../../imgs/loyihalar/next.svg'
const Loyihalar = () => {
  return (
    <>
        <section className='py-20'>
            <div className="containerb">
                <h2 className='text-6xl mb-16'>Выбирайте более <br /> чем из 100 проектов</h2>

                {/* loyihalar */}
                <ul className='grid grid-cols-3 gap-10  i'>
                    {
                        loyihalar.map((e)=>{
                            return(
                                <li className={` w-[530px] h-[650px] rounded-2xl  `}
                                 style={{ backgroundImage: `url(${e.img})` }}>
                                    <Link to='/Proects'  className='flex flex-col justify-end h-full p-4  '>
                                        <h3 className='text-5xl text-white mb-9'>{e.title}</h3>
                                        <Link  to='/Proects' className='bg-gren py-3 px-7 rounded w-72 hover:opacity-90 duration-300 flex items-center '>
                                            <span className='text-xl text-white mr-3'>Смотреть проекты</span>
                                            <img src={next} alt={e.title} />
                                        </Link>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    </>
  )
}

export default Loyihalar
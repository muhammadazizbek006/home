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
                <ul className='grid grid-cols-3 gap-8'>
                    {
                        loyihalar.map((e)=>{
                            return(
                                <li className={` w-[530px] h-[650px] rounded-2xl ${e.img}`}>
                                    <Link className='flex flex-col  '>
                                        <h3>{e.title}</h3>
                                        <Link className='bg-gren py-3 px-7 rounded flex items-center '>
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
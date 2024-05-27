import React from 'react'
import { Kakrasniy } from '../../Data'

const KakrasniyUy = () => {
  return (
    <>
        <section>
            <div className="containerb">
                <h2 className='text-5xl mb-20'>Каркасные дома</h2>
                <ul className='space-y-9 '>
                    {
                        Kakrasniy.map((e)=>{
                            return(
                                <li key={e.id}>
                                    <p className='text-2xl'>{e.sharx}</p>
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

export default KakrasniyUy
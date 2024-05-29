import React from 'react'
import { Proects } from '../Data'

const Galareya = () => {
  return (
    <>
        <section>
            <div className="containerb">
                <ul className='grid grid-cols-3 gap-6'>
                    {
                        Proects.map((e)=>{
                            return(
                                <li key={e.id}>
                                    <img src={e.img} alt={e.title} />
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

export default Galareya
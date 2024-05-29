import React from 'react'
import KompaniyaXaida from '../components/home/KompaniyaXaqida'
import { banks } from '../Data'
const MijozlarUchunMalumot = () => {
  return (
    <>
      <section>
        <div className="">

          <h2 className='text-6xl font-medium mb-20 containerb'>Информация <br /> для заказчиков</h2>
          <KompaniyaXaida/>
          <div className='containerb pt-28 pb-10'>
            <h3 className='text-6xl mb-8'>Ипотека</h3>
            <p className='text-2xl max-w-[816px]'>Вы можете заказать строительство дома или бани в ипотеку. Мы сотрудничаем со следующими банками: Сбербанк, Росбанк, ДомРФ, Альфабанк. ВТБ, ПочтаБанк. Полные условия по ипотечным продуктам указаны на сайтах банков.</p>
          </div>
          <ul className='grid grid-cols-3  gap-x-6 gap-y-10 containerb'>
            {
              banks.map((e)=>{
                return(
                  <li className=' flex flex-col shadows       justify-between' key={e.id}>
                    <img className='object-cover h-56' src={e.img} alt="bank" />

                    <button className='px-44 py-4 bg-gren rounded-md text-xl text-white'>Условия банка</button>
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

export default MijozlarUchunMalumot
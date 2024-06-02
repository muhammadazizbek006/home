import React from 'react'
// data
import {haqida} from '../../Data'
const KompaniyaXaqida = () => {
  return (
    <>
        <section className='py-20 bg-black'>
            <div className="containerb w-[1651px] pt-20 pb-16 pl-20    rounded-2xl text-white">
                  <h2 className='text-6xl mb-14  '>О компании</h2>
                  {/* tepa */}
                  <div className=' flex-col flex  md:flex-row  justify-between mb-20'>
                    {/* left */}
                    <div className='text-xl lg:text-2xl md:max-w-[400px] lg:max-w-[555px] mb-8 md:mb-0 1300:max-w-[955px]'>
                      <p className='mb-12'>Наша компания занимается проектированием и строительством загородных домов, коттеджей и бань из профилированного бруса. Для сооружения всех конструкций мы используем профилированный брус — экологически чистый, натуральный строительный материал.</p>

                      <p>Мы располагаем большим арсеналом готовых проектов. С радостью вносим изменения в уже имеющийся проект. Если Вас не устроит наш вариант, специалисты нашей компании разработают индивидуальный проект специально для Вас. </p>
                    </div>
                    {/* right */}
                    <div className='mr-2 md:text-xl lg:text-2xl'>
                      <p className=' mb-10'><b className=' text-4xl lg:text-6xl'>более 100</b> <br /> проектов за все время</p>
                      <p className=''><b className='text-4xl lg:text-6xl'>более 550</b> <br /> семей доверили нам <br /> свой дом</p>

                    </div>
                  </div>
                  {/* past */}
                  <ul className='grid sm:grid-cols-2 gap-y-6 lg:gap-y-0  lg:grid-cols-3 gap-x-6'>
                    {
                      haqida.map((e)=>{
                        return(
                          <li key={e.id} className='text-white lg:w-[320px] xl:w-[404px] flex flex-col border-2 pl-12 pr-3 pt-16 border-gren hover:bg-gren  duration-500 rounded-2xl'>
                            <div >
                              <img className='p-4 bg-gren rounded-lg mb-8' src={e.img} alt={e.ustunlik} />
                            </div>
                            <div className=' max-w-80 '>
                              <h3 className=' md:text-xl xl:text-2xl mb-4 '>{e.ustunlik}</h3>
                              <p className=' md:text-base xl:text-xl mb-16'>{e.sharx}</p>
                            </div>
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

export default KompaniyaXaqida
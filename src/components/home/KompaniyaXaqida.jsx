import React from 'react'

const KompaniyaXaqida = () => {
  return (
    <>
        <section className='py-20'>
            <div className="containerb pt-20 pb-16 px-16  bg-black rounded-2xl text-white">
                  <h2 className='text-6xl mb-14  '>О компании</h2>
                  {/* tepa */}
                  <div className='flex justify-between mb-20'>
                    {/* left */}
                    <div className='text-2xl max-w-[955px]'>
                      <p className='mb-12'>Наша компания занимается проектированием и строительством загородных домов, коттеджей и бань из профилированного бруса. Для сооружения всех конструкций мы используем профилированный брус — экологически чистый, натуральный строительный материал.</p>

                      <p>Мы располагаем большим арсеналом готовых проектов. С радостью вносим изменения в уже имеющийся проект. Если Вас не устроит наш вариант, специалисты нашей компании разработают индивидуальный проект специально для Вас. </p>
                    </div>
                    {/* right */}
                    <div>
                      <p className='text-2xl mb-10'><b className='text-6xl'>более 100</b> <br /> проектов за все время</p>
                      <p className='text-2xl'><b className='text-6xl'>более 550</b> <br /> семей доверили нам <br /> свой дом</p>

                    </div>
                  </div>
                  {/* past */}
                  <ul>
                    
                  </ul>
            </div>
        </section>
    </>
  )
}

export default KompaniyaXaqida
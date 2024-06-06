import React from 'react'
// img
import whatsapp from '../../imgs/whatsapp.svg'
import telegram from '../../imgs/telegram.svg'
import tel from '../../imgs/phone.svg'

const Hero = () => {
  return (
    <>
        <section>
            <div className="containerb">
                {/* hero top */}
                <div className='flex justify-between mb-16'>
                    {/* left */}
                    <h2 className=' text-2xl lg:text-4xl xl:text-6xl'>Строим дома, в которых <br /> сбываются мечты</h2>
                    {/* right */}
                    <div className=' hidden lg:block max-w-[633px]'>
                        <p className=' text-xl xl:text-2xl'>Мы используем традиционные технологии каркасного домостроения, взятые от скандинавских стран в области строительства каркасных домов</p>
                    </div>
                </div>

                {/* hero */}
                <div className='bg-hero bg-full h-[300px] sm:h-[500px] md:h-[767px]  bg-no-repeat relative'>
                    {/* ilovalar */}
                    <div className='flex  flex-col items-center absolute bottom-12 right-5  '>
                        {/* whatsapp */}
                        <a className='bg-gren rounded-full p-2 hidden md:inline-block mb-3' href="https://wa.me/+998914750612">
                            <img src={whatsapp} alt="whatsapp" />
                        </a>
                        {/* telegram */}
                        <a className='bg-telegram rounded-full p-3 hidden md:inline-block mb-4'  href="https://t.me/Umarov_Dev">
                            <img src={telegram} alt="telegram" />
                        </a>
                        {/* telefon */}
                        <a className='bg-gren rounded-full p-4 hidden md:inline-block' href="tel:+998888361306">
                            <img src={tel} alt="telefon" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Hero

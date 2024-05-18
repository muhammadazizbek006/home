import React from 'react'

const Hero = () => {
  return (
    <>
        <section>
            <div className="containerb">
                {/* hero top */}
                    <div className='flex justify-between'>
                       {/* left */}
                       <h2 className='text-6xl'>Строим дома, в которых <br /> сбываются мечты</h2>
                        {/* right */}
                        <div className='max-w-[653px]'>
                            <p className='text-2xl'>Мы используем традиционные технологии каркасного домостроения, взятые от скандинавских стран в области строительства каркасных домов</p>
                        </div>
                    </div>
            </div>
        </section>
    </>
  )
}

export default Hero
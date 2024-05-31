import React from 'react'
import { Link } from 'react-router-dom'
// img

import logo from '../imgs/logo.svg'
import tel from '../imgs/tel.svg'
import hamburger from '../imgs/responsive/menyu.svg'
const Header = () => {
  return (
    <>
      <section className='pt-6 pb-20'>
        <div className="containerb flex justify-between items-center">
          {/* left */}
          <ul className='flex space-x-4 lg:space-x-6  xl:space-x-8 items-center text-base '>

            <li>
              <Link>Главная</Link>
            </li>
            
            <li>
              <Link>Проекты</Link>
            </li>
            
            <li className='hidden sm:block'>
              <Link to='/galareya'>Наши работы</Link>
            </li>
            
            <li  className='hidden lg:block'>
              <Link to='/MijozlarUchunMalumot'>Информация</Link>
            </li>
            
            <li className='hidden lg:block'>
              <Link to='/kontakt'>Контакты</Link>
            </li>
          
          </ul>
          {/* center logo */}
          <Link>
            <img className=' w-12 md:w-16 ' src={logo} alt="logo" />
          </Link>
          {/* right */}
          <div className='hidden md:block'>

          <div className='flex  items-center'>
            <a className='flex  items-center mr-7 ' href="tel:914750612">
              <img className='mr-4' src={tel} alt="phone" />
              <span className='text-base'>+7 (999) 000-00-00</span>
            </a>

              <button className='text-base text-white px-5 py-2 rounded-md bg-gren'>Рассчитать стоимость</button>
          </div>

          </div>

            <button className='block md:hidden'>
                <img src={hamburger} alt="" />
            </button>

        </div>
      </section>
    </>
  )
}

export default Header
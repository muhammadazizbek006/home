import React from 'react'
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";

import { Link } from 'react-router-dom'
// img

import logo from '../imgs/logo.svg'
import tel from '../imgs/tel.svg'
import hamburger from '../imgs/responsive/menyu.svg'
const Header = () => {
  const [openRight, setOpenRight] = React.useState(false);

  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);

  const Closedraw =()=>{
    setOpenRight(false)
  }
  return (
    <>
      <section className='pt-6 pb-20 relative'>
        <div className="containerb flex justify-between items-center">
          {/* left */}
          <ul className='flex space-x-4 lg:space-x-6  xl:space-x-8 items-center text-base '>

            <li className='hidden sm:block'>
              <Link>Главная</Link>
            </li>
            
            <li className='hidden sm:block'> 
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

            <button onClick={openDrawerRight} className='block md:hidden'>
                <img src={hamburger} alt="menu" />
            </button>

        </div>

        <Drawer
        placement="right"
        open={openRight}
        onClose={closeDrawerRight}
        className="fixed top-0 right-0 w-64 h-full z-50 px-6 bg-black text-white"
        overlayProps={{ className: "bg-black bg-opacity-0" }}
        transition={{ duration: 0.3 }}
      >
        <div className="mb-6 flex items-center justify-between     pr-4 pt-4">
          <Link to='/'>
            <img onClick={closeDrawerRight} className='w-10' src={logo} alt="" />
          </Link>
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={Closedraw}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>

        <div className=' flex flex-col items-center text-center space-y-2'>
          <Link onClick={closeDrawerRight}>Главная</Link>
          <Link onClick={closeDrawerRight}>Проекты</Link>
          <Link onClick={closeDrawerRight}>Наши работы</Link>
          <Link onClick={closeDrawerRight}>Контакты</Link>

        </div>
        
      </Drawer>
      </section>
    </>
  )
}

export default Header

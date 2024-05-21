import React from 'react'
import { Link } from 'react-router-dom'

// imgs
import whatsapp from '../imgs/whatsapp.svg'
import telegram from '../imgs/telegram.svg'
import instagram from '../imgs/instagram.svg'

import foot from '../imgs/foot.svg'
const Footer = () => {
  return (
    <>
      <section className='py-14'>
        <div className="containerb">
          <ul className='flex justify-between items-center'>
            {/* logo */}
            <li>
              <Link to='/'>
                <img src={foot} alt="" />
              </Link>
            </li>
            {/* links */}
            <li className='flex items-center space-x-8 text-base'>
              <Link>Главная</Link>
              <Link>Проекты</Link>
              <Link>Отзывы</Link>
              <Link>Контакты</Link>

            </li>

            {/* aloqa */}
            <li className='flex flex-col items-end'>
              <a className='mb-5' href="tel:+7 (999) 000-00-00">+7 (999) 000-00-00</a>
              <div>

              <a className='bg-gren p-4 inline-block text-end rounded-full mr-5' href="https://wa.me/+998914750612">
                <img src={whatsapp} alt="whatsapp" />
              </a>

              <a className='bg-gren p-4 inline-block rounded-full mr-5' href="https://t.me/Umarov_Dev">
                <img src={telegram} alt="telegram" />
              </a>
              <a className='bg-gren p-4 inline-block rounded-full' href="">
                <img src={instagram} alt="instagram" />
              </a>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Footer
import React from 'react'
import Hero from '../components/home/Hero'
import KlinikaXaqida from '../components/home/KompaniyaXaqida'
import Loyihalar from '../components/home/Loyihalar'
import Sharx from '../components/home/Sharx'
import Aloqa from '../components/home/Aloqa'
const Home = () => {
  return (
    <div className='flex flex-col justify-between gap-10'>
      <Hero/>
      <KlinikaXaqida/>

      <Loyihalar/>
      <Sharx/>
      <Aloqa/>
    </div>
  )
}

export default Home
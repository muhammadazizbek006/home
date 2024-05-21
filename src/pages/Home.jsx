import React from 'react'
import Hero from '../components/home/Hero'
import KlinikaXaqida from '../components/home/KompaniyaXaqida'
import Loyihalar from '../components/home/Loyihalar'
import Sharx from '../components/home/Sharx'
// import Proect from '../components/home/Proect'
const Home = () => {
  return (
    <>
      <Hero/>
      <KlinikaXaqida/>
      {/* <Proect/> */}
      <Loyihalar/>
      <Sharx/>
    </>
  )
}

export default Home
import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Proects from './pages/Proects'
import ProectDetail from './components/Proects/ProectDetail'
import Galareya from './pages/Galareya'
import MijozlarUchunMalumot from './pages/MijozlarUchunMalumot'
import Kontakt from './pages/Kontakt'
import PageNotFound from './pages/PageNotFound'
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='/proects' element={<Proects/>}/>
        <Route path='/Proect/:title' element={<ProectDetail/>}/>
        <Route path='/galareya' element={<Galareya/>}/>
        <Route path='/MijozlarUchunMalumot' element={<MijozlarUchunMalumot/>}/>
        <Route path='/kontakt' element={<Kontakt/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Route>
    )
  )
  return (
    <RouterProvider router={router}/>
  )
}

export default App
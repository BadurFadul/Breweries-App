import React from 'react'
import { Outlet } from 'react-router-dom'

import Home from './Home'
import Footer from '../Components/Footer'

const Default = () => {
  return (
    <div>
        <Home/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Default
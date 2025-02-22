import React from 'react'
import HeaderCard from './HeaderCard'
import { Outlet } from 'react-router-dom'
import HeroSection from '../../../HeroSection'
import Serch from '../Serch'

function PassangerLayout() {
  return (
    <div className='bg-gray-100'>
          <Serch/>
          <Outlet/>
    </div>
  )
}

export default PassangerLayout

import React from 'react'
import HeaderCard from './PassangerVehicles/HeaderCard'
import { Outlet } from 'react-router-dom'
import HeroSection from '../../HeroSection'

function VehicleLayout() {
  return (
    <div>
          <Outlet/>
    </div>
  )
}

export default VehicleLayout

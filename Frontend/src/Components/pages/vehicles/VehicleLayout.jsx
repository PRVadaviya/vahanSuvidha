import React from 'react'
import HeaderCard from './PassangerVehicles/HeaderCard'
import { Outlet } from 'react-router-dom'

function VehicleLayout() {
  return (
    <div>
          <Outlet/>
    </div>
  )
}

export default VehicleLayout

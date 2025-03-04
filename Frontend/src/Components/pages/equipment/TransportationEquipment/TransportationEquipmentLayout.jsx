import React from 'react'
import { Outlet } from 'react-router-dom'
import Serch from '../Serch'

function TransportationEquipmentLayout() {
  return (
    <div className='bg-gray-100'>
          <Serch/>
          <Outlet/>
    </div>
  )
}

export default TransportationEquipmentLayout;

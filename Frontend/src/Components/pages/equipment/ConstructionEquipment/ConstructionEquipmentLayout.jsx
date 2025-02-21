import React from 'react'
import { Outlet } from 'react-router-dom'
import Serch from '../Serch'


function ConstructionEquipmentLayout() {
  return (
    <div className='bg-gray-100'>
          <Serch/>
          <Outlet/>
    </div>
  )
}

export default ConstructionEquipmentLayout

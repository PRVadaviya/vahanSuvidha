import React from 'react'
import HeaderCard from './HeaderCard'
import { Outlet } from 'react-router-dom'

function PassangerLayout() {
  return (
    <div>
          <Outlet/>
    </div>
  )
}

export default PassangerLayout

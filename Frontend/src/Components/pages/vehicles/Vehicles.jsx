import React from 'react'
import Card from './PassangerVehicles/Card'
import vehicleData from './vehicaleData'
import { Outlet } from 'react-router-dom'

function Vehicles() {
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      {vehicleData.map((car, index) => (
        <Card
          key={index}
          title={car.title}
          people={car.people}
          bags={car.bags}
          description={car.description}
          buttonText={car.buttonText}
          imageSrc={car.imageSrc}
          url={car.url}
        />
      ))}
        <Outlet />
    </div>
  )
}

export default Vehicles

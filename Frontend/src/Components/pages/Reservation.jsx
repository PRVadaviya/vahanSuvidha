import React from 'react'
import HeroSection from '../HeroSection'
import Cards from '../HomePage/Cards';
import Cards2 from '../HomePage/Cards2';
import { useSelector } from 'react-redux';


function Reservation()
{
  const auth = useSelector((state)=>state.login.email)
  console.log("Email : ",auth);
  return (
    <div>
      <HeroSection/>
      <Cards/>
      <Cards2/>
    </div>
  )
}

export default Reservation
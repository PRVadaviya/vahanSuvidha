import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Routes } from 'react-router-dom'
import Reservation from './Components/pages/Reservation.jsx'
import Vehicles from './Components/pages/vehicles/Vehicles.jsx'
import Equipment from './Components/pages/Equipment.jsx'
import Business from './Components/pages/Business.jsx'
import Booking from './Components/pages/Booking.jsx'
import PassengerVehicles from './Components/pages/vehicles/PassangerVehicles/Car/CarDisplay.jsx'
import VehicleLayout from './Components/pages/vehicles/VehicleLayout.jsx'
import Page from './Components/pages/vehicles/PassangerVehicles/Page.jsx'
import AggriculturalVehicles from './Components/pages/vehicles/AggriculturalVehicles/AggriculturalVehicles.jsx'
import CommercialVehicles from './Components/pages/vehicles/CommercialVehicles/CommercialVehicles.jsx'
import ConstrunctionVehicles from './Components/pages/vehicles/ConstructionVehicles/ConstrunctionVehicles.jsx'
import PassangerLayout from './Components/pages/vehicles/PassangerVehicles/PassangerLayout.jsx'
import CarDisplay from './Components/pages/vehicles/PassangerVehicles/Car/CarDisplay.jsx'
import BusDisplay from './Components/pages/vehicles/PassangerVehicles/Bus/BusDisplay.jsx'
import BikeDisplay from './Components/pages/vehicles/PassangerVehicles/Bike/BikeDisplay.jsx'
import AboutUs from './Components/pages/Aboutus.jsx'
import PrivacyPolicy from './Components/pages/PrivacyPolicy.jsx'
import TremsCondition from './Components/pages/TermsCondition.jsx'
import SignUp from './Components/Login/SignUp.jsx';
import Login from './Components/Login/Login.jsx';
import ForgotPassword from './Components/Login/ForgotPassword.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route path="" element={<Reservation />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Forgotpassword" element={<ForgotPassword />} />
        <Route path="vehicles" element={<VehicleLayout />}>
          <Route index element={<Vehicles />} /> {/* Default vehicles page */}
          <Route path="passenger" element={<PassengerVehicles />} />
          <Route path="passenger" element={<PassangerLayout />}>
            <Route index element={<CarDisplay />} /> {/* Default route */}
            <Route path="car" element={<CarDisplay />} />
            <Route path="bus" element={<BusDisplay />} />
            <Route path="bike" element={<BikeDisplay />} />
          </Route>
          <Route path="aggricultural" element={<AggriculturalVehicles />} />
          <Route path="commercial" element={<CommercialVehicles />} />
          <Route path="construction" element={<ConstrunctionVehicles />} />
        </Route>
        <Route path="equipment" element={<Equipment />} />
        <Route path="bussiness" element={<Business />} />
        <Route path="booking" element={<Booking />} />
      </Route>
      <Route path="about" element={<AboutUs />} />
      <Route path="privacypolicy" element={<PrivacyPolicy />} />
      <Route path="termscondition" element={<TremsCondition />} />
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);


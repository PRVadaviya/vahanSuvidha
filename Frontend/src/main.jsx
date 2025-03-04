import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Routes } from 'react-router-dom'
import Reservation from './Components/pages/Reservation.jsx'
import Vehicles from './Components/pages/vehicles/Vehicles.jsx'
import Business from './Components/pages/Business.jsx'
import Booking from './Components/pages/Booking.jsx'
import PassengerVehicles from './Components/pages/vehicles/PassangerVehicles/Car/CarDisplay.jsx'
import VehicleLayout from './Components/pages/vehicles/VehicleLayout.jsx'
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
import BuldozerDisplay from './Components/pages/vehicles/ConstructionVehicles/Buldozer/BuldozerDisplay.jsx'
import MixerDisplay from './Components/pages/vehicles/ConstructionVehicles/Mixer/MixerDisplay.jsx'
import RollerDisplay from './Components/pages/vehicles/ConstructionVehicles/Roller/RollerDisplay.jsx'
import ConstructionLayout from './Components/pages/vehicles/ConstructionVehicles/ConstructionLayout.jsx'
import CommercialLayout from './Components/pages/vehicles/CommercialVehicles/CommercialLayout.jsx'
import TrailerDisplay from './Components/pages/vehicles/CommercialVehicles/Trailers/TrailerDisplay.jsx'
import TruckDisplay from './Components/pages/vehicles/CommercialVehicles/Truck/TruckDisplay.jsx'
import TractorDisplay from './Components/pages/vehicles/AggriculturalVehicles/Tractor/TractorDisplay.jsx'
import AggriculturalLayout from './Components/pages/vehicles/AggriculturalVehicles/AggriculturalLayout.jsx'
import HarvestorDisplay from './Components/pages/vehicles/AggriculturalVehicles/Harvestor/HArvestorDisplay.jsx'
import EquipmentLayout from './Components/pages/equipment/EquipmentLayout.jsx'
import PlowDisplay from './Components/pages/equipment/AggriculturalEquipment/Plow/PlowDisplay.jsx'
import RotavatorDisplay from './Components/pages/equipment/AggriculturalEquipment/Rotavator/RotavatorDisplay.jsx'
import ThresherDisplay from './Components/pages/equipment/AggriculturalEquipment/Thresher/ThresherDisplay.jsx'
import TrollyDisplay from './Components/pages/equipment/AggriculturalEquipment/Trolly/TrollyDisplay.jsx'
import ConstructionEquipmentLayout from './Components/pages/equipment/ConstructionEquipment/ConstructionEquipmentLayout.jsx'
import ExcavatorBucketDisplay from './Components/pages/equipment/ConstructionEquipment/ExcavatorBucket/ExcavatorBucketDisplay.jsx'
import HydrolicBreakerDisplay from './Components/pages/equipment/ConstructionEquipment/HydrolicBreaker/HydrolicBreakerDisplay.jsx'
import RoadSweeperDisplay from './Components/pages/equipment/ConstructionEquipment/RoadSweeper/RoadSweeperDisplay.jsx'
import MedicalEquipmentLayout from './Components/pages/equipment/MedicalEquipment/MedicalEquipmentLayout.jsx'
import ChairDisplay from './Components/pages/equipment/MedicalEquipment/Chair/ChairDisplay.jsx'
import WalkerDisplay from './Components/pages/equipment/MedicalEquipment/Walker/WalkerDisplay.jsx'
import TransportationEquipmentLayout from './Components/pages/equipment/TransportationEquipment/TransportationEquipmentLayout.jsx'
import ShippingContainersDisplay from './Components/pages/equipment/TransportationEquipment/ShippingContainers/ShippingContainersDisplay.jsx'
import WaterTankorDisplay from './Components/pages/equipment/TransportationEquipment/WaterTankor/WaterTankorDisplay.jsx'
import Equipments from './Components/pages/equipment/Equipments.jsx'
import { Provider } from 'react-redux'
import store from './store.js'
import AddToCart from './Components/pages/AddToCart.jsx'

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
          <Route path="aggricultural" element={<AggriculturalLayout />} >
            <Route index element={<HarvestorDisplay />} />
            <Route path='tractor' element={<TractorDisplay />} />
          </Route>
          <Route path="commercial" element={<CommercialLayout />} >
            <Route index element={<TrailerDisplay />} />
            <Route path='truck' element={<TruckDisplay />} />
          </Route>
          <Route path="construction" element={<ConstructionLayout />} >
            <Route index element={<BuldozerDisplay />} />
            <Route path='buldozer' element={<BuldozerDisplay />} />

            <Route path="mixer" element={<MixerDisplay />} />
            <Route path="roller" element={<RollerDisplay />} />
          </Route>
        </Route>
        <Route path="equipment" element={<EquipmentLayout />} >
          <Route index element={<Equipments />} /> {/* Default vehicles page */}
          <Route path="passenger" element={<Equipments />} />
          <Route path='aggricultural' element={<EquipmentLayout />} >
            <Route index element={<PlowDisplay />} />
            <Route path='rotavator' element={<RotavatorDisplay />} />
            <Route path='thresher' element={<ThresherDisplay />} />
            <Route path='trolly' element={<TrollyDisplay />} />
          </Route>
          <Route path='construction' element={<ConstructionEquipmentLayout />} >
            <Route index element={<ExcavatorBucketDisplay />} />
            <Route path='hydrolic-breaker' element={<HydrolicBreakerDisplay />} />
            <Route path='road-sweeper' element={<RoadSweeperDisplay />} />
          </Route>
          <Route path='medicalequipment' element={<MedicalEquipmentLayout />} >
            <Route index element={<ChairDisplay />} />
            <Route path='walker' element={<WalkerDisplay />} />
          </Route>
          <Route path='transportationEquipment' element={<TransportationEquipmentLayout />} >
            <Route index element={<ShippingContainersDisplay />} />
            <Route path='waterTankor' element={<WaterTankorDisplay />} />
          </Route>
        </Route>

        <Route path="bussiness" element={<Business />} />
        <Route path="booking" element={<Booking />} />
        <Route path='addtocart' element={<AddToCart/>}  />
      </Route>
      <Route path="about" element={<AboutUs />} />
      <Route path="privacypolicy" element={<PrivacyPolicy />} />
      <Route path="termscondition" element={<TremsCondition />} />
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 flex flex-wrap justify-between items-center py-4">

        {/* <img src={logo} alt="" /> */}
        <h1 className="text-2xl font-bold">vahanSuvidha</h1>

        {/* Navigation Links */}
        <nav className="hidden lg:flex space-x-8">
          <NavLink to="/" className={({ isActive }) => `hober:underline ${isActive ? 'text-green-500' : 'text-white'}`}>
            Reservation
          </NavLink>
          <NavLink to="/vehicles" className={({ isActive }) => `hober:underline ${isActive ? 'text-green-500' : 'text-white'}`}>
            Vehicles
          </NavLink>
          <NavLink to="/equipment" className={({ isActive }) => `hober:underline ${isActive ? 'text-green-500' : 'text-white'}`}>
            Equipment
          </NavLink>
          <NavLink to="/bussiness" className={({ isActive }) => `hober:underline ${isActive ? 'text-green-500' : 'text-white'}`}>
            For Bussiness
          </NavLink>
          <NavLink to="/booking" className={({ isActive }) => `hober:underline ${isActive ? 'text-green-500' : 'text-white'}`}>
            Booking Status
          </NavLink>

        </nav>

        {/* Help and Sign In Links */}
        <div className="hidden lg:flex space-x-4 items-center">
          <NavLink to="/addtocart" className={({ isActive }) => `hover:underline ${isActive ? 'text-green-500' : 'text-white'}`}>
            Add to cart
          </NavLink>
          {/* <a href="#login" className="text-sm hover:underline">
            Sign In / Join
          </a> */}
          <Link to='/Login' className="text-sm hover:underline">
            Sign In / Join
          </Link>
        </div>

        {/* Mobile Menu */}
        {/* <div className="block lg:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => {
              const menu = document.getElementById("mobile-menu");
              menu.classList.toggle("hidden");
            }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div> */}

        {/* Mobile Dropdown Menu */}
        {/* <div
        id="mobile-menu"
        className="hidden lg:hidden flex flex-col bg-green-700 text-white space-y-2 px-6 py-4"
      >
        <a href="#reservations" className="hover:underline">
          Reservations
        </a>
        <a href="#vehicles" className="hover:underline">
          Vehicles
        </a>
        <a href="#locations" className="hover:underline">
          Locations
        </a>
        <a href="#sales" className="hover:underline">
          Car Sales
        </a>
        <a href="#business" className="hover:underline">
          For Business
        </a>
        <a href="#learn" className="hover:underline">
          Learn
        </a>
        <hr className="border-green-300" />
        <a href="#help" className="text-sm hover:underline">
          Help
        </a>
        <a href="#login" className="text-sm hover:underline">
          Sign In / Join
        </a>
      </div> */}
      </div>
    </header>
  );
};

export default Header;

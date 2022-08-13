import { Link, useLocation } from "react-router-dom";
import { MenuIcon } from "@heroicons/react/outline"

import cute_cat from "../assets/cute_cat.png"
import { useState } from "react";

const Navbar = () => {
  let location = useLocation()
  const [nav, setNav] = useState(false)

  let handleNav = () => setNav(!nav)

  return (
    <div className="select-none w-screen py-[45px] z-10 text-slate-400 bg-gray-900 drop-shadow-lg">
      <nav className="px-2 flex items-center justify-center">
        {/* Logo */}
        <img className="w-14 mr-4 rounded-full" src={cute_cat} alt="" />
        <h1 className="font-semibold text-2xl mr-6 text-white">Randimalz</h1>
        
        {/* [ PC ] Navbar Items */}
        <ul className="hidden md:flex flex-row justify-center text-xl">
          <li>{location.pathname === "/cat" ? <ActiveLink to="cat" text="Cat Facts" /> : <InactiveLink to="cat" text="Cat Facts" />}</li>
          <li>{location.pathname === "/dog" ? <ActiveLink to="dog" text="Dog Facts" /> : <InactiveLink to="dog" text="Dog Facts" />}</li>
          <li>{location.pathname === "/animal" ? <ActiveLink to="animal" text="Animals" /> : <InactiveLink to="animal" text="Animals" />}</li>
        </ul>

        <button onClick={handleNav} className="p-2 rounded-lg text-white md:hidden hover:bg-slate-700 hover:scale-125 hover:ease duration-150 cursor-pointer">
          <MenuIcon className="w-7" />
        </button>
      </nav>
      
      {/* [ Phone ] Navbar Items */}
      <ul className={nav ? "md:hidden w-full px-8 bg-gray-900 ease duration-150" : "hidden"} onClick={handleNav}>
        <li className="border-b-2 border-slate-300">{location.pathname === "/cat" ? <ActiveLink to="cat" text="Cat Facts" /> : <InactiveLink to="cat" text="Cat Facts" />}</li>
        <li className="border-b-2 border-slate-300">{location.pathname === "/dog" ? <ActiveLink to="dog" text="Dog Facts" /> : <InactiveLink to="dog" text="Dog Facts" />}</li>
        <li className="border-b-2 border-slate-300">{location.pathname === "/animal" ? <ActiveLink to="animal" text="Animals" /> : <InactiveLink to="animal" text="Animals" />}</li>
      </ul>
    </div>
  );
}

const ActiveLink = ({ text, to }) => <Link to={to} className="text-blue-600">{text}</Link>
const InactiveLink = ({ text, to }) => <Link to={to} className="hover:text-white">{text}</Link>
 
export default Navbar;
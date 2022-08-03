import { Link, useLocation } from "react-router-dom";
import cute_cat from "../assets/cute_cat.png"

const Navbar = () => {
  let location = useLocation()

  return (
    <nav className="px-2 sm:px-4 py-2.5 dark:bg-gray-900">
      <div className="container flex flex-wrap justify-center items-center text-white">
        <Link to="/cat" className="flex items-center mr-5">
          <img className="w-14 mr-4 rounded-full" src={cute_cat} alt="" />
          <span className="self-center text-xl font-semibold whitespace-nowrap">Randimalz</span>
        </Link>
        <button onClick={() => document.querySelector('#navbar-default').classList.toggle('hidden')} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 text-white bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              {location.pathname === "/cat" ? <ActiveLink to="cat" text="Cat Facts" /> : <InactiveLink to="cat" text="Cat Facts" />}
            </li>
            <li>
              {location.pathname === "/dog" ? <ActiveLink to="dog" text="Dog Facts" /> : <InactiveLink to="dog" text="Dog Facts" />}
            </li>
            <li>
              {location.pathname === "/animal" ? <ActiveLink to="animal" text="Animals" /> : <InactiveLink to="animal" text="Animals" />}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

const ActiveLink = ({ text, to }) => <Link to={to} className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">{text}</Link>
const InactiveLink = ({ text, to }) => <Link to={to} className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">{text}</Link>
 
export default Navbar;
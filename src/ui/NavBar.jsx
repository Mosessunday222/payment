import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaBars } from "react-icons/fa";


function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div >
      <nav className="fixed  right-0 z-50     ">
        <div className=" ">
          {/* Logo */}

          {/* Hamburger menu for mobile */}
          <button
            className={`md:hidden text-black focus:outline-none ${
              isOpen ? "hidden" : "block"
            } mx-[1px] mt-1   sm:mx-9`}
            onClick={toggleMenu}
          >
            <FaBars />
          </button>
        </div>

        {/* Menu items */}
        <div
          className={`md:flex ${
            isOpen ? "block" : "hidden"
          } md:items-center md:w-auto w-full  `}

        >
          {/* Menu on larger screens */}
          <ul className=" md:flex-row md:space-x-6  md:ml-auto  md:mt-0   ">
            <li>
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="text-yellow-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="text-yellow-500"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/product"
                onClick={() => setIsOpen(false)}
                className="text-yellow-500"
              >
                Product
              </Link>
            </li>
           
          </ul>

          
        </div>
      </nav>
    </div>
  );
}

export default NavBar;

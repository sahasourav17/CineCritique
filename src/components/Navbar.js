import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../logo.png";
const Navbar = () => {
  const [showBurgerMenu, setShowBurgerMenu] = useState(true);

  return (
    <>
      <header className="bg-opacity-0 sm:mx-auto sm:flex sm:w-4/5 sm:items-center sm:justify-between sm:py-4 sm:pl-4 sm:pr-2">
        <div className="flex items-center justify-between px-4 py-4 sm:p-0">
          <div>
            <NavLink to="/">
              <img className="h-8 font-bold" src={logo} alt="" />
            </NavLink>
          </div>
          <div>
            <button
              type="button"
              className="block text-gray-300 hover:text-white focus:text-white focus:outline-none sm:hidden"
              onClick={() => setShowBurgerMenu(!showBurgerMenu)}
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {showBurgerMenu ? (
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        <div
          className={
            !showBurgerMenu
              ? "block px-2 pb-4 sm:flex sm:p-0"
              : "hidden px-2 pb-4 sm:flex sm:p-0"
          }
        >
          <NavLink
            className="font-sm block rounded px-2 py-1 text-white hover:bg-rainblue-50 sm:mt-0"
            to="/"
          >
            Home
          </NavLink>

          <NavLink
            className="font-sm block rounded px-2 py-1 text-white hover:bg-rainblue-50 sm:mt-0 sm:ml-4"
            to="/"
          >
            Movies
          </NavLink>

          <NavLink
            className="font-sm block rounded px-2 py-1 text-white hover:bg-rainblue-50 sm:mt-0 sm:ml-4"
            to="/signin"
          >
            LogOut
          </NavLink>
        </div>
      </header>
    </>
  );
};

export default Navbar;

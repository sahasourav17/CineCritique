import React from "react";
import { NavLink } from "react-router-dom";
import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <>
      <footer className="text-cente fixed bottom-0 left-0 right-0">
        <Newsletter />
        <div className="bg-raingray-100 p-4  text-white">
          <div className="bg-neutral-200 dark:bg-neutral-700 p- text-center text-sm">
            <span>© 2023 </span>
            <NavLink className="text-neutral-600 font-semibold" to="/">
              CineCritique
            </NavLink>
          </div>
          <div className="bg-neutral-200 dark:bg-neutral-700 mb-1 text-center text-sm">
            <span>Privacy Policy | Terms of Conditions</span>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;

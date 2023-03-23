import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-raingray-100 text-center text-white">
      <div className="bg-neutral-200 dark:bg-neutral-700 p-2 text-center text-sm">
        <span>© 2023 </span>
        <NavLink className="text-neutral-600 font-semibold" to="/">
          CineCritique
        </NavLink>
      </div>
      <div className="bg-neutral-200 dark:bg-neutral-700 mb-1 text-center text-sm">
        <span>Privacy Policy | Terms of Conditions</span>
      </div>
    </footer>
  );
};
export default Footer;

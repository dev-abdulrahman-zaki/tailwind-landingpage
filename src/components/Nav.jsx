import React, { useState } from "react";
import NavLinks from "./NavLinks";
import logoLight from "../images/logo-light.png";
import { IoMenu } from "react-icons/io5";

export default function Nav() {
  const linksList = ["Portfolio", "About", "Contact", "Social"];
  const [menu, toggleMenu] = useState(false);

  return (
    <nav className="container p-6">
      <div className="flex item-center justify-between">
        <div>
          <img src={logoLight} alt="Tailwind Logo" width="200px" />
        </div>
        <div className="hidden md:flex space-x-6 items-center">
          {linksList.map((e) => {
            return <NavLinks title={e} />;
          })}

          <a
            href="#"
            className="py-2 px-6 rounded-full text-white bg-orange-500 hover:bg-slate-900 transition-all ease-in-out"
          >
            Call Me
          </a>
        </div>
        {/* Mobile */}
        <button id="mobile-btn" className="md:hidden" onClick={()=>{toggleMenu(!menu)}}>
        <IoMenu size={30}/>
        </button>
      </div>
      {/* Mobile */}
      <div className={!menu && "hidden"}>
        <div
          id="mobile-menu"
          className="absolute left-6 right-6 flex flex-col items-center space-y-4 font-bold bg-gray-50 py-8 drop-shadow-lg border border-gray-300"
        >
          <a href="#">Portfolio</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Social</a>
          <a
            href="#"
            className="py-2 px-6 rounded-full text-white bg-orange-500 hover:bg-slate-900 transition-all ease-in-out"
          >
            Call Me
          </a>
        </div>
      </div>
    </nav>
  );
}

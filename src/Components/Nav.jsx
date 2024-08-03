import React, { useState } from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

export default function Nav() {
  const [menu, setMenu] = useState(false);
  const handleClick = () => {
    setMenu(!menu);
  };

  return (
    <header className="py-8 w-full padding-x absolute z-10">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="headerLogo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => {
            return (
              <li key={item.label}>
                <a
                  className="font-montserrat leading-normal text-lg text-slate-gray"
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="max-lg:block hidden cursor-pointer">
          <img
            src={hamburger}
            alt="hamburger"
            height={25}
            width={25}
            onClick={handleClick}
          />
          <div className={`max-lg:${menu ? "block" : "hidden"}`}>
            <ul className="flex-1 flex flex-col justify-center items-center gap-16 bg-coral-red w-full absolute right-0 p-12 z-20 mt-10">
              {navLinks.map((item) => {
                return (
                  <li key={item.label}>
                    <a
                      className="font-montserrat leading-normal text-lg text-white"
                      href={item.href}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

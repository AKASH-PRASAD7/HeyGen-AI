import React, { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import DropdownNavMenu from "./DropdownNavMenu";

const Navbar = () => {
  const [navitem, setNavitem] = useState("");

  const handleMouseEnter = (id) => {
    setNavitem(id);
  };

  const handleMouseLeave = () => {
    setNavitem("");
  };
  return (
    <>
      <nav className="w-full  nav sticky top-0 z-20 ">
        <section className="flex justify-between items-center mobile:px-4 tablet:px-4 laptop:px-12   ">
          <div className="logo py-2 cursor-pointer">
            <img
              src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/649e4c3d5f0708ca6cd80bba_logoHorizonalLight.svg"
              alt="logo"
              className="w-28"
            />
          </div>
          <div className="  flex mobile:justify-end tablet:justify-end laptop:justify-around px-2 w-3/4  py-2  gap-4">
            <ul className=" mobile:hidden tablet:hidden laptop:flex  flex justify-evenly  my-2  ">
              <li
                onMouseEnter={() => handleMouseEnter("1")}
                onMouseLeave={handleMouseLeave}
                className="flex relative justify-center items-center hover:bg-gray-300 hover:rounded-full hover:text-indigo-600 w-32 px-2  "
              >
                <a href="#">Use Cases</a>

                {navitem === "1" ? (
                  <RiArrowDropUpLine className="text-2xl text-indigo-600 " />
                ) : (
                  <RiArrowDropDownLine className="text-2xl text-indigo-600 " />
                )}
              </li>
              {/* <DropdownNavMenu
                id={navitem}
                className="absoulte bottom-10 mobile:hidden tablet:hidden laptop:block"
              /> */}
              <li
                onMouseEnter={() => handleMouseEnter("2")}
                onMouseLeave={handleMouseLeave}
                className="flex justify-center items-center hover:bg-gray-300 hover:rounded-full hover:text-indigo-600 w-32 px-2 "
              >
                <a href="#">Features</a>
                {navitem === "2" ? (
                  <RiArrowDropUpLine className="text-2xl text-indigo-600 " />
                ) : (
                  <RiArrowDropDownLine className="text-2xl text-indigo-600 " />
                )}
              </li>
              <li
                onMouseEnter={() => handleMouseEnter("3")}
                onMouseLeave={handleMouseLeave}
                className="flex justify-center items-center hover:bg-gray-300 hover:rounded-full hover:text-indigo-600 w-32  px-2 "
              >
                <a href="#">Resources</a>
                {navitem === "3" ? (
                  <RiArrowDropUpLine className="text-2xl text-indigo-600 " />
                ) : (
                  <RiArrowDropDownLine className="text-2xl text-indigo-600 " />
                )}
              </li>
              <li className="flex justify-center items-center hover:bg-gray-300 hover:rounded-full hover:text-indigo-600 w-32  px-4 ">
                <a href="#">Pricing</a>
              </li>
            </ul>
            <div className="flex justify-between gap-4  items-center  hover:text-indigo-600 cursor-pointer">
              <p className=" mobile:hidden tablet:hidden laptop:block text-center  w-24">
                Contact Sales
              </p>
              <button className="bg-indigo-500 hover:bg-indigo-600 font-semibold text-white   w-28 h-12 rounded-xl">
                Get Started
              </button>
              <GiHamburgerMenu className="text-3xl bg-gray-200 rounded-full p-1 block mobile:block tablet:block laptop:hidden " />
            </div>
          </div>
        </section>
      </nav>
    </>
  );
};

export default Navbar;

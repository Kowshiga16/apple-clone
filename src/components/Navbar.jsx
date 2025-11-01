import React, { useState } from "react";
import { MagnifyingGlassIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import { X } from "lucide-react";


function Navbar() {
  const [open, setOpen] = useState(false);

  const products = [
    "Store",
    "Mac",
    "iPad",
    "iPhone",
    "Watch",
    "AirPods",
    "TV & Home",
    "Entertainment",
    "Accessories",
    "Support",
  ];

  return (
    <>
      {/*  Main Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <section className="bg-white flex justify-between  items-center m-4 md:mr-5 ml-5 ">
          {/*  Apple Logo */}
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="40"
              height="25"
              viewBox="0 0 50 50"
            >
              <path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z"></path>
            </svg>
          </div>

          {/*  Desktop Menu */}
          <div className="hidden md:flex flex-row gap-5 items-center">
            {products.map((item, index) => (
              <p
                key={index}
                className="text-sm font-semibold text-gray-800 hover:text-blue-500 cursor-pointer"
              >
                {item}
              </p>
            ))}
          </div>

          {/* 🔍 Icons + Menu */}
          <div className="flex gap-3 items-center">
            <MagnifyingGlassIcon className="w-6 h-6 cursor-pointer" />
            <ShoppingBagIcon className="w-6 h-6 cursor-pointer" />
            {/*  Mobile Menu Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="28"
              height="27"
              viewBox="0 0 50 50"
              className="md:hidden cursor-pointer"
              onClick={() => setOpen(true)} // ✅ open sidenav
            >
              <path d="M 3 8 A 2.0002 2.0002 0 1 0 3 12 L 47 12 A 2.0002 2.0002 0 1 0 47 8 L 3 8 z M 3 23 A 2.0002 2.0002 0 1 0 3 27 L 47 27 A 2.0002 2.0002 0 1 0 47 23 L 3 23 z M 3 38 A 2.0002 2.0002 0 1 0 3 42 L 47 42 A 2.0002 2.0002 0 1 0 47 38 L 3 38 z"></path>
            </svg>
          </div>
        </section>

        {/*  Subtext Below Navbar */}
        <div className="flex justify-center py-2 m-4 mb-2">
          <p className="text-xs font-thin text-center md:text-sm md:font-normal">
            Get up to 12 months of No Cost EMI® plus up to ₹8000.00 instant cashback on
            selected products with eligible cards.{" "}
            <span className="text-blue-500 cursor-pointer hover:underline">Shop ›</span>
          </p>
        </div>
      </nav>

      {/*  Sidenav (Mobile) */}
      <section
        className={`fixed top-0 left-0 bg-white h-screen w-full z-50 transition-transform duration-700 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4">
         
          <X className="text-2xl cursor-pointer" onClick={() => setOpen(false)} />
        </div>

        {/* Menu Items */}
        <div className="flex flex-col gap-4 mt-4 px-6">
          {products.map((item, index) => (
            <p
              key={index}
              className="text-lg font-medium text-gray-900 hover:text-blue-500 cursor-pointer"
            >
              {item}
            </p>
          ))}
        </div>
      </section>
    </>
  );
}

export default Navbar;

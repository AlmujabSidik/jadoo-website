import React from "react";

import Link from "next/link";

import Logo from "images/logo.svg";

const Header = () => {
  return (
    <div className="absolute z-10 w-full py-12">
      <header className="px-4 mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          <div className="w-28">
            <Logo className="logo-style-1" />
          </div>

          <div className="w-auto">
            <ul className="flex items-center">
              <li>
                <Link href="/destination">
                  <a className="text-gray-800 px-9 font-text-1">Destinations</a>
                </Link>
              </li>
              <li>
                <Link href="/hotel">
                  <a className="text-gray-800 px-9 font-text-1">Hotels</a>
                </Link>
              </li>
              <li>
                <Link href="/flight">
                  <a className="text-gray-800 px-9 font-text-1">Flights</a>
                </Link>
              </li>
              <li>
                <Link href="/booking">
                  <a className="text-gray-800 px-9 font-text-1">Bookings</a>
                </Link>
              </li>
              <li>
                <Link href="/login">
                  <a className="text-gray-800 px-9 font-text-1">Login</a>
                </Link>
              </li>
              <li>
                <Link href="/sign-up">
                  <a className="px-5 py-2.5 border border-gray-800 rounded-md mx-3 text-gray-800">
                    Sign Up
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/destinations">
                  <button className="relative text-gray-800 px-9 font-text-1">
                    EN
                    <span className="absolute w-2 h-2 ml-2 transform rotate-45 translate-y-1/2 border-b border-r border-gray-800"></span>
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

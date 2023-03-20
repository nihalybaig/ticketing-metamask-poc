import Link from 'next/link';
import React, { useState } from 'react'
import Wallet from './Wallet';

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full bg-transparent shadow absolute z-10 ">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <img
              src="https://static.tix.fm/images/logos/tixel_white.svg"
              width="110"
              height="32"
              alt="Tixel"
            />
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1  justify-self-end pb-3 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-6 md:space-x-6 md:space-y-0 md:hidden bg-slate-500 bg-opacity-90 p-2 rounded-md">
              <li className="text-white hover:text-indigo-200">
                <Link href="#!">Home</Link>
              </li>
              <li className="text-white hover:text-indigo-200">
                <Link href="#!">Blog</Link>
              </li>
              <li className="text-white hover:text-indigo-200">
                <Link href="#!">About US</Link>
              </li>
              <li className="text-white hover:text-indigo-200">
                <Link href="#!">Contact US</Link>
              </li>
              <li className="text-white hover:text-indigo-200">
                <div className="rounded-md inline-block md:hidden">
                  <Wallet />
                </div>
              </li>
              <div className="inline-flex space-x-2">
                <li className="text-white hover:text-indigo-200">
                  <Link
                    href="#!"
                    className="px-3.5 py-2 rounded-md inline-block bg-green-500 hover:bg-green-600 focus:ring focus:ring-green-300 text-white border border-green-500 align-middle font-semibold transition-colors leading-tight focus:outline-none space-x-2 relative md:hidden"
                  >
                    Buy a ticket
                  </Link>
                </li>
                <li className="text-white hover:text-indigo-200">
                  <Link
                    href="#!"
                    className="px-3.5 py-2 rounded-md inline-block bg-green-500 hover:bg-green-600 focus:ring focus:ring-green-300 text-white border border-green-500 align-middle font-semibold transition-colors leading-tight focus:outline-none space-x-2 relative md:hidden"
                  >
                    Sell your ticket
                  </Link>
                </li>
              </div>
            </ul>
          </div>
        </div>
        <div className="hidden space-x-2 md:inline-flex justify-center items-center">
          <div className="inline-flex space-x-8">
            <Link href="#!" className="text-white hover:text-indigo-200">
              Home
            </Link>
            <Link href="#!" className="text-white hover:text-indigo-200">
              Blog
            </Link>
            <Link href="#!" className="text-white hover:text-indigo-200">
              About US
            </Link>
            <Link href="#!" className="text-white hover:text-indigo-200">
              Contact US
            </Link>
          </div>
        </div>
        <div className="hidden space-x-2 md:inline-flex justify-center items-center">
          <div className="inline-flex space-x-2">
            <div className="rounded-md inline-block">
              <Wallet />
            </div>
            <Link
              href="#!"
              className="px-3.5 py-2 rounded-md inline-block bg-green-500 hover:bg-green-600 focus:ring focus:ring-green-300 text-white border border-green-500 align-middle font-semibold transition-colors leading-tight focus:outline-none space-x-2 relative"
            >
              Buy a ticket
            </Link>
            <Link
              href="#!"
              className="px-3.5 py-2 rounded-md inline-block bg-green-500 hover:bg-green-600 focus:ring focus:ring-green-300 text-white border border-green-500 align-middle font-semibold transition-colors leading-tight focus:outline-none space-x-2 relative"
            >
              Sell your ticket
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

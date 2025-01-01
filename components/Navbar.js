import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Navbar = () => {
  return (
    <nav className="h-20 bg-gradient-to-t from-teal-700 to-emerald-600 flex flex-col md:flex-row justify-between items-center px-3 text-white  ">

      <div className="logo font-bold text-2xl text-center md:text-left w-full md:w-auto mb-3 md:mb-0 flex justify-center items-center gap-2">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/link.png" alt="Link Icon" width={30} height={30} className='mt-1' />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-teal-100 text-2xl hover:to-lime-300 hover:from-emerald-200 ">
            easyfy
          </span>
        </Link>
      </div>

      {/* Menu Items */}
      <ul className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4 items-center w-full md:w-auto">
        <li>
          <Link href="/">
            <span className="hover:text-green-300 hover:text-base hover:font-bold transition-all">Home</span>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <span className="hover:text-green-300 hover:text-base hover:font-bold transition-all">About</span>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <span className="hover:text-green-300 hover:text-base hover:font-bold transition-all">Contact</span>
          </Link>
        </li>
      </ul>

      {/* Action Buttons */}
      <div className="flex justify-center gap-2 mt-4 md:mt-0 md:flex ">
        {/* <Link href="/shorten">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800 invisible md:visible">
                <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 hidden md:block">
                  Try Now
                </span>
              </button>
            </Link> */}
        <Link href="/github" target='_blank'>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800 invisible md:visible">
            <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 hidden md:block ">
              <Image
                src="/github-logo.png" // Update with the correct image path
                alt="Easyfy URL Shortening"
                width={30}
                height={10}
              />
            </span>
          </button>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar

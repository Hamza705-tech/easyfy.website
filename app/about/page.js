import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const About = () => {
  return (
    <main className=" min-h-screen">
    <section className="text-gray-600 body-font ">
      <div className=' bg-gradient-to-r from-teal-500 to-emerald-600 w-full text-3xl text-white mt-4 p-6 '>
        About
      </div>
      <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-5xl mb-4 font-bold text-transparent bg-clip-text bg-gradient-to-t from-teal-200 to-emerald-950  ">
            Welcome to Easyfy 
            <br className=" lg:inline-block " /> Simplify Your Links with Ease
          </h1>
          <p className="mb-3 leading-relaxed">
            At <b>Easyfy</b>, we believe in keeping things simple, secure, and efficient. Launched on December 9, 2024, our mission is to provide a seamless URL shortening experience without unnecessary distractions. No logins, no data collection—just a straightforward way to make your links shorter and your online journey smoother. <br />
            Built with the power of Next.js, <b>Easyfy</b> is the brainchild of <b>Hamza Siddiqui</b>, a passionate developer committed to creating user-focused, privacy-first solutions. By removing the need for login credentials, Easyfy ensures your data stays yours—safe, secure, and uncompromised. Whether you are sharing links with friends, colleagues, or your audience, we have got you covered with speed and simplicity. <br />
    
            Discover the smarter way to share your links. Created for you, by <b>Hamza Siddiqui</b>. Try <b>Easyfy</b> today!
          </p>
          <div className="flex justify-center gap-3">
          <Link href="/shorten">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800 invisible md:visible">
                <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 hidden md:block">
                  Try Now
                </span>
              </button>
            </Link>
            <Link href="/github" target='_blank'>
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800 invisible md:visible">
                <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 hidden md:block ">
                GitHub
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded-lg shadow-xl mix-blend-darken"
            alt="Developer"
            src="/1000204538.jpg"
            width={400}
            height={600}
            />
        </div>

      </div>
    </section>
            </main>
  )
}
export default About

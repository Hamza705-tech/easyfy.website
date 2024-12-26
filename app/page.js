import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gradient-to-t from-teal-50 to-emerald-100 min-h-screen">
      <section className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-[80vh] p-6 md:p-12">
        {/* Text Section */}
        <div className="flex flex-col gap-6 items-center justify-center text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-t from-teal-200 to-emerald-950 ">  
            The Ultimate URL Shortener
          </h1>
          <p className="text-lg md:text-xl px-4 md:px-12 text-gray-700 font-bold">
            Simplify your links with ease. Unlike others, we prioritize your privacy
            and convenience. No tracking. No logins. Just fast and secure URL
            shortening tailored to your needs.
          </p>
          <div className="flex gap-4 flex-wrap justify-center md:justify-start">
            <Link href="/shorten">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
                <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Try Now
                </span>
              </button>
            </Link>
            <Link href="/github" target='_blank'>
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
                <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  GitHub
                </span>
              </button>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="hidden md:flex justify-center items-center relative mt-8 md:mt-0">
          <Image
            className="rounded-lg shadow-xl mix-blend-darken"
            alt="A vector illustration representing efficiency"
            src={"/file.png"}
            fill={true}
            style={{ objectFit: "contain" }}
          />
        </div>
      </section>

      {/* Image for Smaller Screens */}
      <div className="flex md:hidden justify-center items-center mt-8 ">
        <Image
          className="rounded-lg shadow-xl mix-blend-darken"
          alt="A vector illustration representing efficiency"
          src={"/file.png"}
          width={300}
          height={300}
          style={{ objectFit: "contain" }}
        />
      </div>
    </main>
  );
}

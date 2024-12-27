"use client"
import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const header = document.querySelector("#animated-header");
    const subheader = document.querySelector("#animated-subheader");
    header.classList.add("animate-header");
    subheader.classList.add("animate-subheader");

    // Scroll animation for elements
    const elements = document.querySelectorAll('.scroll-animate');
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.5,
    });

    elements.forEach(element => observer.observe(element));
  }, []);

  return (
    <main className="bg-gradient-to-t from-teal-50 to-emerald-100 min-h-screen">
      <style jsx>{`
        .animate-header {
          animation: slide-in 1.5s ease-out forwards;
        }
        .animate-subheader {
          animation: slide-in 1.5s ease-in forwards;
        }
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .scroll-animate {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 1s, transform 1s;
        }

        .animate-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .animate-scale:hover {
          transform: scale(1.05);
          transition: transform 0.3s ease-in-out;
        }

        .animate-zoom {
          transform: scale(0.9);
          transition: transform 1s ease-in-out;
        }
        .animate-zoom-visible {
          transform: scale(1);
        }
      `}</style>

      {/* Main Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-[80vh] p-6 md:p-12">
        {/* Text Section */}
        <div className="flex flex-col gap-6 items-center justify-center text-center md:text-left scroll-animate">
          <h1
            id="animated-header"
            className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-t from-teal-200 to-emerald-950 animate-scale"
          >
            The Ultimate URL Shortener
          </h1>
          <p id="animated-subheader"className="text-lg md:text-xl px-4 md:px-12 text-gray-700 font-bold animate-scale">
            Simplify your links with ease. Unlike others, we prioritize your
            privacy and convenience. No tracking. No logins. Just fast and
            secure URL shortening tailored to your needs.
          </p>
          <div className="flex gap-4 flex-wrap justify-center md:justify-start">
            <Link href="/shorten">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
                <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Try Now
                </span>
              </button>
            </Link>
            <Link href="/github" target="_blank">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
                <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  GitHub
                </span>
              </button>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="hidden md:flex justify-center items-center relative mt-8 md:mt-0 scroll-animate">
          <Image
            className="rounded-lg shadow-xl mix-blend-darken animate-zoom"
            alt="A vector illustration representing efficiency"
            src={"/file.png"}
            fill={true}
            style={{ objectFit: "contain" }}
          />
        </div>
      </section>

      {/* Image for Smaller Screens */}
      <div className="flex md:hidden justify-center items-center mt-8 scroll-animate">
        <Image
          className="rounded-lg shadow-xl mix-blend-darken animate-zoom"
          alt="A vector illustration representing efficiency"
          src={"/file.png"}
          width={300}
          height={300}
          style={{ objectFit: "contain" }}
        />
      </div>

      {/* Elaboration Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 md:p-12">
        {[ 
          { title: "User-Friendly", description: "Intuitive and easy-to-use interface for everyone.", imageSrc: "/laugh.png" },
          { title: "Fast Processing", description: "Shorten your URLs within seconds.", imageSrc: "/snap.png" },
          { title: "Enhanced Security", description: "Advanced encryption for secure link sharing.", imageSrc: "/cyber-security.png" },
          { title: "Customizable Links", description: "Create personalized URLs to match your brand.", imageSrc: "/customize.png" },
          { title: "No Sign-Up Needed", description: "Get started without any registration hassle.", imageSrc: "/reliable.png" },
          { title: "Multi-Device Support", description: "Access from any device, anywhere.", imageSrc: "/device.png" }
        ].map(({ title, description, imageSrc }, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center transition-transform transform hover:scale-105 hover:shadow-xl scroll-animate"
          >
            <div className="w-16 h-16 mb-4 bg-gray-200 rounded-full flex items-center justify-center">
              <Image
                src={imageSrc}
                alt={`${title} icon`}
                width={64}
                height={64}
              />
            </div>
            <h3 className="mt-4 text-lg font-bold text-gray-800">{title}</h3>
            <p className="mt-2 text-center text-gray-600">{description}</p>
          </div>
        ))}
      </section>

      {/* Reviews Section */}
      <section className="p-6 md:p-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">
          What Customers Say About Us
        </h2>
        <div className="flex gap-4 overflow-x-scroll no-scrollbar p-4">
          {[ 
            { name: "John Doe", review: "An amazing service! Quick and reliable. Highly recommended." },
            { name: "Jane Smith", review: "Super easy to use and very effective. Love the simplicity!" },
            { name: "Alice Brown", review: "Highly secure and no unnecessary logins. Perfect for my needs!" },
            { name: "Robert Johnson", review: "The best URL shortener out there. Fast and reliable." },
            { name: "Emily Davis", review: "Great experience! The customizable links are a game changer." },
          ].map(({ name, review }, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-white shadow-lg rounded-lg p-6 w-64 transition-transform transform hover:scale-105 hover:shadow-xl scroll-animate"
            >
              <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
              <p className="text-sm text-gray-600 mt-2">{`"${review}"`}</p>
              <div className="flex items-center mt-4">
                {[...Array(5)].map((_, star) => (
                  <span key={star} className="text-yellow-400">&#9733;</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

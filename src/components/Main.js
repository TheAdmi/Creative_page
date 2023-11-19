import React, { useState, useEffect, useMemo } from 'react';
import { generateJSXMeshGradient } from "meshgrad";
import { CheckCircle, Github } from "react-bootstrap-icons";
import Navbar from "./Navbar";

function Main() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = useMemo(() => [
    '/images/Change.jpg',
    '/images/Desire.jpg',
    '/images/Energy.jpg',
    '/images/Fantasy.jpg',
    '/images/Focus.jpg',
    '/images/Freedom.jpg',
    '/images/Legacy.jpg',
    '/images/Passion.jpg',
    '/images/Search.jpg',
    '/images/Silence.jpg',
  ], []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images]);

  return (
    <section style={generateJSXMeshGradient(20)} className="min-h-screen">
      <section className="dark:bg-gray-800 min-h-screen">
        <Navbar />
        <div className="container flex flex-col px-6 py-8 mx-auto space-y-6 lg:h-[32rem] lg:py-12 lg:flex-row lg:items-center">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-bold tracking-wide text-gray-800 dark:text-white lg:text-5xl">
                Think outside the box, and bring your ideas to life
              </h1>

              <div className="mt-5 ml-4 space-y-5">
                <p className="flex items-center text-gray-800 dark:text-gray-200">
                  <CheckCircle className="w-6 h-6 text-gray-800 dark:text-white" />
                  <span className="mx-2">Imagine without limits</span>
                </p>

                <p className="flex items-center text-gray-800 dark:text-gray-200">
                  <CheckCircle className="w-6 h-6 text-gray-800 dark:text-white" />
                  <span className="mx-2">Innovate with passion</span>
                </p>

                <p className="flex items-center text-gray-800 dark:text-gray-200">
                  <CheckCircle className="w-6 h-6 text-gray-800 dark:text-white" />
                  <span className="mx-2">Create, inspire, repeat</span>
                </p>
              </div>
            </div>

            <div className="w-full mt-8 backdrop-blur-sm bg-white/30 shadow-lg border rounded-md lg:max-w-sm dark:border-gray-700">
              <form className="flex flex-col lg:flex-row">
                <input type="email" placeholder="Enter your email address" className="flex-1 h-10 px-4 py-2 m-1 text-gray-700/80 placeholder-gray-700/80 bg-transparent border-none appearance-none dark:text-white/60 dark:placeholder-white/60 focus:outline-none focus:placeholder-transparent focus:ring-0" />
                <button type="button" className="h-10 px-4 py-2 m-1 text-white backdrop-blur-sm bg-gray-800/60 hover:bg-gray-800/40 dark:hover:bg-white/5 rounded-md">
                  Join Us
                </button>
              </form>
            </div>
          </div>

          <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
            <img className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl"  src={images[currentImageIndex]} alt="Images" />
          </div>
        </div>

        <div className="fixed inset-x-0 lg:inset-x-auto bottom-6 lg:right-8 xl:right-10 xl:bottom-8">
          <div className="w-40 float-right mr-6 lg:mr-0 p-2 backdrop-blur-sm bg-gray-800/20 hover:bg-gray-800/40 dark:bg-white/20 dark:hover:bg-white/40 shadow-xl rounded-lg sm:p-3">
            <div className="flex flex-wrap items-center justify-between">
              <a href="https://github.com/TheAdmi" className="flex items-center flex-1 w-0">
                <Github className="h-6 w-6 text-white"/>
                <p className="ml-3 font-medium tracking-wide text-white truncate">My github</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Main;
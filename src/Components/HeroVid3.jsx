import React from "react";
import { CiPlay1 } from "react-icons/ci";
import { RiArrowRightLine } from "react-icons/ri";

const HeroVid3 = () => {
  return (
    <>
      <section className=" h-screen mobile:mx-2 tablet:mx-12 laptop:mx-20 mobile:mb-0 tablet:mb-2 laptop:mb-4 ">
        <div className="relative h-full">
          <video
            className="absolute right-4 top-10 mobile:w-11/12 tablet:w-3/4 laptop:w-3/5 rounded-3xl shadow-indigo-600 shadow-2xl"
            src="https://resource.heygencdn.com/website/vera_remove/howitworks_new2.mp4"
            type="video/mp4"
            muted
            autoPlay
            loop
          ></video>
          <button className="absolute right-1/2 top-20 bg-black hover:bg-indigo-500 hover:opacity-100 text-white mobile:p-2 tablet:p-2 laptop:p-4 rounded-xl opacity-60  flex items-center gap-2">
            <CiPlay1 />
            Demo
          </button>
          <p className="absolute mobile:bottom-40 tablet:bottom-56 laptop:bottom-20 right-4 tablet:w-11/12 laptop:w-3/5 mobile:text-base tablet:text-lg laptop:text-2xl">
            Whether you're a professional or beginner, you can create stunning
            videos in minutes instead of hours.
          </p>
          <div className="  absolute mobile:top-80 tablet:top-96 laptop:top-52 left-0 mobile:w-11/12 tablet:w-11/12 laptop:w-1/2 flex flex-col justify-center mobilie:gap-1 tablet:gap-2 laptop:gap-4">
            <p className="mobile:text-4xl tablet:text-7xl laptop:text-9xl text-gray-950 ">
              How it works
            </p>
            <button className="bg-indigo-600 flex gap-2 tablet:w-1/2 laptop:w-1/2 justify-center items-center hover:bg-indigo-700 mt-4 p-4 rounded-lg text-white">
              Get Started for free
              <RiArrowRightLine />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroVid3;

import React from "react";
import { RiArrowRightLine } from "react-icons/ri";
import { CiPlay1 } from "react-icons/ci";

const HeroVid6Comp = ({ heading, desc, url }) => {
  return (
    <>
      <section className=" h-screen mobile:pt-8 tablet:pt-18 laptop:pt-24   mb-4 ">
        <div className="relative h-full overflow-hidden">
          <video
            className="absolute mobile:right-0 mobile:px-2 tablet:px-0 tablet:right-5 laptop:-right-10 top-10 mobile:11/12 tablet:w-11/12 laptop:w-3/5 rounded-3xl shadow-indigo-600 shadow-2xl"
            src={url}
            type="video/mp4"
            muted
            autoPlay
            loop
          ></video>
          <button className="absolute mobile:right-3/4 tablet:right-3/4 laptop:right-1/2 top-20 bg-black hover:bg-indigo-500 hover:opacity-100 text-white p-4 rounded-xl opacity-60  flex items-center gap-2">
            <CiPlay1 />
          </button>

          <div className="  absolute mobile:pl-2 tablet:pl-4 laptop:pl-8 mobile:top-96 tablet:top-96 laptop:top-24 left-0 mobile:11/12 tablet:w-11/12 laptop:w-3/5  flex flex-col justify-center gap-4">
            <p className="text-5xl  text-white font-semibold ">{heading}</p>
            <p className="mobile:text-base tablet:text-lg laptop:text-xl text-slate-500 ">
              {desc}
            </p>
            <button className="bg-indigo-600 flex gap-2 mobile:w-4/3 tablet:w-3/4 laptop:w-1/3 justify-center items-center hover:bg-indigo-700 mt-4 p-4 rounded-lg text-white">
              Get Started for free
              <RiArrowRightLine />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroVid6Comp;

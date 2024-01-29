import React from "react";
import { RiArrowRightLine } from "react-icons/ri";
import { CiPlay1 } from "react-icons/ci";

const HeroVid7 = () => {
  return (
    <>
      <section className="grid mobile:grid-rows-2 tablet:grid-rows-2 laptop:grid-cols-2 gap-8 mobile:p-2 tablet:p-6  laptop:p-12 pt-32">
        <div className="flex flex-col gap-4 justify-center  ">
          <p className="mobile:text-4xl tablet:text-7xl laptop:text-9xl  font-semibold text-indigo-950">
            AI voices
          </p>
          <p className="mobile:text-lg tablet:text-lg laptop:text-xl text-gray-700">
            Select a premium voice across any style or language. Benefit from
            our AI-Driven text reader, infusing human-like intonation and
            inflections with exceptional accuracy.
          </p>
          <button className="bg-indigo-600 flex gap-2 w-1/2 justify-center items-center hover:bg-indigo-700 mt-4 p-4 rounded-lg text-white">
            Get Started for free
            <RiArrowRightLine />
          </button>
        </div>
        <div>
          <div className="flex flex-col gap-4 bg-white mobile:p-2 mb-4 mobile:mx-2 tablet:p-4 laptop:p-8 shadow-lg shadow-slate-500 rounded-2xl">
            <div className="flex justify-between">
              <p className="mobile:text-xs tablet:text-lg laptop:text-2xl text-indigo-500">
                300+ Voices
              </p>
              <RiArrowRightLine className="text-xl " />
            </div>
            <div className="flex justify-evenly">
              <button className=" top-20 bg-white hover:shadow-lg hover:shadow-slate-500  p-4 rounded-xl  flex items-center gap-2">
                <CiPlay1 />
                Levi
              </button>
              <button className=" top-20 bg-white hover:shadow-lg hover:shadow-slate-500  p-4 rounded-xl  flex items-center gap-2">
                <CiPlay1 />
                Charles
              </button>
              <button className=" top-20 bg-white hover:shadow-lg hover:shadow-slate-500  p-4 rounded-xl  flex items-center gap-2">
                <CiPlay1 />
                Ethan
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-4 bg-white mobile:p-2 mobile:mx-2 tablet:p-4 laptop:p-8 shadow-lg shadow-slate-500 rounded-2xl">
            <div className="flex justify-between">
              <p className="text-2xl text-indigo-500">40+ languages</p>
              <RiArrowRightLine className="text-xl " />
            </div>
            <div className="flex justify-evenly">
              <button className=" top-20 bg-white hover:shadow-lg hover:shadow-slate-500  p-4 rounded-xl  flex items-center gap-2">
                <CiPlay1 />
                Japanese
              </button>
              <button className=" top-20 bg-white hover:shadow-lg hover:shadow-slate-500  p-4 rounded-xl  flex items-center gap-2">
                <CiPlay1 />
                Spanish
              </button>
              <button className=" top-20 bg-white hover:shadow-lg hover:shadow-slate-500  p-4 rounded-xl  flex items-center gap-2">
                <CiPlay1 />
                Ethan
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroVid7;

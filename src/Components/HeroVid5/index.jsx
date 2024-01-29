import React from "react";
import { RiArrowRightLine, RiCameraLine } from "react-icons/ri";
import Carousel from "./Carousel";

const index = () => {
  return (
    <>
      <section className="bg-indigo-950 mobile:pb-2 tablet:pb-4 laptop:pb-8">
        <div className="flex flex-col justify-center mobile:p-4 tablet:p-8 laptop:p-16  items-center ">
          <p className="mobile:text-4xl tablet:text-7xl laptop:text-9xl text-white font-semibold mb-4">
            AI avatars
          </p>
          <p className="mobile:text-base tablet:text-lg laptop:text-2xl font-semibold text-gray-500">
            Choose your perfect avatar covering different{" "}
          </p>
          <p className="mobile:text-base tablet:text-lg laptop:text-2xl font-semibold text-gray-500 mb-4">
            ethnicities, ages, poses and clothes.{" "}
          </p>
          <div className="flex mobile:flex-col tablet:flex-col laptop:flex-row justify-evenly items-center mobile:w-11/12 tablet:w-4/5 laptop:w-3/5 gap-4">
            <button className="bg-indigo-600 flex gap-2 mobile:w-4/5 tablet:w-3/4 laptop:w-1/2 justify-center items-center hover:bg-indigo-700 mt-4 p-4 rounded-lg text-white">
              Get Started for free
              <RiArrowRightLine />
            </button>
            <p className="text-white">or</p>
            <button className="bg-indigo-900 border-2 border-indigo-500 flex gap-2 mobile:w-4/5 tablet:w-3/4 laptop:w-1/2 justify-center items-center mt-4 p-4 rounded-lg text-white">
              <RiCameraLine className="text-lg" />
              Create your own avatar
            </button>
          </div>
        </div>
        <Carousel direction={"forward"} />
        <Carousel direction={"reverse"} />
      </section>
    </>
  );
};

export default index;

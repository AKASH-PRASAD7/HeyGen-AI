import React, { useRef, useEffect } from "react";
import { CiPlay1 } from "react-icons/ci";
import Typed from "typed.js";

const HeroVid1 = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Hey there! Welcome to HeyGen. Where you can easily create fun,high-quality videos using our AI avatars and voices. In just a few clicks, you can generate custom videos for social media,presentations, education, and more.",
      ],
      typeSpeed: 40,
      backSpeed: 0,
      backDelay: 400,
      startDelay: 0,
      loop: true,
      cursorChar: "",
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <section className=" h-screen mobile:mx-2 tablet:mx-12 laptop:mx-20 mb-4 ">
        <div className="relative  bg-lime-600">
          <video
            className="absolute right-4 top-10 mobile:w-72 tablet:w-96 laptop:w-3/5 rounded-3xl shadow-indigo-600 shadow-2xl"
            src="https://resource.heygencdn.com/homepage/header_video_josh2.mp4"
            type="video/mp4"
            muted
            autoPlay
            loop
          ></video>
          <button className="absolute mobile:right-48 tablet:right-72 laptop:right-1/2 top-20 bg-black hover:bg-indigo-500 hover:opacity-100 text-white mobile:p-2 tablet:p-2 laptop:p-4 rounded-xl opacity-60  flex items-center gap-2">
            <CiPlay1 />
            Demo
          </button>
          <div className="bg-gray-200 shadow-xl shadow-indigo-600 absolute mobile:top-64 tablet:top-72 mobile:right-1/3 tablet:right-1/2 laptop:right-1/2 laptop:top-40 opacity-90 mobile:w-48 tablet:w-64 laptop:w-1/4 flex justify-center items-center mobile:gap-1 tablet:gap-2 laptop:gap-4 flex-col rounded-xl z-10 p-4">
            <div className="flex ">
              <img
                className="mobile:w-10 mobile:h-10 tablet:w-12 tablet:h-12 laptop:w-14 laptop:h-14 rounded-full shadow-md shadow-gray-500"
                src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6566cf826fcbe9010b22000e_hero_avatar_1.webp"
                alt="guy"
              />
              <img
                className="mobile:w-10 mobile:h-10 tablet:w-12 tablet:h-12 laptop:w-14 laptop:h-14rounded-full "
                src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6566cf82026f22092b01126f_hero_avatar_2.webp"
                alt="guy2"
              />
              <img
                className="mobile:w-10 mobile:h-10 tablet:w-12 tablet:h-12 laptop:w-14 laptop:h-14 rounded-full"
                src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6566cf837db334699b6f542b_hero_avatar_3.webp"
                alt="girl"
              />
            </div>

            <div className="w-11/12  ml-2 mb-2  p-4 rounded">
              <p className="w-4/5  ml-2 mb-2 text-indigo-500 text-lg ">
                Script
              </p>
              <p
                ref={el}
                className="h-64 mobile:text-xs tablet:text-base laptop:text-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroVid1;

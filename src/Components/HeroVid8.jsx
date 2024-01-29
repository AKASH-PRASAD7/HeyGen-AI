import React, { useRef, useEffect } from "react";

import Typed from "typed.js";

const HeroVid8 = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Hey there! Welcome to HeyGen! This is what we sound like in another language.",
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
      <section className="grid mobile:grid-rows-2 tablet:grid-rows-2 laptop:grid-cols-2 gap-8 mobile:p-2 tablet:p-6 laptop:p-4 pt-2">
        <div className="bg-gray-200 opacity-90 shadow-xl shadow-indigo-600 my-28 mobile:mx-8 tablet:mx-12 laptop:mx-24  flex justify-center items-center gap-4 flex-col rounded-xl mobile:p-2 tablet:p-2  laptop:p-4">
          <div className="w-11/12  ml-2 mb-2  p-4 rounded">
            <p className="w-4/5  ml-2 mb-2 text-indigo-500 text-lg ">Script</p>
            <p ref={el} className="h-64 text-lg" />
          </div>
          <button className="p-4 text-lg bg-indigo-950 mobile:w-2/3 tablet:w-1/3 laptop:w-2/3 rounded-3xl text-white">
            Genrate Voice
          </button>
        </div>
        <div className="relative mobile:p-2 tablet:p-4  laptop:p-8 ">
          <video
            className="absolute top-10 mobile:w-40 mobile:h-60 tablet:w-48 tablet:h-60 laptop:h-64 laptop:w-52 mobile:left-28 tablet:left-40 laptop:left-52 object-cover rounded-3xl shadow-indigo-600 shadow-2xl"
            src="https://resource.heygencdn.com/homepage/aivoices3_2.mp4"
            type="video/mp4"
            muted
            autoPlay
            loop
          />
          <video
            className="absolute top-52  mobile:w-40 mobile:h-60 tablet:w-48 tablet:h-60 laptop:h-64 laptop:w-52 mobile:left-2 tablet:left-8 laptop:left-10 object-cover rounded-3xl shadow-indigo-600 shadow-2xl"
            src="https://resource.heygencdn.com/homepage/aivoices1_2.mp4"
            type="video/mp4"
            muted
            autoPlay
            loop
          />
          <video
            className="absolute top-52  mobile:w-40 mobile:h-60 tablet:w-48 tablet:h-60 laptop:h-64 laptop:w-52 mobile:left-44 tablet:left-72  laptop:left-80 object-cover rounded-3xl shadow-indigo-600 shadow-2xl"
            src="https://resource.heygencdn.com/homepage/aivoices4_2.mp4"
            type="video/mp4"
            muted
            autoPlay
            loop
          />
          <video
            className="absolute bottom-10 mobile:w-40 mobile:h-60 tablet:w-48 tablet:h-60 laptop:h-64 laptop:w-52 mobile:left-28 tablet:left-40 object-cover rounded-3xl shadow-indigo-600 shadow-2xl"
            src="https://resource.heygencdn.com/homepage/aivoices2_2.mp4"
            type="video/mp4"
            muted
            autoPlay
            loop
          />
        </div>
      </section>
    </>
  );
};

export default HeroVid8;

import React from "react";
import { RiArrowRightLine } from "react-icons/ri";

const Hero = () => {
  return (
    <>
      <section>
        <div className="flex flex-col items-center justify-center p-12  ">
          <p className="mobile:text-3xl tablet:text-5xl laptop:text-7xl text-indigo-500 font-semibold ">
            AI-powered video
          </p>
          <p className="mobile:text-3xl tablet:text-5xl laptop:text-7xl font-semibold ">
            creations at scale
          </p>
          <p className="mobile:text-sm tablet:text-lg laptop:text-2xl mt-6 ">
            Effortlessly produce studio quality videos
          </p>
          <p className="mobile:text-sm tablet:text-lg laptop:text-2xl">
            with AI-generated avatars and voices.
          </p>
          <button className="bg-indigo-600 flex gap-2 justify-center items-center hover:bg-indigo-500 mt-4 p-4 rounded-lg text-white">
            Get Started for free
            <RiArrowRightLine />
          </button>
          <p className="text-xs p-2">No credit card needed</p>
        </div>
        <div className="logos mobile:hidden tablet:block mx-48">
          <div className="logos-slide">
            <img
              src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656788726e54fd474715a07e_logo01.webp"
              loading="lazy"
              alt="Accenture"
              className="logos_img"
            />
            <img
              src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65678873deec7d7e37bdeea1_logo02.webp"
              loading="lazy"
              alt="Amazon"
              className="logos_img"
            />
            <img
              src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656788732d026f4cc9df4da9_logo03.webp"
              loading="lazy"
              alt="Al Jazeera"
              className="logos_img"
            />
            <img
              src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65678877e4cf298e0b0fde90_logo11.webp"
              loading="lazy"
              alt="KPMG"
              className="logos_img"
            />
            <img
              src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65678873c24df339f07d9349_logo04.webp"
              loading="lazy"
              alt="KW"
              className="logos_img"
            />
            <img
              src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656788737283d01b95257cfe_logo05.webp"
              loading="lazy"
              alt="NVIDIA"
              className="logos_img"
            />
            <img
              src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6567887342c8b40c4b7cc7b7_logo07.webp"
              loading="lazy"
              alt="Pattern"
              className="logos_img"
            />
            <img
              src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656788738924578962e7faf2_logo08.webp"
              loading="lazy"
              alt="Salesforce"
              className="logos_img"
            />
            <img
              src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65678877c7f2428b8355f0dc_logo10.webp"
              loading="lazy"
              alt="Volvo"
              className="logos_img"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

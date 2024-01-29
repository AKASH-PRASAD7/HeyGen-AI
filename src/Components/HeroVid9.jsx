import React from "react";
import { CiPlay1 } from "react-icons/ci";
import img from "../assets/vid9-1.jpg";
import img2 from "../assets/vid9-2.jpg";

const HeroVid9 = () => {
  return (
    <>
      <section className="bg-indigo-600 mobile:hidden tablet:hidden laptop:block  ">
        <p className="mobile:text-4xl tablet:text-7xl laptop:text-9xl  text-white font-semibold mobile:pt-2 tablet:pt-4 laptop:pt-8 pl-8">
          Features for scale
        </p>
        <p className="mobile:text-base tablet:text-lg laptop:text-xl text-white pl-8 pt-2 mb-4">
          A full-featured platform for flawless video creation.
        </p>
        <section
          style={{ height: "30rem" }}
          className="relative grid gap-8 grid-cols-2 mx-4 "
        >
          <video
            className="  w-full h-2/5 object-cover rounded-3xl shadow-indigo-600 shadow-2xl"
            src="https://resource.heygencdn.com/homepage/vt5s2.mp4"
            type="video/mp4"
            muted
            autoPlay
            loop
          />
          <button className="absolute top-10 left-5 bg-black hover:bg-indigo-500 hover:opacity-100 text-white p-4 rounded-xl opacity-60  flex items-center gap-2">
            <CiPlay1 />
            Nikki in Spanish
          </button>
          <div className="absolute top-40 w-1/2 p-8 flex flex-col gap-2 justify-center">
            <p className="text-2xl font-semibold text-white">
              Video translator
            </p>
            <p className="text-base text-white">
              Effortlessly translate your videos using our one-click solution
              that clones your natural speaking voice and style for seamless
              delivery in other languages.
            </p>
            <button className="bg-indigo-600  w-1/4 justify-center items-center hover:bg-indigo-700 mt-4 p-4 rounded-lg text-white">
              Learn more
            </button>
          </div>
          <div
            style={{
              backgroundImage: `url("https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656762e9c1a39be7ceeddf90_feature-p-800.png")`,
            }}
            className="h-2/5 bg-white rounded-3xl"
          >
            <p className="text-2xl font-semibold pt-8 pl-8">API</p>
            <p className="text-lg pl-8">
              Integrate HeyGen’s powerful AI capabilities into your product and
              create amazing avatar videos programmatically with HeyGen's API.
            </p>
          </div>
        </section>

        <section
          style={{ height: "30rem" }}
          className="relative grid gap-8 grid-cols-3 mx-4 "
        >
          <div className="relative col-span-2 h-full bg-slate-300 rounded-2xl">
            <video
              className="absolute bottom-0  w-full h-2/3 p-4 object-cover rounded-3xl shadow-indigo-600 shadow-2xl"
              src="https://resource.heygencdn.com/homepage/scriptgenai2.mp4"
              type="video/mp4"
              muted
              autoPlay
              loop
            />

            <div className="absolute top-10  p-8 flex flex-col gap-2 justify-center">
              <p className="text-2xl font-semibold">ChatGPT script writer</p>
              <p className="text-base ">
                Accelerate your video creation with our AI writing assistant.
              </p>
            </div>
          </div>
          <div className=" bg-indigo-900 p-4 bg-cover rounded-3xl">
            <p className="text-2xl text-white font-semibold pt-8 pl-8">
              AI outfits
            </p>
            <p className="text-lg text-white pl-8">
              Elevate your avatar for any occasion with a wide range of
              customizable clothing options.
            </p>
            <img
              className="bg-cover"
              src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6564349a75db541f49c4abee_feature_4-p-500.webp"
              alt="ai"
            />
          </div>
        </section>
        <section className="grid grid-cols-3 px-4">
          <div className="col-span-1 bg-indigo-500 opacity-80 m-4 bg-cover rounded-3xl">
            <p className="text-2xl text-white font-semibold pt-8 pl-8">
              Integrations
            </p>
            <p className="text-lg text-white pl-8">
              Using HeyGen couldn’t be easier, streamline your video creation
              process from your favorite platform.
            </p>
            <img className="bg-cover rounded-b-3xl" src={img} alt="ai" />
          </div>
          <div className="col-span-2 bg-slate-200  m-4 bg-cover rounded-3xl">
            <p className="text-2xl  font-semibold pt-8 pl-8">
              Templates for everything
            </p>

            <img className="bg-cover rounded-b-3xl" src={img2} alt="ai" />
          </div>
        </section>
      </section>
    </>
  );
};

export default HeroVid9;

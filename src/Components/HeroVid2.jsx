import React from "react";
import { CiPlay1 } from "react-icons/ci";
import { RiArrowRightLine } from "react-icons/ri";

const HeroVid2 = () => {
  return (
    <>
      <section className="mobile:px-2 tablet:px-6 laptop:px-12 mobile:py-8 tablet:py-24 laptop:py-48 text-white bg-indigo-500">
        <p className="mobile:text-4xl tablet:text-7xl laptop:text-9xl font-semibold ">
          Create videos
        </p>
        <section className="flex gap-8">
          <div className="flex flex-col gap-8">
            <p className="mobile:text-4xl tablet:text-7xl laptop:text-9xl font-semibold mb-4">
              for every team
            </p>
            <div className="relative">
              <video
                className="mobile:rouded-xl tablet:rouded-xl laptop:rounded-3xl"
                src="https://resource.heygencdn.com/homepage/header_video_studio_avatar2.mp4"
                type="video/mp4"
                muted
                autoPlay
                loop
              ></video>
              <div className="absolute mobile:hidden tablet:hidden laptop:flex mobile:px-0 laptop:p-2 tablet:px-2 laptop:px-8 bottom-0 w-full flex justify-around rounded-b-3xl items-center bg-gray-950">
                <div className="tablet:p-0 lapto:p-4">
                  <p className="mobile:text-xs tablet:text-lg laptop:text-2xl font-semibold">
                    Sales outreach
                  </p>
                  <p className="mobile:text-base tablet:text-lg laptop:text-2xl text-indigo-400 font-semibold">
                    that converts
                  </p>
                  <p className="tablet:text-xs laptop:text-sm m-2 text-indigo-400 font-semibold">
                    Create personalized outreach videos at scale
                  </p>
                </div>
                <div className="flex  justify-between gap-4 items-center">
                  <button className="bg-indigo-600 flex gap-2 justify-center items-center hover:bg-indigo-500 mt-4 p-2  rounded-lg text-white">
                    Get Started
                    <RiArrowRightLine />
                  </button>
                  <button className=" bg-black mt-2 text-white p-4 rounded-xl opacity-60  flex items-center gap-2">
                    <CiPlay1 />
                  </button>
                </div>
              </div>
            </div>
            <div className="relative">
              <video
                className="mobile:rouded-xl tablet:rouded-xl laptop:rounded-3xl"
                src="https://resource.heygencdn.com/homepage/header_video_instant_avatar2.mp4"
                type="video/mp4"
                muted
                autoPlay
                loop
              ></video>
              <div className="absolute mobile:hidden tablet:hidden laptop:flex mobile:px-0 laptop:p-2 tablet:px-2 laptop:px-8 bottom-0 w-full flex justify-around rounded-b-3xl items-center bg-gray-950">
                <div className="tablet:p-0 lapto:p-4">
                  <p className="mobile:text-xs tablet:text-lg laptop:text-2xl font-semibold">
                    Content marketing
                  </p>
                  <p className="mobile:text-base tablet:text-lg laptop:text-2xl text-indigo-400 font-semibold">
                    that engage
                  </p>
                  <p className="tablet:text-xs laptop:text-sm m-2 text-indigo-400 font-semibold">
                    Supercharge your content calendar with videos
                  </p>
                </div>
                <div className="flex  justify-between gap-4 items-center">
                  <button className="bg-indigo-600 flex gap-2 justify-center items-center hover:bg-indigo-500 mt-4 p-2  rounded-lg text-white">
                    Get Started
                    <RiArrowRightLine />
                  </button>
                  <button className=" bg-black mt-2 text-white p-4 rounded-xl opacity-60  flex items-center gap-2">
                    <CiPlay1 />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="text-xl py-8 mb-4">
              Engage, explain, entertain. AI-powered video creation for any
              need.
            </p>
            <div className="flex flex-col gap-8">
              <div className="relative">
                <video
                  className="mobile:rouded-xl tablet:rouded-xl laptop:rounded-3xl"
                  src="https://resource.heygencdn.com/homepage/usecase_productmarketing2.mp4"
                  type="video/mp4"
                  muted
                  autoPlay
                  loop
                ></video>
                <div className="absolute mobile:hidden tablet:hidden laptop:flex p-2 px-8 bottom-0 w-full flex justify-around rounded-b-3xl items-center bg-gray-950">
                  <div className="p-4">
                    <p className="mobile:text-base tablet:text-lg font-semibold">
                      Product Marketing
                    </p>
                    <p className="mobile:text-base tablet:text-lg text-indigo-400 font-semibold">
                      that resonates
                    </p>
                    <p className="text-sm text-indigo-400 font-semibold">
                      Produce engaging & concise product videos
                    </p>
                  </div>
                  <div className="flex  justify-between gap-4 items-center">
                    <button className="bg-indigo-600 flex gap-2 justify-center items-center w-32 hover:bg-indigo-500 mt-4 p-2  rounded-lg text-white">
                      Get Started
                      <RiArrowRightLine />
                    </button>
                    <button className=" bg-black mt-2 text-white p-4 rounded-xl opacity-60  flex items-center gap-2">
                      <CiPlay1 />
                    </button>
                  </div>
                </div>
              </div>
              <div className="relative">
                <video
                  className="mobile:rouded-xl tablet:rouded-xl laptop:rounded-3xl"
                  src="https://resource.heygencdn.com/website/vera_remove/usecase_lnd2_new_output.mp4"
                  type="video/mp4"
                  muted
                  autoPlay
                  loop
                ></video>
                <div className="absolute mobile:hidden tablet:hidden laptop:flex p-2 px-8 bottom-0 w-full flex justify-around rounded-b-3xl items-center bg-gray-950">
                  <div className="p-4">
                    <p className="mobile:text-base tablet:text-lg font-semibold">
                      Learning & development
                    </p>
                    <p className="mobile:text-base tablet:text-lg text-indigo-400 font-semibold">
                      that teaches
                    </p>
                    <p className="text-sm text-indigo-400 font-semibold">
                      Create training videos your team will actually watch
                    </p>
                  </div>
                  <div className="flex  justify-between gap-4 items-center">
                    <button className="bg-indigo-600 flex gap-2 justify-center items-center w-32 hover:bg-indigo-500 mt-4 p-2  rounded-lg text-white">
                      Get Started
                      <RiArrowRightLine />
                    </button>
                    <button className=" bg-black mt-2 text-white p-4 rounded-xl opacity-60  flex items-center gap-2">
                      <CiPlay1 />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default HeroVid2;

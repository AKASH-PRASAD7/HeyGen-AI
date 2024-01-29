import React from "react";

const Vid4Comp = ({ num, heading, desc, img }) => {
  return (
    <>
      <section className="bg-white rounded-3xl flex flex-col mobile:p-2 tablet:p-4 laptop:p-8 mb-2 ">
        <p className="mobile:text-3xl tablet:text-6xl laptop:text-9xl mb-2 text-indigo-600 font-semibold">
          {num}
        </p>
        <p className="mobile:text-lg tablet:text-2xl laptop:text-3xl mb-2 font-semibold text-blue-950">
          {heading}
        </p>
        <p className="mobile:text-xs tablet:text-xs laptop:text-base mb-8">
          {desc}
        </p>
        <img src={img} alt="girl" />
      </section>
    </>
  );
};

export default Vid4Comp;

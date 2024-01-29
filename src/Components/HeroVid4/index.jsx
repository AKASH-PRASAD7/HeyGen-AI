import React from "react";
import Vid4Card from "./Vid4Comp";
import img1 from "../../assets/Vid4-1.jpg";
import img2 from "../../assets/Vid4-2.jpg";

const index = () => {
  return (
    <>
      <section className="grid mobile:grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-3 gap-4 mobile:mt-0 tablet:mt-4 laptop:mt-8 mobile:mx-2 tablet:mx-4 laptop:mx-12">
        <Vid4Card
          num={"01"}
          heading={"Create or choose an avatar"}
          desc={"Choose from over 100+ AI avatars or customize your own."}
          img={
            "https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65673ea2d58453c68698c44f_img01-p-500.webp"
          }
        />
        <Vid4Card
          num={"02"}
          heading={"Record or choose a voice"}
          desc={
            "Choose from a collection of high-quality voices or record your own."
          }
          img={img1}
        />
        <Vid4Card
          num={"03"}
          heading={"Select a template or start from scratch"}
          desc={
            "Select from an extensive array of ready-to-use templates for any scenario, or begin with a clean slate."
          }
          img={img2}
        />
      </section>
    </>
  );
};

export default index;

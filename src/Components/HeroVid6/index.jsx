import React from "react";
import HeroVid6Comp from "./HeroVid6Comp";

const index = () => {
  return (
    <>
      <section className="bg-indigo-950">
        <HeroVid6Comp
          heading={"Instant avatar"}
          desc={"A lifestyle avatar in a natural setting"}
          url={"https://resource.heygencdn.com/homepage/AIavatar_instant4.mp4"}
        />
        <HeroVid6Comp
          heading={"Studio avatar"}
          desc={"A professional-grade avatar for diverse application"}
          url={
            "https://resource.heygencdn.com/website/vera_remove/aiavatar_studio3.mp4"
          }
        />
        <HeroVid6Comp
          heading={"Photo avatar"}
          desc={"A dynamically animated photograph"}
          url={"https://resource.heygencdn.com/homepage/AIavatar_photo4.mp4"}
        />
      </section>
    </>
  );
};

export default index;

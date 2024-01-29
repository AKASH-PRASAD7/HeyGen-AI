import React from "react";

const DropdownNavMenu = ({ id }) => {
  const Obj = {
    1: [
      "Sales Outreach",
      "Product Marketing",
      "Content Marketing",
      "Learning & Development",
    ],
    2: [
      "Instant Avatar",
      "Studio Avatar",
      "Video Translate",
      "Voice Cloning",
      "Photo Avatar",
      "AI Voices",
      "Personalized Video",
      "Streaming Avatar",
      "AI Avatars",
      "Templates",
      "Zapier",
    ],
    3: ["Blog", "Weekly Webinar", "Case Studies", "Help Center"],
  };

  return (
    <>
      <section>
        <div className="bg-white rounded-xl ">
          {Obj[+id]?.map((item, index) => {
            return <p id={index}>{item}</p>;
          })}
        </div>
      </section>
    </>
  );
};

export default DropdownNavMenu;

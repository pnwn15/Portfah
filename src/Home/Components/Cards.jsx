import React from "react";

function Cards() {
  const cardData = [
    {
      id: 1,
      title: "Product Design",
      paragraph:
        "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
      img: "/image/Skill1.png",
    },
    {
      id: 2,
      title: "Visual Design",
      paragraph:
        "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
      img: "/image/Skill2.png",
    },
    {
      id: 3,
      title: "Art Direction",
      paragraph:
        "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
      img: "/image/Skill3.png",
    },
  ];
  return (
    <div className="md:flex flex-col flex-wrap md:h-[450px] h-auto   mt-3 justify-evenly p-4">
      {cardData.map((item) => (
        <div
          key={item.id}
          className="md:w-1/4 mx-auto gap-5 w-full h-80 my-auto rounded-2xl  overflow-auto text-center flex flex-col justify-center items-center"
        >
          <img
            src={item.img}
            alt={item.title}
            className="w-[124px] mx-auto object-cover"
          />
          <div className="p-4 tracking-wide space-y-3">
            <h2 className="text-xl  font-semibold">{item.title}</h2>
            <p className="text-sm text-black font-normal">{item.paragraph}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;

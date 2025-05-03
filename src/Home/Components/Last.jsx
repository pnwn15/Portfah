import React from "react";

function Last() {
  const cards = [
    {
      id: 1,
      img: "image/lastest1.png",
      title: "Project title",
      description:
        "UI, Art drection",
    },
    {
      id: 2,
      img: "image/lastest2.png",
      title: "Project title",
      description:
        "UI, Art drection",
    },
    {
      id: 3,
      img: "image/lastest3.png",
      title: "Project title",
      description:
        "UI, Art drection",
    },
    {
      id: 4,
      img: "image/lastest4.png",
      title: "Project title",
      description:
        "UI, Art drection",
    },
    {
      id: 5,
      img: "image/lastest5.png",
      title: "Project title",
      description:
        "UI, Art drection",
    },
    {
      id: 6,
      img: "image/lastest6.png",
      title: "Project title",
      description:
        "UI, Art drection",
    },
  ];
  return (
    <div className="h-full w-full mt-5 ">
      <div className="w-full flex text-[36px] mb-8 font-semibold justify-center items-center text-center">
        Latest work
      </div>
      <div className="w-full flex  justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-xl">
          {cards.map((card) => (
            <div
              key={card.id}
              className=""
            >
              <a href="#">
                <img
                  className="rounded-t-lg w-full"
                  src={card.img}
                  alt={card.title}
                />
              </a>
              <div className="p-1">
                  <h5 className=" text-[20px] font-semibold tracking-tight text-black ">
                    {card.title}
                  </h5>
                <p className="mb-3 font-normal text-black ">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Last;

import React from "react";

function Testimonial() {
  const cards = [
    {
      id: 1,
      title:
        "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
      img: "/image/Client.png",
      content: "Gemma Nolen",
      content1: "Google",
    },
    {
      id: 2,
      title:
        "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
      img: "/image/Client.png",
      content: "Gemma Nolen",
      content1: "Google",
    },
    {
      id: 3,
      title:
        "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
      img: "/image/Client.png",
      content: "Gemma Nolen",
      content1: "Google",
    },
    {
      id: 4,
      title:
        "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
      img: "/image/Client.png",
      content: "เนื้อหาของการ์ดที่ 4",
      content1: "Google",
    },
    {
      id: 5,
      title:
        "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
      img: "/image/Client.png",
      content: "Gemma Nolen",
      content1: "Google",
    },
    {
      id: 6,
      title:
        "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
      img: "/image/Client.png",
      content: "Gemma Nolen",
      content1: "Google",
    },
  ];

  return (
    <div className="h-full w-full  ">
      <div className="w-full flex text-[36px] mb-4 font-semibold justify-center items-center text-center">
        Latest work
      </div>
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-xl w-full px-4">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-[#F3F3F3] h-[330px] shadow-md p-6 w-full flex justify-center items-center"
            >
              <div className="text-center space-y-5 w-[300px]">
                <h5 className="text-[16px] font-semibold text-gray-900">
                  {card.title}
                </h5>
                <div className="flex justify-center gap-4 items-center">
                  <img
                    src={card.img}
                    alt=""
                    className="w-20 h-20 object-cover rounded-full"
                  />
                  <div className="flex flex-col justify-center text-start">
                    <div className="flex space-x-1 mb-2">
                      {[...Array(5)].map((_, index) => (
                        <svg
                          key={index}
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 text-black hover:text-yellow-400 cursor-pointer transition-colors duration-200"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 .587l3.668 7.568L24 9.748l-6 5.845 1.417 8.265L12 18.896l-7.417 4.962L6 15.593 0 9.748l8.332-1.593z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-lg font-bold tracking-wide text-black">
                      {card.content}
                    </p>
                    <p className="text-base text-black">{card.content1}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonial;

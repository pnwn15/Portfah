import React from "react";

function Logobar() {
  const image = [
    { img: "image/logobar1.png" },
    { img: "image/logobar2.png" },
    { img: "image/logobar3.png" },
    { img: "image/logobar4.png" },
    { img: "image/logobar1.png" },
  ];
  return (
    <div className="w-full h-[130px] overflow-auto">
      <div className="flex items-center max-w-7xl mx-auto justify-between animate-scroll space-x-6 px-4">
        {image.map((item, index) => (
          <div
            key={index}
            className="h-28 flex items-center justify-center min-w-[120px]"
          >
            <img src={item.img} alt="" className="max-h-full" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Logobar;

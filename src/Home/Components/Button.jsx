import React from "react";

function Button({name}) {
  return (
    <button type="button" class="text-white md:w-1/4 w-1/2 h-[60px] bg-[#2D2D2D] hover:bg-cyan-500 shadow-lg  dark:shadow-lg  font-medium text-sm px-5 py-2.5 text-center me-2 mb-2">{name}</button>
  );
}

export default Button;

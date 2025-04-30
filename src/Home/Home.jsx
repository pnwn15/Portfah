import React from "react";
import Button from "./Components/Button";
import Logobar from "./Components/Logobar";
import Cards from "./Components/Cards";
import Last from "./Components/Last";
import Testimonial from "./Components/Testimonial";

function Home() {
  return (
    <>
      <section class="bg-white h-auto dark:bg-gray-900">
        <div class="grid max-w-screen-xl  px-4 py-12 mt-12 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-medium tracking-tight leading-none md:text-5xl xl:text-[20px] dark:text-white">
              Branding | Image making
            </h1>
            <h1 class="max-w-2xl mb-4 text-4xl font-medium tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Visual Designer
            </h1>
            <p class="max-w-2xl mb-6 font-medium text-black lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              This is a template Figma file, turned into code using Anima. Learn
              more at AnimaApp.com
            </p>
            <div className="w-full h-full">
              <Button name="Contact"/>
            </div>
          </div>
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
              alt="mockup"
            />
          </div>
        </div>
      </section>
      <div className="w-full h-full flex flex-col justify-between">
        <Logobar />
        <div className="w-full flex flex-wrap justify-center">
          <Cards />
        </div>
        <Last />
        <Testimonial />
      </div>
    </>
  );
}

export default Home;

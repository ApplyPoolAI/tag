import React from "react";

export default function Detail({ active = false, data }) {
  const headings = data.heading.split(".");

  return (
    <div
      className={` pl-5 pr-5 sm:pl-24 py-10 sm:py-16 absolute left-0 top-0 flex flex-col w-full justify-center sm:h-screen transition-all ${
        active ? " opacity-100 z-40" : "z-30 opacity-0"
      }`}
    >
      <img src="./tag-logo.png" alt="" className="mt-[10vh] sm:mt-0 h-10 sm:h-16 w-fit -ml-[10px] sm:-ml-2" />
      <h2 className="text-2xl sm:text-[3.6vw] leading-none font-medium mb-6 break-words sm:pr-[10%] m14:pr-[15%]">
        {headings[0]}
        <span className="text-sec">.</span>
        {headings[1]}
      </h2>
      <ul className="text-sm sm:text-2xl list-disc ml-4 list-outside font-normal">
        {data.detail.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

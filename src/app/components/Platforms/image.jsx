import React from "react";
import StickyButton from "../StickyButton";

export default function Image({ item }) {

  return (
    <div className={`pl-5 pr-5 pt-5 pb-10 sm:pl-0 sm:pr-24 sm:pt-16 sm:pb-32 h-full w-full flex justify-end items-end relative`} id="platformsSec">
      <img
        src={item.img}
        alt="workImage"
        className="w-auto block object-contain rounded-sm sm:rounded-3xl"
      />
      <div className="absolute bottom-12 sm:bottom-36 right-20 sm:right-56 translate-x-1/2 translate-y-1/2">
        <a href={item.src} target="_blank">
        <StickyButton >
        Join now
        </StickyButton>
        </a>
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import ReactPlayer from "react-player";
import { IoClose } from "react-icons/io5";

export default function Video() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="mb-[-100vh] relative">
      <div
      style={{ background: "url(./videoBg.png)", backgroundSize:"contain" }}
      className="h-[400px] sm:h-screen w-screen sticky top-0"
    >
      {!isPlaying && (
        <button
          onClick={handlePlayPause}
          className={`rounded-full w-[50px] sm:w-[80px] aspect-square bg-main text-light flex items-center justify-center text-sm sm:text-xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 hover:scale-110 transition-all duration-500 ${
            isPlaying ? "opacity-0 hover:opacity-100" : "opacity-100"
          }`}
        >
          <FaPlay />
        </button>
      )}

      <div className=" absolute w-[calc(100%-40px)] sm:w-[70vw] aspect-video left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {isPlaying && (
          <div
            className="rounded-xl overflow-hidden relative"
            style={{ boxShadow: "0 0 100px 0 #00000040" }}
          >
            <ReactPlayer url="./video.mp4" width="640" height="360" controls />
            {isPlaying && (
              <button
                onClick={handlePlayPause}
                className={`rounded-full w-[30px] sm:w-[50px] m-2 sm:m-4 aspect-square bg-main text-light flex items-center justify-center absolute right-0 top-0 z-30 hover:scale-110 transition-all duration-500  sm:text-2xl opacity-50 hover:opacity-100`}
              >
                <IoClose />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
    
    <div className="min-h-screen h-screen"></div>

    </section>
  );
}

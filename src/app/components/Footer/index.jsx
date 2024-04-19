"use client";
import React, { useEffect, useRef } from "react";
import LinkEffect from "../LinkEffect";
import Marquee from "../Marquee";
import FooterContent from "./FooterContent";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export default function Footer() {
  const preFooter = useRef();

  const timeline = gsap.timeline();

  const links = [
    {
      label: "ApplyPool.ai",
      url: "https://applypool.ai/",
    },
    {
      label: "ApplyPal.io",
      url: "https://applypal.ai/",
    },
    {
      label: "ApplyPool.com",
      url: "https://applypool.com/",
    },
    {
      label: "ApplyforInternships.com",
      url: "https://applyforinternships.com/",
    },
    {
      label: "ApplyforUniversity.com",
      url: "https://applyforuniversity.com/",
    },
    {
      label: "ApplyforMedicine.com",
      url: "https://applyformedicine.com/",
    },
  ];

  useEffect(() => {
    timeline.fromTo(
      preFooter.current,
      {
        transform: "scale3d(1,1,1)",
      },
      {
        transform: "scale3d(0.95,0.95,1)",
      },
      "a"
    );

    ScrollTrigger.create({
      trigger: preFooter.current,
      start: "top top",
      end: "+=400",
      scrub: 1,
      marker: false,
      animation: timeline,
    });
  }, []);

  return (
    <section className="w-full h-fit">
      <div
        ref={preFooter}
        className="w-full min-h-screen relative z-20 overflow-hidden flex flex-col justify-around sm:justify-between items-center bg-main text-light rounded-3xl py-5 sm:py-16 origin-bottom"
      >
        <div>
          <p className="text-2xl sm:text-[3.5vw] font-normal text-center leading-none">
            We take peer-to-peer to <br />a whole new level.
          </p>
        </div>

        <div className="w-[80%] border-b border-[#ffffff50] h-1"></div>

        <div className="flex flex-col gap-2 sm:gap-8 items-center">
          <div className="flex gap-2 sm:gap-8  flex-wrap justify-center">
            {links.slice(0, 3).map((item, index) => {
              return (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  className="rounded-full border border-light flex text-base sm:text-2xl"
                >
                  <LinkEffect text={item.label} reddot />
                </a>
              );
            })}
          </div>
          <div className="flex gap-2 sm:gap-8 flex-wrap justify-center">
            {links.slice(3, 6).map((item, index) => {
              return (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  className="rounded-full border border-light flex text-base sm:text-2xl"
                >
                  <LinkEffect text={item.label} reddot />
                </a>
              );
            })}
          </div>
        </div>

        <div className="text-3xl sm:text-[3.5vw] leading-none">
            <Marquee direction={"left"} speed={0.2} />
            <Marquee direction={"right"} speed={0.2} />
        </div>
      </div>

      <div className="-mt-[100vh]">
        <div className="min-h-screen h-screen"></div>
      </div>
      <div className="sticky bottom-0 w-full px-5 py-10 sm:px-24 sm:py-16 text-main">
        <FooterContent/>
      </div>
    </section>
  );
}

"use client";
import React, { useLayoutEffect, useRef } from "react";
import ScrollerItem from "./ScrollerItem";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../Button";
gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
  const aboutCont = useRef();
  const aboutRef = useRef();
  const aboutSec = useRef();
  const stericRef = useRef();

  useLayoutEffect(() => {
    // GSAP animation for the steric rotation

    var paddingsize = window.innerWidth > 1536 ? 240 : 110;

    let xposition =
      window.innerWidth > 500
        ? aboutRef.current.offsetWidth - window.innerWidth / 2 + paddingsize
        : aboutRef.current.offsetWidth + 100;

    //GSAP animation for the horizontal scrolling
    if (true) {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: aboutSec.current,
            start: "top top",
            end: () => "+=" + aboutRef.current.offsetWidth * 1.5 + "px",
            scrub: true,
            pin: true,
            anticipatePin: 1,
          },
        })
        .to(
          aboutRef.current,
          {
            x: -xposition + "px",
            ease: "none",
          },
          "a"
        )
        .to(
          stericRef.current,
          {
            rotation: 720,
            ease: "linear",
          },
          "a"
        );
    } else {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: aboutSec.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        })
        .to(
          stericRef.current,
          {
            rotation: 720,
            ease: "linear",
          },
          "a"
        );
    }
  }, []);

  return (
    <section
      ref={aboutCont}
      className="w-full h-fit overflow-hidden bg-light text-main"
    >
      <div
        ref={aboutSec}
        className="heroSection h-screen w-full overflow-hidden relative px-5 sm:px-16 2xl:px-32 py-10 sm:py-12 flex flex-col justify-between"
      >
        {/* horizontal scroller */}
        <div className="flex pt-5 sm:pt-10">
          <div
            ref={aboutRef}
            className="w-fit text-3xl sm:text-6xl m14:text-[80px] leading-normal flex flex-nowrap"
          >
            <div>
              <div className="flex whitespace-nowrap flex-nowrap items-center mt-4 2xl:mt-8">
                <img
                  src="./tag-logo.png"
                  alt=""
                  className="w-[3ch] aspect-square object-contain mr-4 sm:mr-10"
                />
                <ScrollerItem
                  text="Allow global"
                  imageSrc="./icons/social science.png"
                  altText="specialize"
                />
                <ScrollerItem
                  text="opportunities to"
                  imageSrc="./icons/Medicine.png"
                  altText="crafting"
                />
                <ScrollerItem
                  text="reach out to you"
                  imageSrc="./icons/mentors.png"
                  altText="products"
                />
                <ScrollerItem
                  text="24 hours a day."
                  imageSrc="./icons/design.png"
                  altText="care"
                />
              </div>

              {/* <div className="sm:hidden flex flex-wrap whitespace-wrap items-center mt-4 2xl:mt-8 pb-8">
              <img src="./tag-logo.png" alt="" className="w-[3ch] inline-block aspect-square object-contain mr-4 sm:mr-10" />
              Start your <img src="./icons/social science.png" alt="" className="w-[3ch] inline-block aspect-square object-contain mr-4 sm:mr-10" />
              journey now <img src="./icons/Medicine.png" alt="" className="w-[3ch] inline-block aspect-square object-contain mr-4 sm:mr-10" />
              not when <img src="./icons/mentors.png" alt="" className="w-[3ch] inline-block aspect-square object-contain mr-4 sm:mr-10" />
              you enrol. <img src="./icons/design.png" alt="" className="w-[3ch] inline-block aspect-square object-contain mr-4 sm:mr-10" />
            </div> */}
            </div>
          </div>
        </div>

        {/* detail */}
        <div className="flex-grow flex items-start sm:items-end flex-col-reverse sm:flex-row  gap-[20vh] sm:gap-0">
          <div className="sm:w-[50%] m14:w-[60%]">
            <div className="h-44 sm:h-44 m14:h-64 w-fit 2xl:mb-4">
              <a href="https://applypool.ai/" target="_blank">
                <img
                  ref={stericRef}
                  src="./rotate.png"
                  className="w-full h-full"
                  alt="steric"
                />
              </a>
            </div>
            <p className="mt-6 text-base sm:text-xl max-w-[40ch]">
              <b>We flip the process, putting you in control.</b>
            </p>
          </div>
          <div className="sm:w-[50%] m14:w-[40%]">
            <p className="mb-4 text-base sm:text-xl max-w-[40ch]">
              25,000 universities, 10,000 potential employers in over 150
              countries but <b>only one is right for you</b>. Now you can use
              the wisdom of mentors <b>together</b> with AI to help them find
              you.
            </p>
            <a href="https://applypool.ai/" target="_blank">
              <Button theme={"light"}>Join for free</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

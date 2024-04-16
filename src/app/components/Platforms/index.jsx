"use client";

import React, { useLayoutEffect, useRef, useState } from "react";
import { DetailData, ImgData } from "./data.js";

import Detail from "./detail.jsx";
import Image from "./image.jsx";

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Platforms() {
  const workSec = useRef();
  const imgRef = useRef();
  const detailRef = useRef();
  const [currentSec, setCurrentSec] = useState(1);
  const maxSec = 5;

  useLayoutEffect(() => {
    var tl = gsap.timeline();

    if (imgRef.current) {
      tl.to(imgRef.current, {
        yPercent: -(100 * (maxSec - 1)),
        ease: "none",
      });

      ScrollTrigger.create({
        trigger: workSec.current,
        start: "top top",
        end: () => `+=${imgRef.current.offsetHeight * 2}`,
        scrub: true,
        pin: true,
        animation: tl,
        // snap: {
        //   snapTo: 1 / (imgRef.current.childNodes.length - 1),
        // },
        onUpdate: (self) => {
          let progress = self.progress;

          if (progress <= 0.15) {
            setCurrentSec(1);
          }
          if (progress > 0.15) {
            setCurrentSec(2);
          }
          if (progress > 0.4) {
            setCurrentSec(3);
          }
          if (progress > 0.6) {
            setCurrentSec(4);
          }
          if (progress > 0.8) {
            setCurrentSec(5);
          }
        },
      });
    }
  }, [workSec, imgRef]);

  const nextSection = () => {
    const currentSecValue = currentSec + 1 <= maxSec ? currentSec + 1 : maxSec; // Capture the current value of currentSec
    gsap.to(imgRef.current, {
      yPercent: -(100 * (currentSecValue - 1)), // Use currentSecValue here
      ease: "none",
    });
    setCurrentSec(currentSecValue);
  };

  const prevSection = () => {
    const currentSecValue = currentSec - 1 >= 1 ? currentSec - 1 : 1; // Capture the current value of currentSec
    gsap.to(imgRef.current, {
      yPercent: -(100 * (currentSecValue - 1)), // Use currentSecValue here
      ease: "none",
    });
    setCurrentSec(currentSecValue);
  };

  return (
    <section className="h-fit relative">
      <div
        ref={workSec}
        className="w-full h-screen box-border overflow-hidden block sm:block relative"
      >
        <div className="w-full sm:w-fit absolute top-0 left-0 sm:left-[50px] text-main z-50 text-xl sm:text-2xl sm:text-[3vw] font-semibold text-center mt-4 sm:mt-12 py-2 sm:py-6 px-12 bg-[#ffffff60] rounded-full backdrop-blur-md">
          Our Unique Platforms
        </div>

        <div className=" heroSection h-screen w-full flex flex-col text-main relative">
          {/* work grid */}
          <div className="h-full text-xl grid grid-cols-1 grid-rows-9 sm:grid-cols-8 sm:grid-rows-3">

            {/* Detail */}
            <div className="flex-1 row-span-5 col-span-1 sm:row-span-3 sm:col-span-5 w-full relative bg-light z-10">
              <div className="relative h-full w-full flex flex-nowrap flex-row-reverse">
                {DetailData.map((item, index) => {
                  return (
                    <Detail
                      active={currentSec === index + 1}
                      key={index}
                      data={item}
                    />
                  );
                })}
              </div>
            </div>

            {/* images scroller */}
            <div className="row-span-5 col-span-1 sm:row-span-3 sm:col-span-3 w-full max-h-full box-border h-full">
              <div ref={imgRef} className="w-full h-full">
                {ImgData.map((item, index) => {
                  return <Image key={index} item={item} />;
                })}
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="w-full h-fit box-border sm:hidden hidden">
        <div className="h-fit w-full flex flex-col text-white relative">
          {DetailData.map((item, index) => {
            return (
              <div
                key={index}
                className={`frombelowanim p-5 sm:pl-16 pt-16 flex flex-col justify-start gap-4 sm:gap-8 w-full bg-dark`}
              >
                <img
                  src={item.img}
                  alt=""
                  className="block w-full h-auto object-contain rounded-3xl"
                />
                <h2 className="text-2xl leading-normal font-libre">
                  {item.heading}
                </h2>
                <p className="text-base leading-loose font-normalF">
                  {item.detail}
                </p>
                <a
                  href="/"
                  className="hidden capitalize font-normalF border border-white px-8 sm:px-12 py-2 sm:py-4 no-underline rounded-full w-fit cursor-pointer"
                >
                  learn more
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

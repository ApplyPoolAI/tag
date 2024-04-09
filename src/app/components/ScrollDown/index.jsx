import React, { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function ScrollDown({theme}) {
  const ScrollerRef = useRef();

  useEffect(() => {
    const timeline = gsap.timeline({ repeat: -1 });

    timeline
      .to(ScrollerRef.current, {
        y: -34,
        duration: 1,
        ease: "ease",
      })
      .to(ScrollerRef.current, {
        y: 0,
        duration: 1,
        ease: "bounce.out",
      });

    timeline.to({}, { delay: 2 });
  }, []);

  return (
    <div className="flex sm:gap-4 items-end sm:items-center">
      <svg
      className="h-12 sm:h-auto"
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="75"
        viewBox="0 0 40 75"
        fill={theme === "dark" ? "#ffffff10" : "#00000010"}
      >
        <rect
          x="0.75"
          y="0.75"
          width="38.5"
          height="73.5"
          rx="19.25"
          stroke={theme === "dark" ? "white" : "black"}
          stroke-width="1.5"
          stroke-dasharray="2,2"
          />
        <circle ref={ScrollerRef} cx="20" cy="54" r="12"  fill={theme === "dark" ? "#C80815" : "#131E42"} />
      </svg>
      <div className="leading-tight text-sm sm:text-lg">
        <p className="font-bold">Scroll down</p>
        <p className="opacity-70">To discover more</p>
      </div>
    </div>
  );
}

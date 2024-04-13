import React, { useEffect, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import clsx from "clsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Button({ children, theme }) {
  const ScrollerRef = useRef();

  return (
    <button
      className={clsx(
        theme === "dark"
          ? "hover:bg-light hover:text-dark hover:border-main border-light"
          : "hover:bg-main hover:text-light hover:border-light border-main",
        "p-2 px-5 sm:p-3 sm:px-6 m14:p-4 m14:px-10 border-dashed border rounded-full flex items-center gap-2 font-medium text-sm  sm:text-base m14:text-lg  transition-all duration-500"
      )}
    >
      <span>{children}</span>
      <span>
        <IoIosArrowForward />
      </span>
    </button>
  );
}

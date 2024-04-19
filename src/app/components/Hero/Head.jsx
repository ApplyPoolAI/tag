"use client";

import React, { forwardRef } from "react";
import Marquee from "./Marquee";
import ScrollDown from "../ScrollDown";
import Button from "../Button";
import clsx from "clsx";

const Head = forwardRef(({ theme, z }, ref) => {
  const list =
    "school • university • scholarship • internship • mentor • tutors • coach • alumni • career • job • peers •";

  return (
    <div className="px-5 sm:px-0  h-fit sm:h-[calc(100vh-6rem)] leading-none flex flex-col gap-[6vw] pb-[max(50px,2vw)] m14:pb-[4vw] sm:justify-end ">
      {/* main heading */}

      <div
        className={clsx(
          theme === "dark" ? "text-light" : "text-main",
          " font-medium text-[9vw] sm:text-[max(6.2vw,40px)]  leading-normal sm:leading-tight tracking-wide py-[6vh] sm:py-0"
        )}
      >
        Stop Searching
        <span
          className={clsx(
            theme === "dark" ? "bg-sec" : "bg-sec",
            " w-1 h-1 sm:w-[0.7vw] sm:h-[0.7vw] aspect-square inline-block rounded-full align-baseline"
          )}
        ></span>
        <br />
        Get Found by your <br />
        ideal{" "}
        <Marquee direction={"left"} speed={0.4}>
          {list}
        </Marquee>{" "}
        now
        <span
          ref={ref}
          className={clsx(
            theme === "dark" ? "bg-sec" : "bg-sec",
            " w-1 h-1 sm:w-[0.7vw] sm:h-[0.7vw] aspect-square inline-block rounded-full align-baseline"
          )}
        ></span>{" "}
      </div>

      <div className="flex items-start sm:items-end flex-col-reverse sm:flex-row  gap-10">
        <div className="sm:w-[50%] m14:w-[60%]">
          <ScrollDown theme={theme} />
        </div>
        <div className="sm:w-[50%] m14:w-[40%]">
          <p className="mb-4 text-base sm:text-lg m14:text-xl max-w-[40ch]">
            With just one conversion using the wisdom of your peers{" "}
            <b>combined</b> with the precision of AI
          </p>
          <a href="https://applypool.ai/" target="_blank">
        <Button theme={theme}>Join for free</Button>
        </a>
        </div>
      </div>
      
    </div>
  );
});

Head.displayName = 'Head';


export default Head;

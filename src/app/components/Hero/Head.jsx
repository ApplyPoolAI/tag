"use client";

import React, { forwardRef } from "react";
import Marquee from "./Marquee";
import ScrollDown from "../ScrollDown";
import Button from "../Button";
import clsx from "clsx";

const Head = forwardRef(({ theme, z }, ref) => {
  const list =
    "School University Scholarship Internship Mentor Tutors Coach Alumni Career Job Peers";

  return (
    <div className="px-5 sm:px-0  h-fit sm:h-[calc(100vh-6rem)] leading-none flex flex-col py-16 gap-4 sm:gap-10 sm:justify-between ">
      {/* main heading */}

      <div
        className={clsx(
          theme === "dark" ? "text-light" : "text-main",
          " font-normal text-[9vw] sm:text-[max(6.2vw,40px)]  leading-normal sm:leading-tight tracking-wide "
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
        <Marquee direction={"left"} speed={0.2}>
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

      <div className="flex items-end flex-col-reverse sm:flex-row  gap-10 sm:gap-0 mt-16">
        <div className="sm:w-[60%]">
          <ScrollDown theme={theme} />
        </div>
        <div className="sm:w-[40%]">
          <p className="mb-4 text-base sm:text-xl max-w-[40ch]">
            With just one conversion using the wisdom of your peers{" "}
            <b>combined</b> with the precision of AI
          </p>
          <Button theme={theme}>Join for free</Button>
        </div>
      </div>
      
    </div>
  );
});

export default Head;

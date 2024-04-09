import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function StickyButton({ children }) {
  const magnetic = useRef(null);
  const btnFirst = useRef(null);
  const btnSecond = useRef(null);

  let xPercentBtn = 0;
  let directionBtn = "left";
  let speedBtn = 12;
  let isHoveredBtn = false;

  useEffect(() => {
    let xTo, yTo;

    const startAnimation = () => {
      xTo = gsap.quickTo(magnetic.current, "x", {
        duration: 1,
        ease: "elastic.out(1, 0.3)",
      });
      yTo = gsap.quickTo(magnetic.current, "y", {
        duration: 1,
        ease: "elastic.out(1, 0.3)",
      });
    };

    const mouseMove = (e) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } =
        magnetic.current.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x);
      yTo(y);
    };

    const mouseLeave = () => {
      gsap.to(magnetic.current, { x: 0, duration: 1 });
      gsap.to(magnetic.current, { y: 0, duration: 1 });
      xTo(0);
      yTo(0);
    };

    magnetic.current.addEventListener("mouseenter", startAnimation);
    magnetic.current.addEventListener("mousemove", mouseMove);
    magnetic.current.addEventListener("mouseleave", mouseLeave);

    const animateMarqueeBtn = () => {
      if (isHoveredBtn) {
        xPercentBtn =
          directionBtn === "left"
            ? xPercentBtn - speedBtn / 10
            : xPercentBtn + speedBtn / 10;
        xPercentBtn =
          xPercentBtn <= -100 ? 0 : xPercentBtn >= 0 ? -100 : xPercentBtn;

        gsap.to([btnFirst.current, btnSecond.current], {
          xPercent: xPercentBtn,
          duration: 0,
          ease: "none",
        });

        requestAnimationFrame(animateMarqueeBtn);
      } else {
        xPercentBtn = 0;
        gsap.to([btnFirst.current, btnSecond.current], {
          xPercent: 0,
          duration: 0,
          ease: "none",
        });
      }
    };

    magnetic.current.addEventListener("mouseenter", () => {
      isHoveredBtn = true;
      animateMarqueeBtn();
    });

    magnetic.current.addEventListener("mouseleave", () => {
      isHoveredBtn = false;
    });

    magnetic.current.addEventListener("touchstart", () => {
      isHoveredBtn = true;
      animateMarqueeBtn();
    });

    magnetic.current.addEventListener("touchend", () => {
      isHoveredBtn = false;
    });

    return () => {
      magnetic.current.removeEventListener("mouseenter", startAnimation);
      magnetic.current.removeEventListener("mousemove", mouseMove);
      magnetic.current.removeEventListener("mouseleave", mouseLeave);
    };
  }, []);

  return (
    <button
      ref={magnetic}
      className="bg-main aspect-square
        flex items-center justify-center rounded-full text-xs sm:text-base text-light relative overflow-hidden font-medium"
    >
      <div ref={btnFirst} className="p-2 sm:p-5">
        {children}
      </div>
      <div
        ref={btnSecond}
        className="absolute w-full h-full left-full top-1/2 -translate-y-1/2 flex items-center justify-center"
      >
        {children}
      </div>
    </button>
  );
}

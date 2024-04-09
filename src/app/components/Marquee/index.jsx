'use client'

import React, { useEffect, useRef } from "react";
import ArrayData from "./Data";
import styles from "./style.module.css"

import { gsap } from "gsap";

export default function Marquee({ direction, speed, ...props }) {
  const marquee = useRef();
  const first = useRef();
  const second = useRef();
  let xPercent = 0;

  const rightAnimation = () => {
    if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.to([first.current, second.current], { xPercent: xPercent, duration: 0 });
    requestAnimationFrame(rightAnimation);
    xPercent += speed / 10;
  };

  const leftAnimation = () => {
    if (xPercent < -100) {
      xPercent = 0;
    }
    gsap.to([first.current, second.current], { xPercent: xPercent, duration: 0 });
    requestAnimationFrame(leftAnimation);
    xPercent -= speed / 10;
  };

  useEffect(() => {
    if (direction === "left") {
      requestAnimationFrame(leftAnimation);
    } else {
      requestAnimationFrame(rightAnimation);
    }
  }, [direction]);


  return (
    <section className={styles.marqueeSec}>
      <div ref={marquee} className={styles.marqueeCon}>
        <div
          className={styles.marqueeDiv}
          ref={first}
        >
          {
            ArrayData.map((item, index) => (
              <h4 key={index}>
                <span>{item}</span>
                <div className="w-[.8ch] aspect-square bg-sec rounded-full"></div>
              </h4>
            ))
          }
        </div>
        <div
          ref={second}
          className={styles.marqueeDiv2}
        >
          {ArrayData.map((item, index) => (
            <h4 key={index}>
              <span>{item}</span>
              <div className="w-[.8ch] aspect-square bg-sec rounded-full"></div>
            </h4>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./style.module.css";
import gsap from "gsap";

export default function MouseFollower() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const mousePointer = useRef();

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    // Add mousemove event listener
    window.addEventListener("mousemove", handleMouseMove);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // Empty dependency array ensures that this effect runs only once when the component mounts

  useEffect(() => {
    gsap.to(mousePointer.current, {
      left: mousePosition.x,
      top: mousePosition.y,
      duration:0.2,
    });
  }, [mousePosition]);

  return <div className={styles.MouseFollower} ref={mousePointer}></div>;
}

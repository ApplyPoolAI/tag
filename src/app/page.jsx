"use client";
import { useEffect } from "react";
import AboutUs from "./components/AboutUs";
import Hero from "./components/Hero";
import Platforms from "./components/Platforms";
import Video from "./components/Video";
import Footer from "./components/Footer";
import Globe from "./components/Globe";
import MouseFollower from "./components/MouseFollower";

import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 500);
    });

    gsap.ticker.lagSmoothing(0);
  }, []);

// useEffect(() => {
//   // Load and run your script here
//   const script = document.createElement('script');
//   script.src = '/script.js';
//   script.async = true;
//   document.head.appendChild(script);
//   return () => {
//     document.head.removeChild(script);
//   };
// }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <MouseFollower />
      <Hero />
      <Globe theme="light"/>
      <AboutUs />
      <Platforms />
      <section className="h-screen bg-red-300 w-full">
      <iframe
        src="https://applypool.ai/"
        title="Embedded Website"
        width="100%"
        height="100%"
        sandbox="allow-same-origin allow-scripts"
        allow="fullscreen"
      >
        
      </iframe>
    </section>
      <Video />
      <Footer />
    </main>
  );
}

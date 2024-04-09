"use client";
import { useEffect } from "react";
import AboutUs from "./components/AboutUs";
import Hero from "./components/Hero";
import Platforms from "./components/Platforms";
import Video from "./components/Video";
import Footer from "./components/Footer";
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

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <AboutUs />
      <Platforms />
      <Video />
      <Footer />
    </main>
  );
}

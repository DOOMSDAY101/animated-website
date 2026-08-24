"use client";
import { ScrollTrigger, SplitText } from "gsap/all";

import { gsap } from "gsap";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Cocktails from "@/components/Cocktails";
gsap.registerPlugin(ScrollTrigger, SplitText);

const Home = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <Cocktails />
    </main>
  );
};

export default Home;

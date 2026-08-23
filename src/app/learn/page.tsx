"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Learn = () => {
  const timeline = gsap.timeline({
    repeat: -1,
    repeatDelay: 1,
    yoyo: true,
  });

  const scrollRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to("#blue-box", {
      x: 250,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      duration: 2,
      ease: "bounce.in",
    });
    gsap.from("#green-box", {
      x: 250,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      duration: 2,
      ease: "bounce.in",
    });

    gsap.fromTo(
      "#red-box",
      {
        x: 0,
        rotation: 0,
        borderRadius: "0%",
      },
      {
        x: 250,
        repeat: -1,
        yoyo: true,
        borderRadius: "100%",
        rotation: 360,
        duration: 2,
        ease: "bounce.out",
      },
    );

    timeline.to("#yellow-box", {
      x: 250,
      rotation: 360,
      borderRadius: "100%",
      duration: 2,
      ease: "back.inOut",
    });

    timeline.to("#yellow-box", {
      y: 250,
      scale: 2,
      rotation: 360,
      borderRadius: "100%",
      duration: 2,
      ease: "back.inOut",
    });

    timeline.to("#yellow-box", {
      x: 500,
      scale: 1,
      rotation: 360,
      borderRadius: "8px",
      duration: 2,
      ease: "back.inOut",
    });

    gsap.to(".stagger-box", {
      y: 250,
      rotation: 360,
      borderRadius: "100%",
      repeat: -1,
      yoyo: true,
      // stagger: 0.5,
      stagger: {
        amount: 1.5,
        grid: [2, 1],
        axis: "y",
        ease: "circ.inOut",
        from: "center",
      },
    });

    const boxes = gsap.utils.toArray(scrollRef.current?.children ?? []);

    boxes.forEach((box: any) => {
      gsap.to(box, {
        x: 150,
        rotation: 360,
        borderRadius: "100%",
        scale: 1.5,
        scrollTrigger: {
          trigger: box,
          start: "bottom bottom",
          end: "top 20%",
          scrub: true,
        },
        ease: "power1.inOut",
      });
    });

    gsap.to("#text", {
      ease: "power1.inOut",
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: "#text",
        start: "top 80%",
        end: "+=100",
        scrub: true,
      },
    });

    gsap.fromTo(
      ".para",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        delay: 1,
        stagger: 0.1,
      },
    );
  }, []);
  return (
    <main>
      <div className="text-5xl underline">Welcome to the Animated Website</div>
      <h1 className="mt-20">GSAP TO</h1>
      <div className="mt-5">
        <div className="w-20 h-20 bg-blue-500 rounded-lg" id="blue-box"></div>
      </div>

      <h1 className="mt-20">GSAP FROM</h1>
      <div className="mt-5">
        <div className="w-20 h-20 bg-green-500 rounded-lg" id="green-box"></div>
      </div>

      <h1 className="mt-20">GSAP FROM TO</h1>
      <div className="mt-5">
        <div className="w-20 h-20 bg-red-500 rounded-lg" id="red-box"></div>
      </div>

      <div className="mt-20 space-y-10">
        <h1>GSAP TIMELINE</h1>

        <button
          className="p-2 border-none rounded-sm cursor-pointer bg-gray-700"
          onClick={() => {
            if (timeline.paused()) {
              timeline.play();
            } else {
              timeline.pause();
            }
          }}
        >
          {" "}
          Play/Pause
        </button>
        <div className="mt-5">
          <div
            className="w-20 h-20 bg-yellow-500 rounded-lg"
            id="yellow-box"
          ></div>
        </div>
      </div>

      <div className="mt-20">
        <h1 className="mt-20">GSAP STAGGER</h1>

        <div className="flex gap-5 mt-5">
          <div className="w-20 h-20 bg-indigo-200 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-300 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-400 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-500 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-600 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-700 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-800 rounded-lg stagger-box" />
        </div>
      </div>

      <div className="w-full h-[70vh] flex justify-center items-center flex-col mt-20">
        <h1 className="mt-20">GSAP SCROLL TRIGGER</h1>

        <p className="text-center text-gray-500">
          Scroll down to see the animation
        </p>

        <svg
          className="animate-bounce mt-5"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="blue"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19V5" />
          <path d="M5 12l7 7 7-7" />
        </svg>
      </div>

      <div className="mt-20 w-full h-screen" ref={scrollRef}>
        <div
          id="scroll-pink"
          className="scroll-box w-20 h-20 rounded-lg bg-pink-500"
        />
        <div
          id="scroll-orange"
          className="scroll-box w-20 h-20 rounded-lg bg-orange-500"
        />
      </div>

      <div className="mt-20 space-y-10 h-100">
        <h1>GSAP TEXT</h1>
        <div className="mt-5">
          {/* <h1 id="text" className="opacity-0 translate-y-10">
            GsapText
          </h1> */}

          <h1 id="text" className="opacity-0 translate-y-10">
            GsapText
          </h1>

          <p className="mt-5 text-gray-500 para">
            We can use same method like <code>gsap.to()</code>,{" "}
            <code>gsap.from()</code>, <code>gsap.fromTo()</code> and{" "}
            <code>gsap.timeline()</code> to animate text.
          </p>

          <p className="mt-5 text-gray-500 para">
            Using these methods we can achieve various text animations and
            effects like fade in, fade out, slide in, slide out, and many more.
          </p>

          <p className="mt-5 text-gray-500 para">
            For more advanced text animations and effects, you can explore the
            GSAP TextPlugin or other third-party libraries that specialize in
            text animations.
          </p>

          <p className="mt-5 text-gray-500 para">
            Read more about the{" "}
            <a
              href="https://greensock.com/docs/v3/Plugins/TextPlugin"
              target="_blank"
              rel="noreferrer noopener nofollow"
            >
              TextPlugin
            </a>{" "}
            plugin.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Learn;

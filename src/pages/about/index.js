import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    gsap.to(".parallax", {
      // eslint-disable-next-line no-restricted-globals
      backgroundPosition: `50% ${innerHeight / 2}px`,
      ease: "none",
      scrollTrigger: {
        trigger: ".parallax",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);
  return (
    <section className="aboutPage">
      <div className="parallax">
        <div className="text">
          <h1>HALIMRT.</h1>
          <p>strategy, design & development</p>
        </div>
      </div>

      <div className="second"></div>
    </section>
  );
}

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

      <div className="second">
        <div className="container">
          <div className="wrapper">
            <div className="text-desc">
              <h2>
                <span>HALIMRT. is a full-service creative studio </span>
                <span>working with fashion, tech & lifestyle brands. </span>
                <span>We collaborate closely with our clients </span>
                <span>to tell their stories, engaging audiences </span>
                <span>by building beautiful experiences & products.</span>
              </h2>

              <h2 className="sec">
                <span>We strongly believe every brand and project </span>
                <span>is unique and should be tailor-made from </span>
                <span>industry leaders to early stage companies. </span>
                <span>We don’t do one size fits all.</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

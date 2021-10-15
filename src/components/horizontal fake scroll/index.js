import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./main.scss";
import girl from "../../images/11.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function HFS() {
  useEffect(() => {
    gsap.utils.toArray("section").forEach((section, index) => {
      const w = section.querySelector(".wrapperr");
      const [x, xEnd] =
        index % 2
          ? ["100%", (w.scrollWidth - section.offsetWidth) * -1]
          : [w.scrollWidth * -1, 0];
      gsap.fromTo(
        w,
        { x },
        {
          x: xEnd,
          scrollTrigger: {
            trigger: section,
            scrub: 0.5,
          },
        }
      );
    });
  }, []);

  return (
    <div class="demo-wrapper">
      <section class="demo-text">
        <div class="wrapperr text textone">CLASSICFASHIONNLUXURY</div>
      </section>

      <section class="demo-gallery">
        <ul class="wrapperr ulone">
          <li>
            <img alt="fake" src={girl} />
          </li>
          <li>
            <img alt="fake" src={girl} />
          </li>
          <li>
            <img alt="fake" src={girl} />
          </li>
        </ul>
      </section>
      <section class="demo-gallery">
        <ul class="wrapperr ultwo">
          <li>
            <img alt="fake" src={girl} />
          </li>
          <li>
            <img alt="fake" src={girl} />
          </li>
          <li>
            <img alt="fake" src={girl} />
          </li>
          <li>
            <img alt="fake" src={girl} />
          </li>
        </ul>
      </section>

      <section class="demo-text">
        <div class="wrapperr text texttwo">CLASSICFASHIONNLUXURY</div>
      </section>
    </div>
  );
}

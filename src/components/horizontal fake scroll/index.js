import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./main.scss";

gsap.registerPlugin(ScrollTrigger);

export default function HFS() {
  useEffect(() => {
    gsap.utils.toArray("section").forEach((section, index) => {
      const w = section.querySelector(".wrapper");
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
        <div class="wrapper text textone">ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
      </section>
      <section class="demo-gallery">
        <ul class="wrapper ulone">
          <li>
            <img
              alt="fake"
              src="https://source.unsplash.com/random/1240x874?sig=66"
            />
          </li>
          <li>
            <img
              alt="fake"
              src="https://source.unsplash.com/random/1240x874?sig=150"
            />
          </li>
          <li>
            <img
              alt="fake"
              src="https://source.unsplash.com/random/1240x874?sig=106"
            />
          </li>
        </ul>
      </section>
      <section class="demo-gallery">
        <ul class="wrapper ultwo">
          <li>
            <img
              alt="fake"
              src="https://source.unsplash.com/random/1240x874?sig=148"
            />
          </li>
          <li>
            <img
              alt="fake"
              src="https://source.unsplash.com/random/1240x874?sig=26"
            />
          </li>
          <li>
            <img
              alt="fake"
              src="https://source.unsplash.com/random/1240x874?sig=198"
            />
          </li>
          <li>
            <img
              alt="fake"
              src="https://source.unsplash.com/random/1240x874?sig=10"
            />
          </li>
        </ul>
      </section>
      <section class="demo-gallery">
        <ul class="wrapper ulthree">
          <li>
            <img
              alt="fake"
              src="https://source.unsplash.com/random/1240x874?sig=159"
            />
          </li>
          <li>
            <img
              alt="fake"
              src="https://source.unsplash.com/random/1240x874?sig=197"
            />
          </li>
          <li>
            <img
              alt="fake"
              src="https://source.unsplash.com/random/1240x874?sig=33"
            />
          </li>
        </ul>
      </section>
      <section class="demo-gallery">
        <ul class="wrapper ulfour">
          <li>
            <img
              alt="fake"
              src="https://source.unsplash.com/random/1240x874?sig=125"
            />
          </li>
          <li>
            <img
              alt="fake"
              src="https://source.unsplash.com/random/1240x874?sig=149"
            />
          </li>
          <li>
            <img
              alt="fake"
              src="https://source.unsplash.com/random/1240x874?sig=52"
            />
          </li>
        </ul>
      </section>
      <section class="demo-text">
        <div class="wrapper text texttwo">ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
      </section>
    </div>
  );
}

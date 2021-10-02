import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { textReveal, titleReveal } from "./Animations";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  let subtitle = useRef(null);
  let desc = useRef(null);
  let readmore = useRef(null);
  let title = useRef(null);
  let service1 = useRef(null);
  let service2 = useRef(null);
  let service3 = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    textReveal([subtitle, desc, readmore]);
    titleReveal(title);
  }, []);

  useEffect(() => {
    gsap.utils.toArray(".panel").forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        pin: true,
        scrub: true,
        pinSpacing: false,
        pinType: "fixed",
      });
    });
  }, []);

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".third",
          start: "center bottom",
        },
      })
      .from(".left-pane .div h1", {
        opacity: 0,
        duration: 1,
        x: -20,
        ease: "Power4.easeInOut",
      })
      .from(".left-pane .div p", {
        opacity: 0,
        duration: 1,
        y: 30,
        ease: "Power4.easeInOut",
      })
      .from(".stack", {
        width: "0%",
        opacity: 0,
        duration: 1,
        delay: -0.4,
        ease: "Expo.easeInOut",
        stagger: {
          amount: 0.2,
        },
      })
      .from(".stack h1", {
        opacity: 0,
        duration: 1,
        x: -20,
        ease: "Power4.easeInOut",
      });
  }, []);

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".fourth",
          start: "center bottom",
        },
      })
      .from(".top h1", {
        duration: 1,
        opacity: 0,
        y: -30,
        ease: "Power4.easeInOut",
      })
      .from([service1, service2, service3], {
        duration: 2,
        opacity: 0,
        y: -20,
        ease: "Expo.easeInOut",
        stagger: {
          amount: 1,
        },
      });
  }, []);

  return (
    <section className="homePage">
      <div className="first panel">
        <div class="text">
          <div>
            <p ref={(el) => (subtitle = el)} class="subtitle">
              The Authority In
            </p>
            <h1 ref={(el) => (title = el)} class="title">
              <span>
                Fashion <br /> Culture
              </span>
            </h1>
            <p ref={(el) => (desc = el)} class="desc">
              <b>HALIMRT.</b> is the cultural phenomenon surrounding <br />{" "}
              Beauty and Fashion culture.
            </p>
            <Link ref={(el) => (readmore = el)} to="/" class="readmore">
              Click For More
            </Link>
          </div>
        </div>
      </div>

      <div className="second panel"></div>

      <div className="third panel">
        <Link to="/" className="left-pane">
          <div className="div">
            <h1>NEW IN AND RESTOCKS</h1>
            <p>
              Discover our mid-week arrivals and most-wanted, most-loved
              restocks.
            </p>
          </div>
        </Link>
        <div className="right-pane">
          <div className="stack stack-div1">
            <h1>ORIGINALS</h1>
          </div>
          <div className="stack stack-div2">
            <h1>100% COTTON</h1>
          </div>
        </div>
      </div>

      <div className="fourth panel">
        <div className="top">
          <h1>HALIMRT.</h1>
        </div>
        <div className="down">
          <div ref={(el) => (service1 = el)} className="avail-services">
            <h4>FREE DELIVERY</h4>
            <p>for orders over $200 to to the US, Canada and Australia</p>
          </div>
          <div ref={(el) => (service2 = el)} className="avail-services">
            <h4>FREE RETURNS</h4>
            <p>from the US, Canada and Australia</p>
          </div>
          <div ref={(el) => (service3 = el)} className="avail-services">
            <h4>SECURE PAYMENT</h4>
            <p>Visa, Mastercard, Amex, Paypal, Paystack, Discover</p>
          </div>
        </div>
      </div>
    </section>
  );
}

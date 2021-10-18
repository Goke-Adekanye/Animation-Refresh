import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { textReveal, titleReveal } from "./Animations";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import vid from "../../images/live-fashion-show.mp4";
import Glitch from "../../components/glitch";
import HFS from "../../components/horizontal fake scroll";
import Footer from "../../components/footer";

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
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }, []);

  useEffect(() => {
    textReveal([subtitle, desc, readmore]);
    titleReveal(title);
  }, []);

  // useEffect(() => {
  //   gsap.utils.toArray(".panel").forEach((section) => {
  //     ScrollTrigger.create({
  //       trigger: section,
  //       start: "top top",
  //       pin: true,
  //       scrub: 1,
  //       pinSpacing: false,
  //       // pinType: "fixed",
  //     });
  //   });
  // }, []);

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".second",
          start: "center bottom",
        },
      })
      .to("video", {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%",
        ease: "Expo.easeInOut",
        duration: 1.5,
      })
      .from(".div-desc h2", { translateY: -50, opacity: 0 })
      .from(".div-desc p", { translateY: 50, opacity: 0 });
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
        delay: -0.6,
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
    <>
      <section className="homePage">
        <div className="first panel">
          <video autoplay="autoplay" muted loop>
            <source src={vid} type="video/mp4" />
          </video>
          <div class="text">
            <div>
              <p ref={(el) => (subtitle = el)} class="subtitle">
                The Authority In
              </p>
              <h1 ref={(el) => (title = el)} class="title">
                <span>
                  Digital <br /> Culture
                </span>
              </h1>
              <p ref={(el) => (desc = el)} class="desc">
                <b>HALIMA.</b> is the cultural phenomenon surrounding <br />{" "}
                Branding and Digital culture.
              </p>
              <Link
                ref={(el) => (readmore = el)}
                to="/discover"
                class="readmore"
              >
                Click For More
              </Link>
            </div>
          </div>
        </div>

        <div className="second panel">
          <div className="text">
            <p>
              Halima. is a full-service creative studio crafting beautiful
              digital experiences & products.
            </p>
            <p className="abt">
              <Link to="./about">ABOUT US</Link>
            </p>
          </div>
        </div>

        <div className="container">
          <div className="wrapper">
            <div className="third panel">
              <Link to="/" className="left-pane">
                <div className="div">
                  <h1>New In And Restocks</h1>
                  <p>
                    Discover our mid-week arrivals and most-wanted, most-loved
                    restocks.
                  </p>
                </div>
              </Link>
              <div className="right-pane">
                <div className="stack stack-div1">
                  <h1>Originals</h1>
                </div>
                <div className="stack stack-div2">
                  <h1>100% Cotton</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="wrapper">
            <div className="fifth panel">
              <Glitch />
            </div>
          </div>
        </div>

        <div className="">
          <HFS />
        </div>

        <div className="container">
          <div className="wrapper">
            <div className="fourth panel">
              <div className="top">
                <h1>HALIMA.</h1>
              </div>
              <div className="down">
                <div ref={(el) => (service1 = el)} className="avail-services">
                  <h4>FREE SHIPMENT</h4>
                  <p>
                    for softwares over $2000 to to the US, Canada and Australia
                  </p>
                </div>
                <div ref={(el) => (service2 = el)} className="avail-services">
                  <h4>COLD UI/UX</h4>
                  <p>from our US and Australia Designers</p>
                </div>
                <div ref={(el) => (service3 = el)} className="avail-services">
                  <h4>SECURE PAYMENT</h4>
                  <p>Visa, Mastercard, Amex, Paypal, Paystack, Discover</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

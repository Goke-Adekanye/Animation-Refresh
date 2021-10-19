import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Redcap from "../../images/about-redcap.jpg";
import lingerie from "../../images/abt-lingerie.jpg";
import Footer from "../../components/footer";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  let node1 = useRef(null);
  let node2 = useRef(null);
  let node3 = useRef(null);
  let node4 = useRef(null);
  let node5 = useRef(null);
  let node6 = useRef(null);
  let node7 = useRef(null);
  let node8 = useRef(null);
  let node9 = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".second",
          start: "top center",
        },
      })
      .from([node1, node2, node3, node4, node5], {
        duration: 1,
        opacity: 0,
        y: -100,
        delay: 0.1,
        ease: "Expo.easeInOut",
        stagger: {
          amount: 1,
        },
      })
      .to("img", {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%",
        ease: "Expo.easeInOut",
        duration: 1.5,
        delay: 0.5,
      });
  }, []);

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "h2.sec",
          start: "center bottom",
        },
      })
      .from([node6, node7, node8, node9], {
        duration: 1,
        opacity: 0,
        y: -100,
        delay: 0.1,
        ease: "Expo.easeInOut",
        stagger: {
          amount: 1,
        },
      });
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
    <>
      <section className="aboutPage">
        <div className="parallax">
          <div className="text">
            <h1>
              HALI<span>MA.</span>
            </h1>
            <p>strategy, design & development</p>
          </div>
        </div>

        <div className="second">
          <div className="container">
            <div className="wrapper">
              <div className="text-desc">
                <h2>
                  <span ref={(el) => (node1 = el)}>
                    HALIMA. is a full-service creative studio{" "}
                  </span>
                  <span ref={(el) => (node2 = el)}>
                    working with fashion, tech & lifestyle brands.{" "}
                  </span>
                  <span ref={(el) => (node3 = el)}>
                    We collaborate closely with our clients{" "}
                  </span>
                  <span ref={(el) => (node4 = el)}>
                    to tell their stories, engaging audiences{" "}
                  </span>
                  <span ref={(el) => (node5 = el)}>
                    by building beautiful experiences & products.
                  </span>
                </h2>

                <div className="about-imgs">
                  <div className="img1">
                    <img src={lingerie} alt="abt" />
                  </div>
                  <div className="img2">
                    <img src={Redcap} alt="abt" />
                  </div>
                </div>

                <h2 className="sec">
                  <span ref={(el) => (node6 = el)}>
                    We strongly believe every brand and project{" "}
                  </span>
                  <span ref={(el) => (node7 = el)}>
                    is unique and should be tailor-made from{" "}
                  </span>
                  <span ref={(el) => (node8 = el)}>
                    industry leaders to early stage companies.{" "}
                  </span>
                  <span ref={(el) => (node9 = el)}>
                    We don’t do one size fits all.
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

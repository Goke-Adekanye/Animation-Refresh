import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../../components/footer";
import portfolioData from "./portfolioData";
import useLocoScroll from "../../hooks/useLocoScroll";
import "locomotive-scroll/src/locomotive-scroll.scss";

gsap.registerPlugin(ScrollTrigger);

export default function Discover() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useLocoScroll();

  useEffect(() => {
    gsap.from(".disover-first", {
      delay: 0.8,
      duration: 1,
      opacity: 0,
      x: -20,
      ease: "Expo.easeInOut",
    });
  }, []);

  useEffect(() => {
    const boxes = gsap.utils.toArray(".portfolio_grid");
    boxes.forEach((box) => {
      gsap.from(box, {
        delay: 1,
        duration: 2,
        opacity: 0,
        y: 50,
        ease: "Expo.easeInOut",
        scrollTrigger: {
          trigger: box,
          start: "center bottom",
          scroller: ".page",
        },
      });
    });
  }, []);

  return (
    <>
      <div className="page">
        <div className="discoverPage">
          <div className="container">
            <div className="disover-first">
              <div className="caption">
                <h1>
                  We've helped some of the most influential Fashion & Lifestyle
                  brands achieve <span>hyper growth</span>.
                </h1>
                <div className="small">
                  <p>
                    We take pride in working with innovative, community-driven,
                    leading brands which challenge the fashion landscape.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="protfoliopage">
            <div className="portfolio_cls">
              {portfolioData.work.map(
                ({
                  srcSet_d,
                  src_d,
                  srcSet_m,
                  src_m,
                  alt,
                  srcSet_l,
                  src_l,
                  class_l,
                }) => (
                  <div className="portfolio_grid">
                    <div className="portfolio_gridinr">
                      <Link to="/discover">
                        <img
                          srcSet={srcSet_d}
                          // sizes="100vw"
                          src={src_d}
                          loading="lazy"
                          alt={alt}
                          className="abs_img desktop_img"
                        />
                        <img
                          srcSet={srcSet_m}
                          sizes="100vw"
                          src={src_m}
                          loading="lazy"
                          alt={alt}
                          className="abs_img mobile_img"
                        />
                        <div className="portfolio-logo">
                          <img
                            srcset={srcSet_l}
                            sizes="100vw"
                            src={src_l}
                            loading="lazy"
                            alt={alt}
                            className={class_l}
                          />
                        </div>
                      </Link>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        <Footer />
      </div>

      <div class="reachout_outer">
        <Link to="/about" class="reach_out btn">
          About
          <span class="btnarw">
            <span></span>
          </span>
        </Link>
      </div>
    </>
  );
}

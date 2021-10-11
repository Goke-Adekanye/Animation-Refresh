import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./hfs.scss";
import girl from "../../images/shade.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function HFS() {
  useEffect(() => {
    gsap.utils.toArray("section").forEach((div, index) => {
      const w = div.querySelector(".wrapperr");
      const [x, xEnd] =
        index % 2
          ? ["100%", (w.scrollWidth - div.offsetWidth) * -1]
          : [w.scrollWidth * -1, 0];
      gsap.fromTo(
        w,
        { x },
        {
          x: xEnd,
          scrollTrigger: {
            trigger: div,
            scrub: 0.5,
          },
        }
      );
    });
  }, []);

  return (
    <div className="demo-wrapperr">
      <section className="demo-text">
        <div className="wrapperr text textone">CLASSICFASHIONNLUXURY</div>
      </section>

      <section className="demo-gallery">
        <div className="wrapperr ulone">
          <div className="img-box">
            <img alt="fake" src={girl} />
          </div>
          <div className="img-box">
            <img alt="fake" src={girl} />
          </div>
          <div className="img-box">
            <img alt="fake" src={girl} />
          </div>
        </div>
      </section>
      <section className="demo-gallery">
        <div className="wrapperr ultwo">
          <div className="img-box">
            <img alt="fake" src={girl} />
          </div>
          <div className="img-box">
            <img alt="fake" src={girl} />
          </div>
          <div className="img-box">
            <img alt="fake" src={girl} />
          </div>
          <div className="img-box">
            <img alt="fake" src={girl} />
          </div>
        </div>
      </section>
      <section className="demo-gallery">
        <div className="wrapperr ulthree">
          <div className="img-box">
            <img alt="fake" src={girl} />
          </div>
          <div className="img-box">
            <img alt="fake" src={girl} />
          </div>
          <div className="img-box">
            <img alt="fake" src={girl} />
          </div>
        </div>
      </section>
      <section className="demo-gallery">
        <div className="wrapperr ulfour">
          <div className="img-box">
            <img alt="fake" src={girl} />
          </div>
          <div className="img-box">
            <img alt="fake" src={girl} />
          </div>
          <div className="img-box">
            <img alt="fake" src={girl} />
          </div>
        </div>
      </section>
      <section className="demo-text">
        <div className="wrapperr text texttwo">CLASSICFASHIONNLUXURY</div>
      </section>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";

import portfolioData from "./portfolioData";

export default function Disover() {
  return (
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
  );
}

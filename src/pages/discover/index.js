import React from "react";
import { Link } from "react-router-dom";
import BBi from "../../images/portfolio/Black-Bananas_2000x_img.jpg";
import BBl from "../../images/portfolio/Blackbananas_2000x.png";
import DCd from "../../images/portfolio/Danielle-Cathari-Dsk.jpg";
import DCm from "../../images/portfolio/Danielle-Cathari_Mbl.jpg";
import DCl from "../../images/portfolio/Danielle-cathari_Logo.png";

export default function Disover() {
  return (
    <div className="protfoliopage">
      <div className="portfolio_cls">
        <div className="portfolio_grid">
          <div className="portfolio_gridinr">
            <Link to="/discover">
              <img
                srcSet={BBi}
                sizes="100vw"
                src={BBi}
                loading="lazy"
                alt="Daily Paper"
                className="abs_img desktop_img"
              />
              <img
                srcSet={BBi}
                sizes="100vw"
                src={BBi}
                loading="lazy"
                alt="Daily Paper"
                className="abs_img mobile_img"
              />
              <div className="portfolio-logo">
                <img
                  srcset={BBl}
                  sizes="100vw"
                  src={BBl}
                  loading="lazy"
                  alt="blackbananas"
                  className="blackbananas"
                />
              </div>
            </Link>
          </div>
        </div>

        <div className="portfolio_grid">
          <div className="portfolio_gridinr">
            <Link to="/discover">
              <img
                srcSet={DCd}
                sizes="100vw"
                src={DCd}
                loading="lazy"
                alt="Daniëlle Cathari"
                className="abs_img desktop_img"
              />
              <img
                srcSet={DCm}
                sizes="100vw"
                src={DCm}
                loading="lazy"
                alt="Daniëlle Cathari"
                className="abs_img mobile_img"
              />
              <div className="portfolio-logo">
                <img
                  srcset={DCl}
                  sizes="100vw"
                  src={DCl}
                  loading="lazy"
                  alt="daniëllecathari"
                  className="daniellecathari"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

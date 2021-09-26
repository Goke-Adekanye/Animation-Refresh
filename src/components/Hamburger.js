import React from "react";
import { Link } from "react-router-dom";

const Hamburger = () => {
  return (
    <div className="hamburger-menu">
      <div className="menu-secondary-background-color"></div>
      <div className="menu-layer">
        <div className="menu-city-background"></div>
        <div className="container">
          <div className="wrapper">
            <div className="menu-links">
              <nav>
                <ul>
                  <li>
                    <Link to="/opportunities">Opportunities</Link>
                  </li>
                  <li>
                    <Link to="/solutions">Solutions</Link>
                  </li>
                  <li>
                    <Link to="/contact-us">Contact us</Link>
                  </li>
                </ul>
              </nav>
              <div className="info">
                <h3>Our Promise</h3>
                <p>
                  The passage experienced a surge in popularity during the 1960s
                  when Letraset used it on their dry-transfer sheets, and again
                  during the 90s as desktop publishers bundled the text with
                  their software.
                </p>
              </div>
              <div className="locations">
                {/* Returning the list of cities */}
                <span>Dallas</span>
                <span>Dallas</span>
                <span>Dallas</span>
                <span>Dallas</span>
                <span>Dallas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;

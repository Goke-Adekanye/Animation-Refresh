import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="bottom">
          <div className="bottom-container">
            <div className="contact-head">
              <h1>Reach Out To Us</h1>
            </div>

            <div className="contact-body">
              <div className="contact-num">
                <div className="contact-num-head">
                  <h2>telephone:</h2> <br />
                </div>
                <div className="contact-num-body">
                  <h3>081-xxx-xxx</h3> <br />
                </div>
              </div>
              <div className="contact-add">
                <div className="contact-add-head">
                  <h2>address:</h2> <br />
                </div>
                <div className="contact-add-body">
                  <h3>xxx-xxx-xxx-xxx-xxx-xxx-xxx-xxx-xxx-xxx-xxx-xxx</h3>
                  <br />
                </div>
              </div>

              <div className="links">
                <div className="links-head">
                  <h2>need help?</h2> <br />
                </div>
                <div className="link-body">
                  <ul>
                    <li>
                      <Link to="/">About</Link>
                    </li>
                    <li>
                      <Link to="/">Contact</Link>
                    </li>
                    <li>
                      <Link to="/">Discover</Link>
                    </li>
                    <li>
                      <Link to="/">Twitter</Link>
                    </li>
                    <li>
                      <Link to="/">Instagram</Link>
                    </li>
                    <li>
                      <Link to="/">LinkedIn</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

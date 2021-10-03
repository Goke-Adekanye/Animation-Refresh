import React from "react";
import "./style.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCopyright } from "@fortawesome/free-regular-svg-icons";

function Footer() {
  return (
    <>
      <footer>
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
            </div>
            <div className="contact-bottom">
              <ul className="socials">
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Whatsapp</li>
              </ul>
            </div>
          </div>
          <div className="rights">
            {/* <FontAwesomeIcon icon={faCopyright} /> 2021, Frugal Targets. */}
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

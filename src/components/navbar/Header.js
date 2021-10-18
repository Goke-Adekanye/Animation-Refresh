import React, { useEffect, useRef, useState } from "react";
import { withRouter, Link } from "react-router-dom";
import { staggerHeader } from "./Animations";
import Hamburger from "./Hamburger";

const Header = ({ history }) => {
  // Create varibles of our dom nodes
  let logo = useRef(null);
  let menu = useRef(null);

  // State of our Menu
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu",
  });

  // State of our button
  const [disabled, setDisabled] = useState(false);

  //Use Effect
  useEffect(() => {
    //Listening for page changes.
    history.listen(() => {
      setState({ clicked: false, menuName: "Menu" });
    });
  }, [history]);

  useEffect(() => {
    if (state.menuName === "Menu") {
      document.body.classList.remove("hide-scrolling");
    }
  }, [state.menuName]);

  useEffect(() => {
    //stagger header content
    staggerHeader(logo, menu);
  }, []);

  // Toggle menu
  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close",
      });
      document.body.classList.add("hide-scrolling");
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu",
      });
      document.body.classList.remove("hide-scrolling");
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close",
      });
      document.body.classList.add("hide-scrolling");
    }
  };

  //Determine if out menu button should be disabled
  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className="inner-header">
            <div ref={(el) => (logo = el)} className="logo">
              <Link to="/">HALIMA.</Link>
            </div>
            <div ref={(el) => (menu = el)} className="menu">
              <button onClick={handleMenu} disabled={disabled}>
                {state.menuName}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Hamburger state={state} />
    </header>
  );
};

export default withRouter(Header);

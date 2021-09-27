import React, { lazy } from "react";
import "./App.scss";
import Header from "./components/navbar/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Suspense } from "react";
import Loader from "./components/loader";

const Home = lazy(() => import("./pages/home"));
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <div className="wrapper">
            <div className="home">
              <Suspense fallback={<Loader />}>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route
                    exact
                    path="/opportunities"
                    component={Opportunities}
                  />
                  <Route exact path="/solutions" component={Solutions} />
                  <Route exact path="/contact-us" component={Contact} />
                </Switch>
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

function Opportunities() {
  return <p>Discover our numerous opportunities</p>;
}

function Solutions() {
  return <p>Solutions that help you.</p>;
}

function Contact() {
  return <p>Feel free to reach us.</p>;
}

export default App;

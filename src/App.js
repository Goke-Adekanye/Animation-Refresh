import React, { lazy } from "react";
import "./App.scss";
import Header from "./components/navbar/Header";
import CustomCursor from "./components/CustomCursor";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Suspense } from "react";
import Loader from "./components/loader";

const Home = lazy(() => import("./pages/home"));
const Discover = lazy(() => import("./pages/discover"));
const About = lazy(() => import("./pages/about"));
function App() {
  return (
    <Router>
      <div className="App">
        <CustomCursor />
        <Header />

        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/discover" component={Discover} />
            <Route exact path="/about" component={About} />
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;

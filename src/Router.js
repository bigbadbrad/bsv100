import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

// components
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import BottomBar from "./components/BottomBar";

// styles
import Container from "./styles/Container";

// pages
import Home from "./pages/Home";
import About from "./pages/About";

const AppRouter = () => (
  <Router>
    <ScrollToTop />
    <Navbar />
    {/* <BottomBar /> */}
    <Container>
      <Switch>
        <Route path="about" component={About} />
        <Route path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </Container>
  </Router>
);

export default AppRouter;

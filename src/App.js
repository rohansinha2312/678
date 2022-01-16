import React from "react";
import {
  Footer,
  Blog,
  Possibility,
  Features,
  Whatxstem3,
  Header,
} from "./containers";
import { CTA, Navbar } from "./components";
import "./App.css";

const App = () => (
  <div className="App">
    <div className="gradient_bg">
      <Navbar />
      <Header />
    </div>
    <Whatxstem3 />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Footer />
  </div>
);

export default App;

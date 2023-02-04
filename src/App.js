import React from "react";
import {
  Blog,
  WhatGPT3,
  Header,
  Features,
  Footer,
  Possibility,
} from "./containers";
import { Navbar, CTA, Brand } from "./Components";
import "./App.css";
const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
      </div>
    </div>
  );
};

export default App;

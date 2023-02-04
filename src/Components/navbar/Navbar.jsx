import React from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLin } from "react-icons";
import logo from "../../assets /logo.svg";

const Navbar = () => {
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links-logo">
          <img src={logo} alt="" />
        </div>
        <div className="gpt3__navbar-links-container">
          <p>
            <a href="#home">Home</a>
            <a href="#wgpt3">What is GPT3</a>
            <a href="#possibility">Open Ai</a>
            <a href="#features">Case Studies</a>
            <a href="#blog ">Library</a>
          </p>
        </div>
        <div className="gpt3__navbar-sign">
          <p>Sign In</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

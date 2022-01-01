import React from "react";
import "./header.css";
import people from "../../assets /people.png";
import AI from "../../assets /ai.png";

const Header = () => {
  return (
    <div className="gpt3__header-container">
      <div className="gpt3-header-left-content">
        <h1>Let's Build Something Amazing With GPT-3 OpenAI</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
          quam dolorem ipsa, quisquam, illum distinctio sint hic vero tenetur
          eaque quos eligendi veritatis illo magnam nam, suscipit amet dolore
          consectetur.
        </p>
        <div className="gpt3-cta-container">
          <input type="email" placeholder="Enter email address" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3-header-people-container">
          <img src={people} alt="people" />
          <p>1,600 people requested access to visit in the last 24 hours</p>
        </div>
      </div>
      <div className="gpt3-header-right-content">
        <img src={AI} alt="ai" />
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import { Feature } from "../../Components";
import "./whatGPT3.css";

const WhatGPT3 = () => {
  return (
    <div className="whatgpt3-container">
      <div className="whatgpt3-header-title">
        <Feature
          title="What Chat GPT3"
          text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              laborum reprehenderit dolores necessitatibus accusantium adipisci dolores necessitatibus accusantium adipisci"
        />
      </div>
      <div className="whatgpt3-title">
        <h1>
          The possibilities are <br />
          beyond your <br />
          imagination
        </h1>
        <p>Explore the Library</p>
      </div>
      <div className="whatgpt3-feature-bots-container">
        <div className="whatgpt3-chatbots-container">
          <div className="whatgpt-bots-title">
            <Feature
              title="ChatBots"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              laborum reprehenderit dolores necessitatibus accusantium adipisci
             "
            />
          </div>
          <div className="whatgpt-bots-title">
            <Feature
              title="KnowledgeBase"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              laborum reprehenderit dolores necessitatibus accusantium adipisci
            "
            />
          </div>
          <div className="whatgpt-bots-title">
            <Feature
              title="Education"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              laborum reprehenderit dolores necessitatibus accusantium adipisci
             "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatGPT3;

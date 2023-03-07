import React from "react";
import "./features.css";
import Feature from "../../Components/feature/Feature";

// const FeaturesData = [
//   {
//     title: "Improving and distructs instantly",
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//   },
//   {
//     title: "Become the tenderd active",
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//   },
//   {
//     title: "Message or I am nothing",
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//   },
//   {
//     title: "Really boy law county",
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//   },
// ];

const Features = () => {
  return (
    <div className="gpt3__features">
      {/* <div className="gpt3-feature-inner-container"> */}
      <div className="gpt3__features-heading">
        <h1>
          The future is now and you just need to realize it. Step into future
          today and make it happen
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="gpt3__features-right-container">
        <div className="gpt3-features-right">
          <h3>Title</h3>
        </div>
        <div className="gpt3-features-right">
          <h3>paragraph</h3>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Features;

import React from "react";
import "./possibility.css";
const Job = [
  {
    company: "Google",
    position: "Senior SDE",
    salary: 20000,
  },
];
const Possibility = () => {
  return (
    <div>
      {Job.company}
      <Job salary={12000} position="Junior SDE" company="Amazon" />
      <Job salary={10000} position="Project Manager " company="Netflix" />
    </div>
  );
};

export default Possibility;

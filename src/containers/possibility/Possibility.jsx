import React from "react";
import "./possibility.css";
const job = [
  {
    company: "Google",
    position: "Senior SDE",
    salary: 20000,
  },
];
const Possibility = () => {
  return (
    <div>
      {job.company}
      <job salary={12000} position="Junior SDE" company="Amazon" />
      <job salary={10000} position="Project Manager " company="Netflix" />
    </div>
  );
};

export default Possibility;

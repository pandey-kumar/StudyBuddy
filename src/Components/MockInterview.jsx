import React from "react";
import "./MockInterview.css";

const MockInterview = () => {
  return (
    <div className="part-3">
      <div className="heading-service">
        <div className="cir-ser-1"></div>
        <div className="cir-ser-2"></div>
        <h4>OUR SERVICES</h4>
      </div>
      <h1>
        Find out more about <br />
        our StudyBuddy
      </h1>
      <p>
        With job searches, resume building, progress tracking, and career
        solutions.
      </p>
      <div className="services">
        {/* Add each service with the same structure */}
        <div className="services-item ser-1">
          <div className="hover-div h-div-1"></div>
          <h2>01</h2>
          <h2 className="ser-name" onClick={alert("clicked")}>
            Profile Builder
          </h2>
          <i className="ri-arrow-right-circle-fill"></i>
        </div>
        <div className="services-item ser-1">
          <div className="hover-div h-div-1"></div>
          <h2>02</h2>
          <h2 className="ser-name">Knowledge Builder</h2>
          <i className="ri-arrow-right-circle-fill"></i>
        </div>
        <div className="services-item ser-1">
          <div className="hover-div h-div-1"></div>
          <h2>03</h2>
          <h2 className="ser-name">Hackathons</h2>
          <i className="ri-arrow-right-circle-fill"></i>
        </div>
        <div className="services-item ser-1">
          <div className="hover-div h-div-1"></div>
          <h2>04</h2>
          <h2 className="ser-name">Job/Exams</h2>
          <i className="ri-arrow-right-circle-fill"></i>
        </div>
      </div>
    </div>
  );
};

export default MockInterview;

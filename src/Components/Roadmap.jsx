import React from "react";
import "./Roadmap.css";
const Roadmap = () => {
  return (
    <div className="part-1">
      <div className="content-part-1">
        <div className="rotate-div">
          {/* Repeat the img divs for rotating images */}
          <div id="row-div-1" className="row-div">
            <div className="img-div">
              <img src="./Assets/Images/1.jpeg" alt="" />
            </div>
            <div className="img-div">
              <img src="./Assets/Images/1.jpeg" alt="" />
            </div>
            <div className="img-div">
              <img src="./Assets/Images/1.jpeg" alt="" />
            </div>
            <div className="img-div">
              <img src="./Assets/Images/1.gif" alt="" />
            </div>
          </div>
          {/* Add the other rows similarly */}
        </div>
        <div className="overlay-div">
          <h1 className="ttle">StudyBuddy</h1>
          <div className="scroll-down">
            <h3>SCROLL DOWN</h3>
            <div className="scroll-p">
              <div className="scrolling"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;

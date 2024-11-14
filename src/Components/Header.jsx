import React from "react";
import "./Header.css"; 

const Header = () => {
  return (
    <nav>
      <div className="lft-nav">
        <h1>
          <img
            src="./img1.jpeg"
            className="circular-img"
            style={{
              height: "100px",
              width: "100px",
              backgroundColor: "lightblue",
            }}
            alt="Study Buddy Logo"
          />
        </h1>
      </div>
      <div className="rght-nav">
        <h2 className="contactus" style={{ fontSize: "1.5rem" }}>
          contactus@studybuddy.com
        </h2>
      </div>
    </nav>
  );
};

export default Header;

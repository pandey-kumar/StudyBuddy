import React from "react";
import "./AIbot.css";

const AIbot = () => {
  return (
    <div className="part-4">
      <div className="lft-part-4">
        <h1>Expected Outcomes</h1>
        <div className="cir-part-4">
          <img
            src="https://assets-global.website-files.com/64b117fb0e09e8ce5768e4fe/64b7d30aa9b24259d10be24d_symbol.svg"
            alt=""
          />
        </div>
      </div>
      <div className="rght-part-4">
        <div className="content-rght-part-4 c-one">
          <h1 className="tout">Profile Builder</h1>
          <p className="outcome">
            A strong hackathon profile demonstrates problem-solving...
          </p>
        </div>
        {/* Repeat for other outcomes */}
      </div>
    </div>
  );
};

export default AIbot;

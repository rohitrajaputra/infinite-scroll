import React from "react";

//this is a custom header component

const Header = () => {
  return (
    <div className="ui top fixed menu">
      <div className="ui center aligned container">
        <h1 style={{ margin: "auto" }}>
          <span style={{ color: "red" }}>Infinity</span>Scroll
          <span style={{ fontSize: "10px", color: "red" }}>by Rohit</span>
        </h1>
      </div>
    </div>
  );
};

export default Header;

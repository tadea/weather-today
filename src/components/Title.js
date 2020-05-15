import React from "react";
import "../App.css";

class Title extends React.Component {
  state = {};
  render() {
    return (
      <div className="container">
        <h1>Weather Today</h1>
        <p>Get the latest weather conditions</p>
      </div>
    );
  }
}

export default Title;

import React from "react";
import Clock from "./Clock";

class Title extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <h5>
          <Clock />
        </h5>
        <h1>Weather Today</h1>
        <p>Get the latest weather conditions</p>
      </div>
    );
  }
}

export default Title;

import React from "react";
import Clock from "./Clock";

class Title extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <h5 className="title-container__clock">
          <Clock />
        </h5>
        <h1 className="title-container__title">Weather Today</h1>
        <p className="title-container__subtitle">
          Get the latest weather conditions
        </p>
      </div>
    );
  }
}

export default Title;

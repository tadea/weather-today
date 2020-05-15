import React from "react";
import "../App.css";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  getCurrentDate() {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return month + "-" + date + "-" + year;
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div className="container">
        <p>Your Local Time and Date</p>
        <i class="far fa-clock"></i>{" "}
        {this.state.date.toLocaleTimeString()}<br></br>
        <i class="far fa-calendar-alt"></i>{" "}
        {this.getCurrentDate()}.
      </div>
    );
  }
}

export default Clock;

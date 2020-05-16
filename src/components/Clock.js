import React from "react";
import "../App.css";
import Container from "./Container";

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
    // returning compleat date object
    return month + "-" + date + "-" + year;
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  //  Why you have added this functoin here ? we don't need it.
  // componentWillUnmount() {
  //   clearInterval(this.timerID);
  // }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <Container>
        <p>Your Local Time and Date</p>
        <i className="far fa-clock"></i> {this.state.date.toLocaleTimeString()}
        <br></br>
        <i className="far fa-calendar-alt"></i> {this.getCurrentDate()}.
      </Container>
    );
  }
}

export default Clock;

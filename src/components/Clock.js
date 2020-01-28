import React from "react";

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
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <p>Your Local Time and Date</p>
        <p>
          {this.state.date.toLocaleTimeString()} || {this.getCurrentDate()}.
        </p>
      </div>
    );
  }
}

export default Clock;

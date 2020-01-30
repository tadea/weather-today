import React from "react";

class Weather extends React.Component {
  handleClicked() {
    this.props.clickHandler();
  }

  calculateTemp(degreesK, displayUnits) {
    if (displayUnits === "C") return Math.floor(degreesK - 273);
    else return Math.floor(((degreesK - 273) * 9) / 5 + 32);
  }

  render() {
    return (
      <div>
        {this.props.city && this.props.country && (
          <p>
            Location:{" "}
            <span>
              {this.props.city}, {this.props.country}
            </span>
          </p>
        )}

        {this.props.kelvinTemp && (
          <p>
            Temperature:{" "}
            <span onClick={this.handleClicked.bind(this)}>
              {this.calculateTemp(
                this.props.kelvinTemp,
                this.props.displayUnits
              )}
              &deg;
              {this.props.displayUnits}
            </span>
          </p>
        )}
        {this.props.tempMin && this.props.tempMax && (
          <p>
            Temperature Min/Max:{" "}
            <span onClick={this.handleClicked.bind(this)}>
              {this.calculateTemp(this.props.tempMin, this.props.displayUnits)}
              &deg;{this.props.displayUnits} |
              {this.calculateTemp(this.props.tempMax, this.props.displayUnits)}
              &deg;
              {this.props.displayUnits}
            </span>
          </p>
        )}
        {/* {this.props.tempMax && (
          <p>
            Temperature Max:{" "}
            <span onClick={this.handleClicked.bind(this)}>
              {this.calculateTemp(this.props.tempMax, this.props.displayUnits)}
              &deg;
              {this.props.displayUnits}
            </span>
          </p>
        )} */}
        {this.props.humidity && (
          <p>
            Humidity: <span>{this.props.humidity}%</span>
          </p>
        )}
        {this.props.description && (
          <p>
            Condition: <span>{this.props.description}</span>
          </p>
        )}
        {/* {this.props.timezone && <p>Timezone: {this.props.timezone}</p>} */}
        {this.props.error && (
          <p>
            <span>{this.props.error}</span>
          </p>
        )}
        {this.props.pressure && (
          <p>
            Pressure: <span>{this.props.pressure}hPa</span>
          </p>
        )}

        {this.props.error && (
          <p>
            <span>{this.props.error}</span>
          </p>
        )}
        {this.props.icon && (
          <p>
            <img
              src={`http://openweathermap.org/img/w/${this.props.icon}.png`}
              alt="wthr img"
            />
          </p>
        )}
      </div>
    );
  }
}

export default Weather;

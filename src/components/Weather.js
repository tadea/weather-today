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
      <div className="weather__info">
        {this.props.city && this.props.country && (
          <p className="weather__key">
            {" "}
            <i className="fas fa-location-arrow"></i> Location:{" "}
            <span className="weather__value">
              {this.props.city}, {this.props.country}
            </span>
          </p>
        )}

        {this.props.kelvinTemp && (
          <p className="weather__key">
            <i className="fas fa-thermometer-three-quarters"></i> Temperature:{" "}
            <span
              onClick={this.handleClicked.bind(this)}
              className="weather__value"
            >
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
          <p className="weather__key">
            {" "}
            <i className="fas fa-sort"></i> Min/Max:{" "}
            <span
              onClick={this.handleClicked.bind(this)}
              className="weather__value"
            >
              {this.calculateTemp(this.props.tempMin, this.props.displayUnits)}
              &deg;{this.props.displayUnits} |
              {this.calculateTemp(this.props.tempMax, this.props.displayUnits)}
              &deg;
              {this.props.displayUnits}
            </span>
          </p>
        )}
        {this.props.humidity && (
          <p className="weather__key">
            {" "}
            <i className="fas fa-tint"></i> Humidity:{" "}
            <span className="weather__value">{this.props.humidity}%</span>
          </p>
        )}
        {this.props.description && (
          <p className="weather__key">
            {" "}
            <i className="fas fa-bars"></i> Condition:{" "}
            <span className="weather__value">{this.props.description}</span>
          </p>
        )}
        {this.props.pressure && (
          <p className="weather__key">
            {" "}
            <i className="fas fa-wind"></i> Pressure:{" "}
            <span className="weather__value">{this.props.pressure} hPa</span>
          </p>
        )}

        {this.props.error && (
          <p className="weather__key">
            {" "}
            <i className="fas fa-exclamation"></i>{" "}
            <span className="weather__value">{this.props.error}</span>
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

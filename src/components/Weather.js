import React from "react";
import "../App.css";

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
      <div className="container">
        <div className="cards pt-4">
          <h1>
            {this.props.city && this.props.country && (
              <p>
                {this.props.city}, {this.props.country}
              </p>
            )}
          </h1>
          {this.props.icon && (
            <p>
              <img
                src={`http://openweathermap.org/img/w/${this.props.icon}.png`}
                alt="wthr img"
                size="40px"
              />
            </p>
          )}
          <h1 className="py-2">
            {this.props.kelvinTemp && (
              <p>
                <i className="fas fa-thermometer-three-quarters"></i>{" "}
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
          </h1><br></br>
          <h4 className="py-6">
            {this.props.description && (
              <p>
                {" "}
                <i className="fas fa-info"></i>{" "}
                <span>{this.props.description}</span>
              </p>
            )}
          </h4>
          <h4 className="py-3">
            {this.props.tempMin && this.props.tempMax && (
              <p>
                {" "}
                <i className="fas fa-sort"></i> Min/Max:{" "}
                <span onClick={this.handleClicked.bind(this)}>
                  {this.calculateTemp(
                    this.props.tempMin,
                    this.props.displayUnits
                  )}
                  &deg;{this.props.displayUnits} |
                  {this.calculateTemp(
                    this.props.tempMax,
                    this.props.displayUnits
                  )}
                  &deg;
                  {this.props.displayUnits}
                </span>
              </p>
            )}
          </h4>
          <h4 className="py-4">
            {this.props.humidity && (
              <p>
                {" "}
                <i className="fas fa-water"></i> Humidity:{" "}
                <span>{this.props.humidity}%</span>
              </p>
            )}
          </h4>
          <h4 className="py-5">
            {this.props.pressure && (
              <p>
                {" "}
                <i className="fas fa-tachometer-alt"></i> Pressure:{" "}
                <span>{this.props.pressure} hPa</span>
              </p>
            )}
          </h4>
          <h4>
            {this.props.error && (
              <p>
                {" "}
                <i></i> <span>{this.props.error}</span>
              </p>
            )}
          </h4>
        </div>
      </div>
    );
  }
}

export default Weather;

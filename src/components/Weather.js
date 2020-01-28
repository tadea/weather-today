import React from "react";

class Weather extends React.Component {
  render() {
    return (
      <div>
        {this.props.city && this.props.country && (
          <p>
            Location:
            <span>
              {this.props.city}, {this.props.country}
            </span>
          </p>
        )}
        {this.props.kelvinTemp && <p>Temperature: {this.props.kelvinTemp}</p>}
        {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
        {this.props.description && <p>Timezone: {this.props.timezone}</p>}
        {this.props.error && <p>{this.props.error}</p>}
      </div>
    );
  }
}

export default Weather;

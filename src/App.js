import React from "react";
import "./App.css";
import Weather from "./components/Weather";
import Title from "./components/Title";
import Form from "./components/Form";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

class App extends React.Component {
  state = {
    kelvinTemp: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    // displayUnits: "F",
    error: undefined,
    timezone: undefined
  };
  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`
    );

    const data = await api_call.json();
    console.log(data);
    if (city && country) {
      this.setState({
        kelvinTemp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].main,
        unit: data.main.temp,
        error: "",
        timezone: data.timezone
      });
    } else {
      this.setState({
        kelvinTemp: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        unit: undefined,
        timezone: undefined,
        error: "Please Enter Correct Values"
      });
    }
  };

  render() {
    return (
      <div>
        <Title />
        <Form getWeather={this.getWeather} />
        <Weather
          kelvinTemp={this.state.kelvinTemp}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          timezone={this.state.timezone}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;

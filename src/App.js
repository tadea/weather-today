import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Weather from "./components/Weather";
import Title from "./components/Title";
import Form from "./components/Form";
import Clock from "./components/Clock";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

class App extends React.Component {
  state = {
    kelvinTemp: undefined,
    tempMin: undefined,
    tempMax: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    pressure: undefined,
    displayUnits: "F",
    error: false,
    icon: undefined,
  };

  toggleDisplayUnits() {
    this.state.displayUnits === "F"
      ? this.setState({
          displayUnits: "C",
        })
      : this.setState({
          displayUnits: "F",
        });
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`
    );

    const data = await api_call.json();
    try {
      if (city && country) {
        this.setState({
          kelvinTemp: data.main.temp,
          tempMin: data.main.temp_min,
          tempMax: data.main.temp_max,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          pressure: data.main.pressure,
          unit: data.main.temp,
          error: false,
          icon: data.weather[0].icon,
        });
      } else {
        this.setState({
          kelvinTemp: undefined,
          tempMin: undefined,
          tempMax: undefined,
          city: undefined,
          country: undefined,
          humidity: undefined,
          description: undefined,
          pressure: undefined,
          unit: undefined,
          icon: undefined,
          error: "Please Enter Correct Values",
        });
      }
    } catch (error) {
      alert("Sorry, try again!");
    }
  };

  render() {
    return (
      <div className="App">
        <Title />
        <Clock />

        <Form getWeather={this.getWeather} />
        <Weather
          kelvinTemp={this.state.kelvinTemp}
          tempMin={this.state.tempMin}
          tempMax={this.state.tempMax}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          pressure={this.state.pressure}
          displayUnits={this.state.displayUnits}
          clickHandler={this.toggleDisplayUnits.bind(this)}
          error={this.state.error}
          icon={this.state.icon}
        />
      </div>
    );
  }
}

export default App;

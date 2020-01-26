import React from "react";
import "./App.css";
import Weather from "./components/Weather";
import Title from "./components/Title";
import Form from "./components/Form";

class App extends React.Component {
  render() {
    return (
      <div>
        <Weather />
        <Title />
        <Form />
      </div>
    );
  }
}

export default App;

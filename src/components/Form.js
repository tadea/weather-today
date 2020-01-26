import React from "react";

class Form extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <form>
          <input type="text" name="city" placeholder="City" />
          <input type="text" name="country" placeholder="Country" />
          <button>Get Weather</button>
        </form>
      </div>
    );
  }
}

export default Form;

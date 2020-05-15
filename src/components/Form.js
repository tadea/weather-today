import React from "react";
import "../form.css";

const Form = (props) => {
  return (
    <div className="container">
      <form onSubmit={props.getWeather}>
        <div className="row">
          <div className="col-md-3 offset-md-2">
            <input
              type="text"
              name="city"
              className="form-control"
              placeholder="City"
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              name="country"
              className="form-control"
              placeholder="Country"
            />
          </div>
          <div className="col-md-3 mt-md-0 mt-2 text-md-left">
            <button className="btn btn-default">Get Weather</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;

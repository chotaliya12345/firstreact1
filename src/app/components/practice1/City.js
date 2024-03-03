import React, { Component } from "react";

class City extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Surat",
      cityarea: "461.6 km²",
      population: "6,520,000",
    };
  }

  ChangeCity = () => {
    this.setState({
      name: "New York",
      cityarea: "783.8 km²",
      population: "84.7 lakhs",
    });
  };

  render() {
    return (
      <>
        <div>City</div>
        <h1>
          My City Is {this.props.countryName === "India" ? "Surat" : "New York"}
        </h1>
        <h2>
          City area is:{" "}
          {this.props.countryName === "India" ? "461.6 km²" : "783.8 km²"}
        </h2>
        <h2>
          City population is:{" "}
          {this.props.countryName === "India" ? "6,520,000" : "84.7 lakhs"}
        </h2>

        <button onClick={this.ChangeCity}>Change City</button>
      </>
    );
  }
}

export default City;

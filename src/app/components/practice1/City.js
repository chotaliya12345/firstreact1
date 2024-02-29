import React, { Component } from "react";

class City extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : 'Surat',
            cityarea: '461.6 km²',
            population: '6,520,000'
        }
    }
    
    ChangeCity = () => {
        this.setState({
            name: 'GandhiNagar',
            cityarea: '326 km²',
            population: '14.54 Lakhs'
        })
    }
  
    render() {
    return (
      <>
        <div>City</div>
        <h1>My City Is {this.state.name}</h1>
        <h2>City area is: {this.state.cityarea}</h2>
        <h2>City population is: {this.state.population}</h2>

        <button onClick={this.ChangeCity}>Change City</button>
      </>
    );
  }
}

export default City;

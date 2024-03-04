import React, { Component } from "react";
import City from "./City";

class Country extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : 'India',
            timezone : 'GMT + 5:30'
        }
    }
    
    ChangeCountry = () => {
        this.setState({
            name : 'USA',
            timezone : 'GMT -5'
        })
    }
  
    render() {
    return (
      <>
        <div>Country</div>
        <h1>My Country Is {this.state.name}</h1>
        <h2>Time zone is: {this.state.timezone}</h2>

        <button onClick={this.ChangeCountry}>Change Cuontry</button>

        <City countryName = {this.state.name} />
      </>
    );
  }
}

export default Country;

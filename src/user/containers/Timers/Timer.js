import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: new Date(),
    };
  }

  tick = () => {
    this.setState({
      time: new Date(),
    });
  };

  componentDidMount = () => {
    this.timerRef = setInterval(this.tick, 1000);
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.time !== prevState.time) {
      console.log("dfhfg");
    }
  };

  componentWillUnmount = () => {
    clearInterval(this.timerRef);
  };

  render() {
    return (
      <div>
        <h2>Timer</h2>

        <h3>{this.state.time.toLocaleTimeString()}</h3>
      </div>
    );
  }
}

export default Timer;

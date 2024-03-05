import React, { Component } from 'react';

class CounterClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count : 0
        }
    }

    handleInc = () => {
        this.setState({count: this.state.count + 1})
    }

    handleDec = () => {
        this.setState({count: this.state.count - 1})
    }
    
    render() {
        return (
            <>
                <h1>Counter</h1>
                <span>Your choices {this.state.count} </span>
                <button onClick={this.handleInc}disabled = {this.state.count < 5 ? false : true} >+</button>
                <button onClick={this.handleDec}disabled = {this.state.count === 0 ? true : false} >-</button>
            </>
        );
    }
}

export default CounterClass;
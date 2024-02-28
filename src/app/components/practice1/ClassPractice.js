import React from "react";
class ClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.description}</p>
                <button onClick={() => this.setState({ count: this.state.count + 3 })}>
                    Click me
                </button>
                <p>Count: {this.state.count}</p>
            </div>
        );
    }
}

export default ClassComponent
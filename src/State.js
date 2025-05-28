import { Component } from "react";

class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.count,
    };
  }

  increment = () => {
    this.setState((state) => ({ count: state.count + 1 }));
  };

  decrement = () => {
    this.setState((state) => ({ count: state.count - 1 }));
  };

  random = () => {
    this.setState({ count: Math.floor(Math.random() * 50) });
  };

  reset = () => {
    this.setState({ count: this.props.count });
  };

  render() {
    return (
      <div>
        <div>{this.state.count}</div>
        <div>
          <button onClick={this.increment}>INC</button>
          <button onClick={this.decrement}>DEC</button>
          <button onClick={this.random}>RND</button>
          <button onClick={this.reset}>RES</button>
        </div>
      </div>
    );
  }
}

export default State;
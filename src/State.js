import { Component } from "react";
import { Wrapper, Count, ButtonsWrapper, Button } from "./styled-components";

// ✅ Just import and use styled components as regular React elements
// Props like className, children work normally

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
      <Wrapper className={this.props.className}>
        {this.props.render(this.state.count)}
        <ButtonsWrapper>
          <Button onClick={this.increment}>INC</Button>
          <Button onClick={this.decrement}>DEC</Button>
          <Button onClick={this.random}>RND</Button>
          <Button as="a" onClick={this.reset}>
            RES
          </Button>
        </ButtonsWrapper>
      </Wrapper>
    );
  }
}

export default State;

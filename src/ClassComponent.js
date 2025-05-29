import { Component } from "react";

class ClassComponent extends Component {
  // ✅ CONSTRUCTOR:
  // Use the constructor when:
  // 1. You need to initialize local state
  // 2. You need to bind event handlers (in older class components)
  // If not needed, the constructor can be omitted.

  // React automatically passes `props` to the base class (Component) if no constructor is defined.
  // If you do define a constructor, you MUST call super(props) to ensure this.props is properly initialized.

  // `props` are read-only and come from the parent component.
  // `state` is dynamic and specific to the current component instance.

  constructor(props) {
    super(props);
    this.state = {
      years: 27,
      text: "years",
    };
  }

  // ✅ STATE:
  // To **read state**, use this.state.property (e.g. this.state.years).
  // To **update state**, use this.setState().
  // Calling setState() triggers a re-render of the component.

  // setState() is asynchronous:
  // - React may batch multiple state updates for performance.
  // - So relying on `this.state` immediately after setState() may lead to stale values.
  // - To ensure correct state update based on previous state, use a callback form:
  //   this.setState(prevState => ({ ... }))

  // When using the callback form of setState:
  // - The callback receives the latest `prevState`
  // - Only the properties you return in the object will be updated (shallow merge)

  nextYear = () => {
    // Wrap the returned object in parentheses to avoid using an explicit return statement.
    this.setState((prevState) => ({ years: prevState.years + 1 }));
  };

  render() {
    const { name, surname } = this.props;
    const { years, text } = this.state;

    return (
      <div>
        <p>{name}</p>
        <p>{surname}</p>
        <p onClick={this.nextYear}>
          {years} {text}
        </p>
      </div>
    );
  }
}

export default ClassComponent;

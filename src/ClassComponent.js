import { Component } from "react";

class ClassComponent extends Component {
  // ✅ CONSTRUCTOR:
  // The constructor is needed here to:
  // - Initialize local state
  // - (Optionally) bind methods if you're not using arrow functions

  // If you define a constructor, you MUST call super(props) to properly initialize `this.props`.
  constructor(props) {
    super(props);
    this.state = {
      years: 27,
      text: "years",
      role: "", // Stores user input from the form
      color: "", // Controls text color dynamically
    };

    // 🔁 THREE WAYS TO BIND `this` in event handlers:
    // 1. Bind in constructor (older approach)
    // this.nextYear = this.nextYear.bind(this);

    // 2. Use arrow function in the method declaration (preferred in modern code)
    // 3. Use inline arrow function in render (less efficient, redefined on every render)
  }

  // ✅ STATE UPDATES:
  // setState is async — React may group/batch updates for performance.
  // To access current state safely, use the functional form of setState.

  // Note: this method is **NOT** an arrow function, so `this` is undefined unless bound.
  // That's why we either:
  // - Bind it manually
  // - Or use an arrow function in the render method to preserve context
  nextYear(color) {
    // Increments years and sets a new color
    // These two setState calls could be combined for optimization
    this.setState((prevState) => ({ years: prevState.years + 1 }));
    this.setState({ color: color });
  }

  // ✅ ARROW FUNCTION METHOD:
  // Arrow functions do NOT have their own `this`.
  // So `this` inside refers to the instance of the class.
  // This avoids the need to bind manually.
  commitInputChanges = (e) => {
    // Updates `role` in state as user types
    this.setState({ role: e.target.value });
  };

  render() {
    const { name, surname } = this.props;
    const { years, text, role } = this.state;

    return (
      <div>
        <p>{name}</p>
        <p>{surname}</p>

        <p
          // ✅ INLINE ARROW FUNCTION:
          // Preserves correct `this` context when calling a method that is not bound
          // ⚠️ Downside: a new function is created on every render (minor perf hit)
          style={{ color: this.state.color }}
          onClick={() => this.nextYear("red")}
        >
          {years} {text}
        </p>

        <p>{role}</p>

        <form>
          <span>Enter role</span>

          {/* ✅ FORM HANDLING: */}
          {/* Difference between `onInput` and `onChange` in React:
              - onInput: fires on every input (like native input event)
              - onChange: fires when the value changes — this works similarly to `onInput` for text inputs in React.
              → REACT STANDARD: Use onChange for text fields — it's consistent and cross-browser reliable.
          */}
          <input
            type="text"
            onChange={this.commitInputChanges}
            // OR: onInput={this.commitInputChanges} → works but not recommended
          />
        </form>
      </div>
    );
  }
}

export default ClassComponent;

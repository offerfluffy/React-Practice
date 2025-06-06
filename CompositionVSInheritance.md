### Class Inheritance vs Composition in React — Deep Explanation

#### 1. What is **Class Inheritance**?

* **Inheritance** means creating a new class that **extends** (inherits from) another class.
* The new class automatically gets all the methods and properties of the original (parent) class.
* You can add new methods or override existing ones in the child class.
* Example in React:

  ```jsx
  class Button extends React.Component {
    render() {
      return <button>Click me</button>;
    }
  }

  // Inherit from Button
  class RedButton extends Button {
    render() {
      return <button style={{ color: "red" }}>Click me</button>;
    }
  }
  ```
* The child class (`RedButton`) can reuse and modify behavior from the parent (`Button`).

**Pros of inheritance:**

* Reuse code and behavior easily.
* Clear “is-a” relationship: RedButton *is a* Button.

**Cons of inheritance:**

* Can create **tight coupling** between classes — child depends heavily on parent.
* Harder to change or combine behaviors dynamically.
* React community recommends avoiding deep inheritance for components because it reduces flexibility.

---

#### 2. What is **Composition**?

* **Composition** means building complex components by **combining simpler ones** — think “has-a” relationship.
* Instead of inheriting from a class, you use components *inside* other components.
* React encourages composition as the main way to build UI.
* Example:

  ```jsx
  // Simple Button component
  const Button = ({ children, style }) => <button style={style}>{children}</button>;

  // Composed RedButton uses Button and passes red style
  const RedButton = (props) => <Button {...props} style={{ color: "red" }} />;
  ```
* You can pass components as children, props, or use hooks to share logic.

**Pros of composition:**

* More flexible and reusable.
* Easier to combine and customize components dynamically.
* Encourages clear separation of concerns.
* Fits well with React's declarative and functional style.

**Cons of composition:**

* Sometimes requires more boilerplate code.
* Can be less straightforward for simple inheritance cases.

---

#### 3. What does React recommend?

* **Use composition over inheritance.**
  React’s official docs say that component inheritance is rarely necessary and recommend composition for most cases.

* Why?
  Because React components are essentially just functions (or classes) that return UI elements. Passing components as children or props is simpler, more flexible, and easier to maintain.

---

#### 4. When might you use inheritance?

* When working with legacy code or third-party libraries that require extending classes.
* When you want to enhance or customize existing class components *without* changing their source code (sometimes combined with `styled-components` or HOCs).

---

#### 5. When is composition better?

* Always in new React apps.
* When you want to build reusable UI blocks.
* When you want to customize behavior without tight coupling.
* When sharing logic, prefer composition with hooks or render props.

---

### Summary Table

| Feature               | Inheritance                    | Composition                      |
| --------------------- | ------------------------------ | -------------------------------- |
| Relationship          | “is-a”                         | “has-a”                          |
| React community style | Rarely used                    | Preferred                        |
| Flexibility           | Less flexible, tightly coupled | Highly flexible, loosely coupled |
| Code reuse            | Via class methods              | Via children, props, hooks       |
| Maintenance           | Harder with deep hierarchies   | Easier, clear separation         |
| Use cases             | Legacy or special cases        | Most React component patterns    |

---

### Final Advice for Beginners:

* Focus on **composition**. Think about building small components and assembling them together.
* Avoid extending React class components unless absolutely necessary.
* Use hooks and render props for logic sharing.
* Use styled-components or HOCs to enhance existing components instead of inheritance.

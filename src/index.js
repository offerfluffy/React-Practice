import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Header } from "./App";

// const elem = <h2>Hello World!</h2>;
// Babel converts JSX into code below (everyone uses JSX)

// const elem = React.createElement(
//   "h2",
//   { className: "greeting" },
//   "Hello World!"
// );

// const text = "Hello World";

// const elem = (
//   // use parentheses when multiple line of JSX code
//   // wrap into parent element

//   // can intorpolate everything except object (because converts into string)
//   // remeber to close tags
//   // use camelCase for attributes (!!! className, htmlFor !!!)
//   <div>
//     <h2 className="text">
//       Text: {text} Addition: {2 + 2} Array: {[2, 2]}
//     </h2>
//     <input type="text" />
//     <button>Click</button>
//   </div>
// );

const root = ReactDOM.createRoot(document.getElementById("root"));

// Components must be write with capital letter
// Component is block of UI, can have own state and behaviour (independt and can be reused and exported)
// Element is structured part of component (immutable, can only be rerendered)
root.render(
<App />
);

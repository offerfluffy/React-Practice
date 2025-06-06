import { Component } from "react"; // Import React Component class to create class components
import State from "./State"; // Import a class component named State
import ClassComponent from "./ClassComponent"; // Another class component
import styled from "styled-components"; // Library for styling React components with CSS-in-JS
import Dynamic from "./Dynamic"; // Functional component that styles its children
import BootstrapTest from "./BootstrapTest"; // Component to demonstrate React-Bootstrap layout

// -----------------------------------
// What is a styled-component?
// -----------------------------------
// styled-components is a library that lets you write CSS styles directly inside JS files
// You create "styled" versions of React components or HTML elements that include styles
// These styles are scoped only to that component, avoiding conflicts and simplifying CSS management

// -----------------------------------
// Extending a Class Component with Styles
// -----------------------------------
// Here we take the existing State component (which is a class component) 
// and create a new styled version of it without modifying the original.
// This is useful if you want to add styles to components you don't want to or can't change.

// styled(State) means "wrap the State component and add styles to it"
const StateWithStyles = styled(State)`
  background-color: lightblue;

  // This line sets text color based on a prop called 'color'. 
  // If no 'color' prop is passed, it defaults to "red".
  color: ${(props) => props.color || "red"};

  // Conditionally add padding if the 'active' prop is true
  padding: ${(props) => (props.active ? "15px" : "")};
`;

// -----------------------------------
// Functional Component - App
// -----------------------------------
// This is the main component rendered on the page.
// It returns JSX, which looks like HTML but is actually JavaScript that React uses to render UI.

// JSX allows us to use custom components as tags with props, similar to HTML attributes.
function App() {
  return (
    <div>
      {/* Using the original State component with a count prop */}
      <State count={0} />

      {/* Using the styled version with dynamic props color and active */}
      <StateWithStyles color="blue" active count={0} />

      {/* Rendering ClassComponent with two string props 'name' and 'surname' */}
      <ClassComponent name="Kyrylo" surname="Park" />

      {/* BootstrapTest creates a 2-column layout, left and right sides accept any JSX as props */}
      <BootstrapTest
        left={
          <Dynamic color="primary">
            {/* Children inside Dynamic are React elements - h2 tags */}
            <h2>Hello Left</h2>
            <h2>Hello 2 Left</h2>
          </Dynamic>
        }
        right={
          <Dynamic color="secondary">
            <h2>Hello Right</h2>
          </Dynamic>
        }
      />
    </div>
  );
}

export default App;

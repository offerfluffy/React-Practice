import { Component } from "react";
import "./App.css";
import State from "./State";
import ClassComponent from "./ClassComponent";
import styled from "styled-components";

// // Component is function that can return JSX and have some behaviour
// // !!! Capital letter for components !!!

// const Header = () => {
//   return <h2>Hello World</h2>;
// };

// // Component can be Class

// // extends React.Component
// class Field extends Component {
//   // need to have method render
//   render() {
//     const holder = "Enter here Class";
//     const styledField = {
//       width: "300px",
//     };

//     return <input type="text" placeholder={holder} style={styledField} />;
//   }
// }

// const FieldFunction = () => {
//   const holder = "Enter here Function";
//   const styledField = {
//     width: "300px",
//   };

//   // can interpolate inside attribute (style expects obj)
//   return <input type="text" placeholder={holder} style={styledField} />;
// };

// function Btn() {
//   const text = "Log in";
//   const logged = true;

//   // can use Expressions inside interpolation JSX
//   // can use trenary operator
//   return <button>{logged ? "Enter" : text}</button>;

//   // // can use function call
//   // const res = () => {
//   //   return "Log in";
//   // };

//   // // or another element
//   // const p = <p>{res()}</p>;
//   // return <button>{p}</button>;
// }

// ✅ Styled component with dynamic styles based on props
// 🔄 Inherits from 'State' class component – allows styling it without modifying original source
// 🎯 Useful when you want to enhance 3rd-party or legacy components with CSS
const StateWithStyles = styled(State)`
  background-color: lightblue;

  // 🎨 Uses 'color' prop or falls back to red
  color: ${props => props.color || "red"};

  // 🎯 Ternary logic for conditional padding
  padding: ${props => props.active ? "15px" : ""};
`;

// ✅ Usage example:
// <StateWithStyles color="blue" active />


function App() {
  return (
    <div>
      <State count={0} />
      <StateWithStyles color="blue" active count={0}/>
      <ClassComponent name="Kyrylo" surname="Park" />
    </div>
  );
}

// export { Header };
export default App;

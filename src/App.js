import { Component } from "react";
import "./App.css";
import State from "./State";

// Component is function that can return JSX and have some behaviour
// !!! Capital letter for components !!!


const Header = () => {
  return <h2>Hello World</h2>;
};

// Component can be Class

// extends React.Component
class Field extends Component {
  // need to have method render
  render() {
    const holder = "Enter here Class";
    const styledField = {
      width: "300px",
    };

    return <input type="text" placeholder={holder} style={styledField} />;
  }
}

const FieldFunction = () => {
  const holder = "Enter here Function";
  const styledField = {
    width: "300px",
  };

  // can interpolate inside attribute (style expects obj)
  return <input type="text" placeholder={holder} style={styledField} />;
};

function Btn() {
  const text = "Log in";
  const logged = true;

  // can use Expressions inside interpolation JSX
  // can use trenary operator
  return <button>{logged ? "Enter" : text}</button>;

  // // can use function call
  // const res = () => {
  //   return "Log in";
  // };

  // // or another element
  // const p = <p>{res()}</p>;
  // return <button>{p}</button>;
}

function App() {
  return (
    <div className="App">
      <State count={0}/>
    </div>
  );
}

export { Header };
export default App;

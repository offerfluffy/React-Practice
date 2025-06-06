import React from "react";

// -----------------------------------
// What does Dynamic do?
// -----------------------------------
// This component wraps its children inside a styled div with a Bootstrap border color based on the 'color' prop.
// It also enhances each child by adding extra CSS classes (shadow, padding, margin, border, rounded corners).

// React.cloneElement creates a *new* React element based on the existing one,
// but allows you to add or override props (like className).
// 
// This is important because React follows the principle of immutability —
// meaning you should never directly change or mutate existing React elements or props.
// Instead, you create new copies with the changes you want.
// 
// By cloning the element and adding a new className, we ensure the original child element
// remains unchanged and React can properly track changes and updates efficiently.

const Dynamic = (props) => {
  return (
    // The className here dynamically changes border color like "border-primary" or "border-secondary"
    <div className={"mb-3 p-3 border border-" + props.color}>
      
      {/* React.Children.map safely iterates over all children, even if there is only one child */}
      {React.Children.map(props.children, (child) => {
        // React.cloneElement clones the child element and adds or overrides props (here we add className) Cause need to follow immutability
        return React.cloneElement(child, {
          // Adds Bootstrap utility classes for styling the child element visually
          className: "shadow p-3 m-3 border rounded",
        });
      })}
    </div>
  );
};

export default Dynamic;

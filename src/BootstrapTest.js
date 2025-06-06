import { Container, Row, Col } from "react-bootstrap"; 
// React-Bootstrap components for responsive grid layout

// -----------------------------------
// What is React-Bootstrap?
// -----------------------------------
// React-Bootstrap is a popular UI library that provides ready-made components using Bootstrap styles
// Container, Row, and Col help create flexible grid layouts that adjust automatically on different screen sizes

// -----------------------------------
// BootstrapTest Component
// -----------------------------------
// This component receives two props: 'left' and 'right', which are React elements or JSX passed from parent.
// It lays out these two props side by side using Bootstrap grid columns.

const BootstrapTest = (props) => {
  return (
    <Container>
      <Row>
        {/* Each Col takes half of the row width by default */}
        <Col>{props.left}</Col>  
        <Col>{props.right}</Col>
      </Row>
    </Container>
  );
};

export default BootstrapTest;

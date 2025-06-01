import styled from "styled-components";

// ✅ Styled-components = CSS-in-JS with scoped styles per component
// ➕ Write actual CSS inside JavaScript with full power of both

// 🔹 Define a styled <div> with layout styles
const Wrapper = styled.div`
  max-width: 300px;
  margin: 0 auto;
  margin-top: 30px;
`;

// 🔹 Styled <div> for displaying count
// Styles are scoped – no global name collision
const Count = styled.div`
  text-align: center;
  font-size: 2rem;
`;

// 🔹 Flex container for action buttons
const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
`;

// 🔹 Styled button with pseudo-class
// &:hover works exactly like in CSS
const Button = styled.button`
  background-color: transparent;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px 15px;
  font-size: 1rem;

  &:hover {
    background-color: lightgray;
  }
`;

export { Wrapper, Count, ButtonsWrapper, Button };

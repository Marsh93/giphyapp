import styled from "styled-components";

const Button = styled.button`
  background: #6690ff;
  border: transparent;
  color: #fff;
  cursor: pointer;
  :disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
  font-weight: bold;
  margin-left: 5px;
  padding: 0.4rem;
  width: 200px;
`;

export default Button;

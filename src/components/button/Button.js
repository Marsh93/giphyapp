import styled, { css } from "styled-components";

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
  width: ${(props) => props.width};
  ${(props) =>
    props.icon &&
    css`
      display: flex;
      justify-content: space-around;
      aling-items: center;
    `}
`;

export default Button;

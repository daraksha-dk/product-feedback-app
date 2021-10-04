import styled from "styled-components";

//Links that act like buttons

export const StyledButton = styled.a`
  background-color: ${(props) => props.color};
  color: #fff;
  padding: 0.8em 1.25em;
  font-weight: 700;
  font-size: 0.8125rem;
  display: inline-block;
  text-decoration: none;
  border-radius: 10px;

  text-align: center; //need for button in newfeedback

  ${({ needsPlus }) =>
    needsPlus &&
    `
      ::before {
        content: url("/assets/shared/icon-plus.svg");
        margin-right: 4px;
      }
    `}

${({ margin }) =>
    margin &&
    `
    margin-bottom: 1rem;
      
    `}

 //The above is the equivalent to this
  /* ::before {
    content: url("/assets/shared/icon-plus.svg");
    margin-right: 4px;
  } */

  :hover {
    background-color: #c75af6;
  }
`;

export const CancelButton = styled(StyledButton)`
  :hover {
    background-color: #656EA3;
  }
`

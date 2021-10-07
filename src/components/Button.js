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

  ${({ plus }) =>
    plus &&
    `
      ::before {
        content: url("/assets/shared/icon-plus.svg");
        margin-right: 4px;
      }
    `}

  ${({ margin }) => margin && { marginBottom: "1rem" }}

  :hover {
    background-color: #c75af6;
  }
`;

export const CancelButton = styled(StyledButton)`
  :hover {
    background-color: #656ea3;
  }
`;

export const deleteButton = styled(StyledButton)`
  :hover {
    background-color: red;
  }
`;

export const FilterButton = styled.button`
  padding: 0.3125rem 1rem 0.375rem;
  border-radius: 10px;
  background-color: #f2f4ff;
  font-weight: 600;
  color: #4661e6;
  font-size: 13px;
  text-transform: capitalize;

  :hover {
    background-color: #cfd7ff;
  }

  :active {
    background-color: #4661e6;
    color: #fff;
  }
`;

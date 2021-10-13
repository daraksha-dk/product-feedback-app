import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }

  :hover {
    h5 {
      color: var(--royalBlue);
    }
  }
`;

export default (props) => <StyledLink {...props} />;

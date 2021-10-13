import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 1.5em;
`;

const ContainerDiv = ({ children }) => {
  return <Container>{children}</Container>;
};

export default ContainerDiv;

import React from "react";
import styled from "styled-components";

const Div = styled.div`
  background-color: #000;
  opacity: 50%;
  height: calc(100vh - (72px));
  width: 100%;
  position: absolute;
  top: 72px;
  left: 0;
  z-index: -10;
`;

const Overlay = () => {
  return <Div>hi</Div>;
};

export default Overlay;

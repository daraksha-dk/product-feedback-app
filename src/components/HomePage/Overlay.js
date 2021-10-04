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
  z-index: 1;
`;

//if user clicks on overlay it causes it to disappear
const Overlay = ({ toggle }) => {
  return <Div onClick={toggle}></Div>;
};

export default Overlay;

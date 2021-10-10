import React from "react";
import styled from "styled-components";
import { useParams } from "react-router";

const Div = styled.div`
  background-color: pink;
  height: 100vh;
`;
const RoadmapPage = () => {
  let { id } = useParams();
  console.log(id);
  return <Div>did this work?</Div>;
};

export default RoadmapPage;

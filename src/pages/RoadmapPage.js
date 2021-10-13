import React from "react";
import styled from "styled-components";
import { useParams } from "react-router";
import Container from "../components/Container";

export const RoadmapPage = () => {
  let { id } = useParams();
  console.log(id);
  return <Container>did this work?</Container>;
};


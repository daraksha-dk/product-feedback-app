import React from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import Container from "../Container";
import Feedback from "./Feedback";

const FeedbackDetail = () => {
  let { id } = useParams();

  return (
    <Container>
      {/* <Feedback /> */}
    </Container>
  );
};

export default FeedbackDetail;

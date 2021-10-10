import React from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import Container from "../components/Container";
import Feedback from "../components/Feedback/Feedback";

const FeedbackDetail = () => {
  let { id } = useParams();

  return (
    <Container>
      {/* <Feedback /> */}
    </Container>
  );
};

export default FeedbackDetail;

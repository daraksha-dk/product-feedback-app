import React from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { BackButton, StyledButton, EditButton } from "../components/Button";
import Container from "../components/Container";
import Feedback from "../components/Feedback/Feedback";
import { Link } from "react-router-dom";

const CommentDiv = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 1.5em;

  h3 {
    margin-bottom: 1.5rem;
  }
`;

const TextArea = styled.textarea`
  padding: 1em;
  background-color: #f7f8fd;
  border-radius: 10px;
  border: none;
  width: 100%;
  font-family: "Jost", sans-serif;
  margin-bottom: 1rem;
`;

const EndSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

const FeedbackDetail = () => {
  let { id } = useParams();

  return (
    <Container>
      <Nav>
        <BackButton as={Link} to="/" color="#647196">
          Go Back
        </BackButton>
        <EditButton as={Link} to="/" color="#4661E6">Edit Feedback</EditButton>
      </Nav>

      {/* COMMENTS SHOULD GO HERE */}

      <CommentDiv>
        <h3>Add comment</h3>
        <TextArea placeholder="Type your comment here"></TextArea>
        <EndSection>
          <p>250 characters left</p>
          <StyledButton as={Link} to="/" color="#AD1FEA">Post Comment</StyledButton>
        </EndSection>
      </CommentDiv>
    </Container>
  );
};

export default FeedbackDetail;

import React from "react";
import styled from "styled-components";
import { FilterButton, UpvoteButton } from "../Button";
import { Link } from "react-router-dom";

const FeedbackItem = styled.div`
  padding: 1.5em;
  background-color: white;
  margin-bottom: 1rem;
  border-radius: 10px;
  position: relative;
`;

const Title = styled.h5`
  color: #3a4374;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  font-size: 13px;
  font-weight: 400px;
  color: #647196;
  margin-bottom: 0.5rem;
`;

const CommentButton = styled.button`
  background-color: transparent;
  color: #3a4374;
  font-size: 13px;
  font-weight: 700;
  display: flex;

  ::before {
    content: url("/assets/shared/icon-comments.svg");
    margin-right: 6px;
  }
`;

const UpvoteDiv = styled.div`
  display: inline;
  align-self: center;
`;

const CommentDiv = styled.div`
  display: inline;
  align-self: center;
  position: absolute;
  right: 2rem;
  bottom: 1.75em;
`;

const MainInfo = styled.div``;

const Feedback = ({ feedback }) => {
  return (
    // TODO: see if theres a better way to style this link instead of using inline styles
    <Link to={`/feature/${feedback.id}`} style={{ textDecoration: "none" }}>
      <FeedbackItem>
        <MainInfo>
          <Title>{feedback.title}</Title>
          <Description>{feedback.description}</Description>
          <FilterButton margin="true">{feedback.category}</FilterButton>
        </MainInfo>

        <UpvoteDiv>
          <UpvoteButton>{feedback.upvotes}</UpvoteButton>
        </UpvoteDiv>

        <CommentDiv>
          {/* doesnt account for replies yet */}
          <CommentButton>
            {feedback.comments ? Object.keys(feedback.comments).length : 0}
          </CommentButton>
        </CommentDiv>
      </FeedbackItem>
    </Link>
  );
};

export default Feedback;

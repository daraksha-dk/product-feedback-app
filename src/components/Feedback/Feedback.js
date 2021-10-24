import React from "react";
import styled from "styled-components";
import { FilterButton, UpvoteButton } from "../Button";

const FeedbackCard = styled.div`
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

const calculate = (feedback) => {
  let commentLength = feedback.comments.length;

  feedback.comments.forEach((comment) => {
    if (comment.replies) {
      commentLength += comment.replies.length;
    }
  });

  return commentLength;
};

const Feedback = ({ feedback }) => {
  return (
    <FeedbackCard>
      <MainInfo>
        <Title>{feedback.title}</Title>
        <Description>{feedback.description}</Description>
        <FilterButton margin="true">{feedback.category}</FilterButton>
      </MainInfo>

      <UpvoteDiv>
        <UpvoteButton>{feedback.upvotes}</UpvoteButton>
      </UpvoteDiv>

      <CommentDiv>
        <CommentButton>
          {/* {console.log(feedback)} */}
          {feedback.comments ? calculate(feedback) : 0}
        </CommentButton>
      </CommentDiv>
    </FeedbackCard>
  );
};

export default Feedback;

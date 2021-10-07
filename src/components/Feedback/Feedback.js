import React from "react";
import styled from "styled-components";
import { FilterButton, StyledButton } from "../Button";

const FeedbackItem = styled.div`
  padding: 1.5em;
  background-color: white;
  margin-bottom: 1rem;
  border-radius: 10px;
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

const UpvoteButton = styled.button`
  padding: 0.375rem 1rem 0.4375rem;
  border-radius: 10px;
  background-color: #f2f4ff;
  font-weight: 600;
  color: #4661e6;
  font-size: 13px;

  :hover {
    background-color: #cfd7ff;
  }

  :active {
    background-color: #4661e6;
    color: #fff;
  }
`;

const CommentButton = styled.button`
  background-color: transparent;
  display: flex;
  justify-content: flex-end;
`;

const Feedback = ({ title, description, category, upvotes }) => {
  return (
    <FeedbackItem>
      <div>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <FilterButton>{category}</FilterButton>
      </div>
      <UpvoteButton>{upvotes}</UpvoteButton>
      <div>
        <CommentButton>0</CommentButton>
      </div>
    </FeedbackItem>
  );
};

export default Feedback;

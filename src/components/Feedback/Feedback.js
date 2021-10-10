import React from "react";
import styled from "styled-components";
import { FilterButton } from "../Button";
import { Link } from "react-router-dom";

const FeedbackLink = styled.a`
/* text-decoration: none; */
`

const FeedbackItem = styled.div`
  padding: 1.5em;
  background-color: white;
  margin-bottom: 1rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  text-decoration: none;
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
  color: #3a4374;
  font-size: 13px;

  :hover {
    background-color: #cfd7ff;
  }

  :active {
    background-color: #4661e6;
    color: #fff;
  }

  ::before {
    content: url("/assets/shared/icon-arrow-up.svg");
    margin-right: 6px;
  }
`;

const CommentButton = styled.button`
  background-color: transparent;
  color: #3a4374;
  font-size: 13px;
  font-weight: 700;

  ::before {
    content: url("/assets/shared/icon-comments.svg");
    margin-right: 6px;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Feedback = ({ id, title, description, category, upvotes, comments }) => {
  return (
    <Link to={`/feature/${id}`}>
      <FeedbackItem>
        <div>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <FilterButton margin="true">{category}</FilterButton>
        </div>

        <ButtonDiv>
          <UpvoteButton>{upvotes}</UpvoteButton>
          <CommentButton>{Object.keys(comments).length}</CommentButton>
        </ButtonDiv>
      </FeedbackItem>
    </Link>
  );
};

export default Feedback;

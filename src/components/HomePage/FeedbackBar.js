import React from "react";
import styled from "styled-components";
import { StyledButton } from "../Button";

const FeedbackNav = styled.div`
  background-color: #373f68;
  height: 56px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5em;
`;

const SearchBar = styled.p`
  font-weight: 700;
  font-size: 13px;

  ::after {
    content: url("/assets/shared/icon-arrow-down.svg");
    margin-left: 7px;
    color: #fff;
  }
`;

const Span = styled.span`
  font-weight: 400;
`;

const FeedbackBar = () => {
  return (
    <FeedbackNav>
      <SearchBar>
        <Span> Sort by : </Span> Most Upvotes
      </SearchBar>
      {/* Most upvotes Least upvotes Most comments Least comments Add */}
      <StyledButton needsPlus={true} href="/newfeedback" color="#AD1FEA">
        Add Feedback
      </StyledButton>
    </FeedbackNav>
  );
};

export default FeedbackBar;

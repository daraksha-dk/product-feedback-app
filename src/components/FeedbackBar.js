import React from "react";
import styled from "styled-components";

const FeedbackNav = styled.div`
  background-color: #373f68;
  height: 56px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5em;
  position: relative;
  z-index: -10;
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

const Button = styled.button`
  background-color: #ad1fea;
  padding: 0.8em 1.25em;
  color: #fff;
  font-weight: 700;
  border-radius: 10px;
  font-size: 13px;

  ::before {
    content: url("/assets/shared/icon-plus.svg");
    margin-right: 4px;
  }
`;

const FeedbackBar = () => {
  return (
    <FeedbackNav>
      <SearchBar>
        <Span> Sort by : </Span> Most Upvotes
      </SearchBar>
      {/* Most upvotes Least upvotes Most comments Least comments Add */}
      <Button>Add Feedback</Button>
    </FeedbackNav>
  );
};

export default FeedbackBar;

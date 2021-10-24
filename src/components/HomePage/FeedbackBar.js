import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { StyledButton } from "../Button";
import Dropdown from "../Dropdown";
import CommentDropdown from "../CommentDropdown";
import { SuggestionsContext } from "../../contexts/SuggestionsContext";

const FeedbackNav = styled.div`
  background-color: var(--darkBlue);
  height: 56px;
  color: var(--white);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5em;

  /* will need a media query  */
`;

const SearchBar = styled.div`
  display: flex;
  font-weight: 400;
  font-size: 13px;
  cursor: pointer;
  position: relative;

  ::after {
    content: url("/assets/shared/icon-arrow-down.svg");
    margin-left: 7px;
  }
`;

const Span = styled.span`
  font-weight: 700;
`;

const FeedbackBar = () => {
  const { sortingCategory, setSortingCategory } =
    useContext(SuggestionsContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const categories = [
    "Most Upvotes",
    "Least Upvotes",
    "Most Comments",
    "Least Comments",
  ];

  return (
    <FeedbackNav>
      <SearchBar onClick={toggle}>
        <p>
          Sort by : <Span>{sortingCategory}</Span>
        </p>
        <CommentDropdown
          categories={categories}
          setCategory={setSortingCategory}
          isOpen={isOpen}
        />
      </SearchBar>

      <StyledButton
        as={Link}
        to="/newfeedback"
        bgcolor="var(--brightPurple)"
        plus="true"
      >
        Add Feedback
      </StyledButton>
    </FeedbackNav>
  );
};

export default FeedbackBar;

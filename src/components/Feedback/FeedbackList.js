import React, { useContext } from "react";
import Feedback from "./Feedback";
import { SuggestionsContext } from "../../contexts/SuggestionsContext";
import { Link } from "react-router-dom";
import StyledLink from "../StyledLink";

const FeedbackList = () => {
  const { suggestions } = useContext(SuggestionsContext);

  const items = suggestions.map((feedback) => {
    return (
      <StyledLink key={feedback.id} to={`/feature/${feedback.id}`}>
        <Feedback feedback={feedback} />
      </StyledLink>
    );
  });

  return <div>{items}</div>;
};

export default FeedbackList;

import React, { useContext } from "react";
import Feedback from "./Feedback";
import { SuggestionsContext } from "../../contexts/SuggestionsContext";
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

import React, { useState } from "react";
import styled from "styled-components";
import EmptyFeedbackList from "./EmptyFeedbackList";
import Feedback from "./Feedback";

const FeedbackContainer = styled.div`
  padding: 1em;
  background-color: #f7f8fd;
  height: calc(100vh - (72px + 56px));
`;

const FeedbackList = () => {
  const [suggestionCount, setSuggestionCount] = useState(0);
  const [suggestions, setSuggestions] = useState([]);

  return (
    <FeedbackContainer>
      {suggestionCount === 0 ? <EmptyFeedbackList /> : null}
    </FeedbackContainer>
  );
};

export default FeedbackList;

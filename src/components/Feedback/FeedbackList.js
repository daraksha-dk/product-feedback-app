import React, { useState } from "react";
import styled from "styled-components";
import EmptyFeedbackList from "./EmptyFeedbackList";

const FeedbackContainer = styled.div`
  padding: 1em;
  background-color: #f7f8fd;
  height: calc(100vh - (72px + 56px));
`;

const FeedbackList = () => {
  const [suggestionCount, setSuggestionCount] = useState(0);

  return (
    <FeedbackContainer>
      {/* dynamically render feedback items */}

      {suggestionCount === 0 ? <EmptyFeedbackList /> : "there are feedbacks"}
    </FeedbackContainer>
  );
};

export default FeedbackList;

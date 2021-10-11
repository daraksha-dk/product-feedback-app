import React, { useState, useContext } from "react";
import Header from "../components/HomePage/Header";
import FeedbackBar from "../components/HomePage/FeedbackBar";
import EmptyFeedbackList from "../components/Feedback/EmptyFeedbackList";
import FeedbackList from "../components/Feedback/FeedbackList";
import styled from "styled-components";
import { SuggestionsContext } from "../contexts/SuggestionsContext";

const FeedbackContainer = styled.div`
  height: calc(100vh - (72px + 56px));
  padding: 1.5em 1em 1em 1em;
  background-color: #f7f8fd;
`;

const Suggestions = () => {
  const { suggestionCount, setSuggestionCount } =
    useContext(SuggestionsContext);

  console.log("COUNT THE SUGGESTIONS" + suggestionCount);

  return (
    <div>
      <Header />
      {/* Feedback bar will also need to keep up with the number of suggestions */}
      <FeedbackBar />

      <FeedbackContainer>
        {suggestionCount === 0 ? <EmptyFeedbackList /> : <FeedbackList />}
      </FeedbackContainer>
    </div>
  );
};

export default Suggestions;

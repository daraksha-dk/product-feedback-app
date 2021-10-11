import React, { useState, useContext } from "react";
import Header from "../components/HomePage/Header";
import FeedbackBar from "../components/HomePage/FeedbackBar";
import EmptyFeedbackList from "../components/Feedback/EmptyFeedbackList";
import FeedbackList from "../components/Feedback/FeedbackList";
import styled from "styled-components";
import { SuggestionsContext } from "../contexts/SuggestionsContext";

const FeedbackContainer = styled.div`
  padding: 2em 1em 2.4375em 1em;
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

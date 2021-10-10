import React, { useState } from "react";
import Header from "../components/HomePage/Header";
import FeedbackBar from "../components/HomePage/FeedbackBar";
import EmptyFeedbackList from "../components/Feedback/EmptyFeedbackList";
import Feedback from "../components/Feedback/Feedback";
import Data from "../data/data.json";
import styled from "styled-components";

const FeedbackContainer = styled.div`
  padding: 1.5em 1em 1em 1em;
  background-color: #f7f8fd;
`;

const Suggestions = () => {
  const [suggestionCount, setSuggestionCount] = useState(2);
  const [suggestions, setSuggestions] = useState([]);

  const addFeedback = (feedbackObj) => {
    setSuggestions([...suggestions].concat(feedbackObj)); //add to state variable
    setSuggestionCount(suggestionCount + 1);
  };

  const items = Data.productRequests.map((item) => {
    return (
      <Feedback
        key={item.id}
        id={item.id}
        title={item.title}
        category={item.category}
        description={item.description}
        upvotes={item.upvotes}
        comments={item.comments ? item.comments : ""} //doesn't include replies yet
      />
    );
  });

  return (
    <div>
      <Header />
      {/* Feedback bar will also need to keep up with the number of suggestions */}
      <FeedbackBar />

      {/* If there are no feedbacks, show empty screen */}

      <FeedbackContainer>
        {suggestionCount === 0 ? <EmptyFeedbackList /> : null}
        {items}
      </FeedbackContainer>
    </div>
  );
};

export default Suggestions;

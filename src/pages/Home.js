import React, { useContext } from "react";
import Header from "../components/HomePage/Header";
import FeedbackBar from "../components/HomePage/FeedbackBar";
import EmptyFeedbackList from "../components/Feedback/EmptyFeedbackList";
import FeedbackList from "../components/Feedback/FeedbackList";
import styled from "styled-components";
import { SuggestionsContext } from "../contexts/SuggestionsContext";

const FeedbackContainer = styled.div`
  padding: 2em 1em 2.4375em 1em;
`;

export const Home = () => {
  const { suggestions, feedbackCount, sortingCategory } =
    useContext(SuggestionsContext);

  const sort = () => {
    switch (sortingCategory) {
      case "Most Upvotes":
        suggestions.sort((a, b) => {
          return b.upvotes - a.upvotes;
        });
        break;

      case "Least Upvotes":
        suggestions.sort((a, b) => {
          return a.upvotes - b.upvotes;
        });
        break;

      case "Most Comments":
        suggestions.sort((a, b) => {
          suggestions.map((suggestion) => {
            let totalComments = 0;
            if (suggestion.comments) {
              //an array of comment objects
              // console.log(suggestion.comments); //add this
              totalComments += suggestion.comments.length;
              suggestion.comments.map((comment) => {
                if (comment.replies) {
                  // console.log(comment.replies.length); //and all this
                  totalComments += comment.replies.length;
                }
              });
            }
            // console.log(totalComments);
            return totalComments;
          });
          // console.log(a.totalComments);
          return a.totalComments - b.totalComments;
        });

        break;
      default:
        return;
    }
  };

  const filterSuggestions = () => {};

  //keep track of sorting in here?

  //Pass feedback count to feedback bar

  return (
    <div>
      <Header />
      {/* Feedback bar will also need to keep up with the number of suggestions*/}
      <FeedbackBar />

      <FeedbackContainer>
        {suggestions.length === 0 ? (
          <EmptyFeedbackList />
        ) : (
          <FeedbackList sort={sort} />
        )}
      </FeedbackContainer>
    </div>
  );
};

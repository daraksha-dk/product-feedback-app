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
          let totalComments = 0;
          if (a.comments) {
            totalComments += a.comments.length;
            a.comments.map((comment) => {
              if (comment.replies) {
                totalComments += comment.replies.length;
              }
            });
          } else {
            return 0;
          }

          return b.comments.length - a.comments.length;
        });

        break;

      case "Least Comments":
        suggestions.sort((a, b) => {
          let totalComments = 0;
          if (a.comments) {
            totalComments += a.comments.length;
            a.comments.map((comment) => {
              if (comment.replies) {
                totalComments += comment.replies.length;
              }
            });
          } else {
            return 0;
          }
          return a.comments.length - b.comments.length;
        });

        break;
      default:
        return;
    }
  };

  const filterSuggestions = () => {};

  return (
    <div>
      <Header />
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

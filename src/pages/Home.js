import React, { useContext } from "react";
import Header from "../components/HomePage/Header";
import FeedbackBar from "../components/HomePage/FeedbackBar";
import EmptyFeedbackList from "../components/Feedback/EmptyFeedbackList";
import FeedbackList from "../components/Feedback/FeedbackList";
import styled from "styled-components";
import { SuggestionsContext } from "../contexts/SuggestionsContext";
import Roadmap from "../components/HomePage/Roadmap";

const HomeContainer = styled.div`
  @media (min-width: 768px) {
    margin: 3.5rem 2.4375rem;
    max-width: 689px;
  }
`;

const HeaderContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
  }
`;

const FeedbackContainer = styled.div`
  padding: 2em 1em 2.4375em 1em;

  @media (min-width: 768px) {
  }
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

  sort();

  return (
    <HomeContainer>
      <HeaderContainer>
        <Header />

        {/* <Roadmap /> */}
        {/* need buttons thing */}
        {/* need roadmap component thing */}
      </HeaderContainer>

      <FeedbackBar />

      <FeedbackContainer>
        {suggestions.length === 0 ? <EmptyFeedbackList /> : <FeedbackList />}
      </FeedbackContainer>
    </HomeContainer>
  );
};

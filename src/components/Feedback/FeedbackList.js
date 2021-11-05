import React, { useContext } from "react";
import Feedback from "./Feedback";
import { SuggestionsContext } from "../../contexts/SuggestionsContext";
import StyledLink from "../StyledLink";
import { v4 as uuidv4 } from "uuid";

const FeedbackList = ({  }) => {
  const { suggestions } = useContext(SuggestionsContext);

  //sort the list before mapping it
  // sort();

  const items = suggestions.map((feedback) => {
    // console.log(feedback);
    return (
      <StyledLink
        key={uuidv4()}
        to={{
          pathname: `/feature/${feedback.id}`,
          state: { feedbackData: feedback },
        }}
      >
        <Feedback feedback={feedback} />
      </StyledLink>
    );
  });

  return <div>{items}</div>;
};

export default FeedbackList;

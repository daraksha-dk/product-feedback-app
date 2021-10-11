import React from "react";
import Data from "../../data/data.json";
import Feedback from "./Feedback";

const FeedbackList = () => {
  const items = Data.productRequests.map((feedback) => {
    return <Feedback key={feedback.id} feedback={feedback} />;
  });

  //not sure where adding a feedback goes at the moment
  const add = () => {
    //setSuggestions([...suggestions].concat(feedbackObj)); //add to state variable
    // increase suggestion count
    console.log("hi");
  };

  return <div>{items}</div>;
};

export default FeedbackList;

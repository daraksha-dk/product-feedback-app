import React from "react";
import Header from "./Header";
import FeedbackBar from "./FeedbackBar";
import FeedbackList from "../Feedback/FeedbackList";


const Suggestions = () => {
  
  return (
    <div>
      <Header />
      <FeedbackBar />

      {/* If there are no feedbacks, show empty screen */}

      {/* feedback list with all feedback*/}
      <FeedbackList />
    </div>
  );
};

export default Suggestions;

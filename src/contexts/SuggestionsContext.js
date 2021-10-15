import React, { useState, useEffect, createContext } from "react";
import Data from "../data/data.json";

export const SuggestionsContext = createContext();

export const SuggestionsProvider = ({ children }) => {
  const [suggestions, setSuggestions] = useState(null);
  const [feedbackCount, setFeedbackCount] = useState(0);
  const [loading, setLoading] = useState(true);

  //add goes in here maybe?
  const addFeedback = (feedbackObj) => {
    console.log("hi");
    setSuggestions([...suggestions, feedbackObj]);
  };

  useEffect(() => {
    if (suggestions) {
      setFeedbackCount(suggestions.length);
      setLoading(false);
    } else {
      setSuggestions(Data.productRequests);
    }
  }, [suggestions, feedbackCount]);

  const value = { suggestions, addFeedback };

  return (
    <SuggestionsContext.Provider value={value}>
      {!loading && children}
    </SuggestionsContext.Provider>
  );
};

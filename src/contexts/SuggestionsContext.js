import React, { useState, useEffect, createContext } from "react";
import Data from "../data/data.json";

export const SuggestionsContext = createContext();

export const SuggestionsProvider = ({ children }) => {
  const [suggestions, setSuggestions] = useState(null);
  const [feedbackCount, setFeedbackCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (suggestions) {
      setFeedbackCount(suggestions.length);
      setLoading(false);
    } else {
      setSuggestions(Data.productRequests);
    }
  }, [suggestions, feedbackCount]);

  const value = { suggestions };

  return (
    <SuggestionsContext.Provider value={value}>
      {!loading && children}
    </SuggestionsContext.Provider>
  );
};

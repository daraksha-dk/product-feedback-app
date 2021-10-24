import React, { useState, useEffect, createContext } from "react";
import Data from "../data/data.json";

export const SuggestionsContext = createContext();

export const SuggestionsProvider = ({ children }) => {
  const [productRequests, setProductRequests] = useState(null); //gets a copy of the product requests from json file

  const [suggestions, setSuggestions] = useState(null); //only gets product feedback requests that are suggestions
  const [suggestionCount, setSuggestionCount] = useState(0); //suggestion count ONLY
  const [loading, setLoading] = useState(true);

  const [sortingCategory, setSortingCategory] = useState("Most Upvotes");

  //Functions: add, delete, edit

  const addFeedback = (feedbackObj) => {
    console.log(feedbackObj.description);
    setSuggestions([...suggestions, feedbackObj]);
  };

  const getSuggestions = () => {
    const originalArray = Data.productRequests;
    const newArray = originalArray.filter(
      (productRequest) => productRequest.status === "suggestion"
    );
    setSuggestions(newArray);
  };

  //we only want the product feedback requests objects that have a the status property of "suggestion"

  //maybe filter methods come in here

  useEffect(() => {
    if (suggestions) {
      setSuggestionCount(suggestions.length);
      setLoading(false);
    } else {
      getSuggestions();
      setProductRequests(Data.productRequests); //all of the info from json file
    }
  }, [suggestions, suggestionCount]);

  const value = {
    suggestions,
    addFeedback,
    suggestionCount,
    setSortingCategory,
    sortingCategory
  };

  return (
    <SuggestionsContext.Provider value={value}>
      {!loading && children}
    </SuggestionsContext.Provider>
  );
};

import React, { useState, useEffect, createContext } from "react";
import Data from "../data/data.json";

export const SuggestionsContext = createContext();

export const SuggestionsProvider = ({ children }) => {
  const [productRequests, setProductRequests] = useState(null); //gets a copy of the product requests from json file

  const [suggestions, setSuggestions] = useState(null); //only gets product feedback requests that are suggestions
  const [suggestionCount, setSuggestionCount] = useState(0); //suggestion count ONLY
  const [loading, setLoading] = useState(true);

  const [sortingCategory, setSortingCategory] = useState("Most Upvotes");

  const [roadmapItems, setRoadmapItems] = useState(null);

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

  //these are product feedback requests that have status other than suggestion
  //in progress, planned, live
  const getNonSuggestions = () => {
    const originalArray = Data.productRequests;
    const newArray = originalArray.filter(
      (productRequest) => productRequest.status !== "suggestion"
    );
    setRoadmapItems(newArray);
  };

  useEffect(() => {
    if (suggestions) {
      setSuggestionCount(suggestions.length);
      setLoading(false);
    } else {
      getSuggestions();
      setProductRequests(Data.productRequests);
      getNonSuggestions(Data.productRequests);
    }
  }, [suggestions, suggestionCount]);

  const value = {
    suggestions,
    addFeedback,
    suggestionCount,
    setSortingCategory,
    sortingCategory,
    roadmapItems,
  };

  return (
    <SuggestionsContext.Provider value={value}>
      {!loading && children}
    </SuggestionsContext.Provider>
  );
};

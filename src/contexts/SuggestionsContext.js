import React, { useState, createContext } from "react";

export const SuggestionsContext = createContext();

export const SuggestionsProvider = ({children}) => {
  const [suggestionCount, setSuggestionCount] = useState(0);
  return (
    <SuggestionsContext.Provider value={{suggestionCount, setSuggestionCount}}>
      {children}
    </SuggestionsContext.Provider>
  );
};

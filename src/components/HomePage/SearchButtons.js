import React from "react";
import styled from "styled-components";

const Search = styled.div`
  background-color: var(--white);
  padding: 1.5em 1rem 1.5em 1.5em;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 0.9em;
`;

const SearchButtons = () => {
  return (
    <div>
      <Search>
        <FilterButton>All</FilterButton>
        <FilterButton>UI</FilterButton>
        <FilterButton>UX</FilterButton>
        <FilterButton>Enhancement</FilterButton>
        <FilterButton>Bug</FilterButton>
        <FilterButton>Feature</FilterButton>
      </Search>
    </div>
  );
};

export default SearchButtons;

import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

const DropdownContainer = styled.div`
  position: absolute;
  z-index: 10;
  top: 2.35rem;
  width: 255px;
  background-color: var(--white);
  border-radius: 10px;
  color: var(--gray);
  box-shadow: 0px 10px 40px -7px rgba(55, 63, 104, 0.3505);
`;

const ListItem = styled.li`
  list-style: none;
  padding: 0.75rem 1.5rem;
  border-bottom: 1px solid rgba(58, 67, 116, 0.15);
  cursor: pointer;

  &:last-child {
    border: none;
  }

  :hover {
    color: var(--brightPurple);
  }
`;

const Dropdown = ({ categories, setCategory, isOpen }) => {
  const onOptionClicked = (value) => {
    setCategory(value);
  };

  const items = categories.map((category, index) => {
    return (
      <ListItem key={index} onClick={() => onOptionClicked(category)}>
        {category}
      </ListItem>
    );
  });

  return (
    <DropdownContainer>
      {isOpen && (
        <div>
          <ul>{items}</ul>
        </div>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;

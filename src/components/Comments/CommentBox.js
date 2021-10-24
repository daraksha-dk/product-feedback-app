import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const TextArea = styled.textarea`
  padding: 1rem;
  background-color: #f7f8fd;
  border-radius: 10px;
  border: none;
  width: 100%;
  font-family: "Jost", sans-serif;
  margin-bottom: 1rem;
`;

const CommentBox = () => {
  return (
    <div>
      <div>
        <TextArea
          name="message"
          onChange={handleInput}
          value={message}
          placeholder="Type your comment here"
        ></TextArea>

        <StyledButton as={Link} to="/" bgcolor="var(--brightPurple)">
          Post Reply
        </StyledButton>
      </div>
    </div>
  );
};

export default CommentBox;

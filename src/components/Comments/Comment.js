import React, { useState } from "react";
import styled from "styled-components";
import Reply from "./Reply";

const CommentContainer = styled.div`
  font-size: 13px;
  color: var(--gray);
  margin: 1.5rem 0;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #8c92b33e;
`;

const CommentHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  h5 {
    color: var(--lighterDarkBlue);
  }

  p {
    font-size: 13px;
    color: var(--gray);
  }
`;

const Name = styled.div`
  display: inline;
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 1rem;
`;

const Button = styled.button`
  background-color: transparent;
  margin-left: auto;
  color: var(--royalBlue);
  font-weight: 600;

  :focus {
    text-decoration: underline;
  }
`;

const Comment = ({ comment, image, fullName, userName }) => {
  return (
    <CommentContainer>
      <CommentHeader>
        <Image src={`.${image}`} alt="image of person" />
        <div>
          <h5>{fullName}</h5>
          <p>@{userName}</p>
        </div>

        <Button>Reply</Button>
      </CommentHeader>

      <p>{comment.content}</p>

      {/* {comment.replies ? checkReply() : "no"} */}
    </CommentContainer>
  );
};

export default Comment;

import React from "react";
import styled from "styled-components";
import Comment from "../Comments/Comment";
import { v4 as uuidv4 } from "uuid";

const CommentThread = styled.div`
  margin-bottom: 1.5rem;
  padding: 1.5rem;
  border-radius: 10px;
  background-color: var(--white);

  h3 {
    margin-bottom: 1rem;
  }
`;

const CommentList = ({ feedbackData, numComments }) => {
  const items = feedbackData.comments.map((comment) => {
    const image = comment.user.image;
    const fullName = comment.user.name;
    const userName = comment.user.username;

    const checkReply = () => {
      const replies = comment.replies.map((reply) => {
        return (
          <Comment
            key={uuidv4()}
            comment={reply.content}
            image={reply.user.image}
            fullName={reply.user.name}
            userName={reply.user.username}
            replyingTo={reply.replyingTo}
            padding={true}
          />
        );
      });
      return replies;
    };

    return (
      <div key={uuidv4()}>
        <Comment
          comment={comment}
          image={image}
          fullName={fullName}
          userName={userName}
          padding={false}
        />
        {comment.replies ? checkReply() : "no"}
      </div>
    );
  });

  return (
    <CommentThread>
      <h3>{numComments} Comments</h3>
      {items}
    </CommentThread>
  );
};

export default CommentList;

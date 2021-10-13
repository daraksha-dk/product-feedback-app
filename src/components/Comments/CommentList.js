import React, { useContext } from "react";
import styled from "styled-components";
import { SuggestionsContext } from "../../contexts/SuggestionsContext";
import Comment from "../Comments/Comment";
import Reply from "../Comments/Reply";

const CommentThread = styled.div`
  margin-bottom: 1.5rem;
  padding: 1.5rem;
  border-radius: 10px;
  background-color: var(--white);

  h3 {
    margin-bottom: 1rem;
  }
`;

const CommentList = ({ id, comments }) => {
  const { suggestions } = useContext(SuggestionsContext);

  const items = suggestions[id - 1].comments.map((comment) => {
    const image = comment.user.image;
    const fullName = comment.user.name;
    const userName = comment.user.username;

    const checkReply = () => {
      const replies = comment.replies.map((reply) => {
        return (
          <Reply
            comment={reply.content}
            image={`.${reply.user.image}`}
            fullName={reply.user.name}
            userName={reply.user.username}
            replyingTo={reply.replyingTo}
          />
        );
      });
      return replies;
    };

    return (
      <div>
        <Comment
          comment={comment}
          image={image}
          fullName={fullName}
          userName={userName}
        />
        {comment.replies ? checkReply() : "no"}
      </div>
    );
  });

  return (
    <CommentThread>
      <h3>{comments} Comments</h3>
      {items}
    </CommentThread>
  );
};

export default CommentList;

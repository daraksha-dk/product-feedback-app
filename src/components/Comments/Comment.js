import React from "react";
import {
  CommentContainer,
  CommentHeader,
  Image,
  Button,
  Span,
} from "./CommentStyle";

const Comment = ({
  comment,
  image,
  fullName,
  userName,
  replyingTo,
  padding,
}) => {
  return (
    <CommentContainer padding={padding}>
      <CommentHeader>
        <Image src={`.${image}`} alt="image of person" />
        <div>
          <h5>{fullName}</h5>
          <p>@{userName}</p>
        </div>

        <Button>Reply</Button>
      </CommentHeader>

      {replyingTo ? (
        <p>
          <Span>@{replyingTo}</Span>
          {comment}
        </p>
      ) : null}

      <p>{comment.content}</p>
    </CommentContainer>
  );
};

export default Comment;

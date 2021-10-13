import React from "react";
import styled from "styled-components";

const ReplyContainer = styled.div`
  padding-left: 1.5rem;
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

const Comment = styled.div`
  span {
    color: var(--brightPurple);
    margin-right: 5px;
    font-weight: 700;
  }
`;

const Reply = ({ comment, image, fullName, userName, replyingTo }) => {
  //console.log(fullName);
  return (
    <ReplyContainer>
      <CommentHeader>
        <Image src={image} alt="image of person" />
        <div>
          <h5>{fullName}</h5>
          <p>@{userName}</p>
        </div>

        <Button>Reply</Button>
      </CommentHeader>

      <Comment>
        <span>@{replyingTo}</span>
        {comment}
      </Comment>
    </ReplyContainer>
  );
};

export default Reply;

import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { BackButton, StyledButton, EditButton } from "../components/Button";
import Container from "../components/Container";
import Feedback from "../components/Feedback/Feedback";
import { Link, useParams } from "react-router-dom";
import CommentList from "../components/Comments/CommentList";

import { SuggestionsContext } from "../contexts/SuggestionsContext";

const AddComment = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 1.5em;

  h3 {
    margin-bottom: 1.5rem;
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  background-color: #f7f8fd;
  border-radius: 10px;
  border: none;
  width: 100%;
  font-family: "Jost", sans-serif;
  margin-bottom: 1rem;
`;

const EndSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

export const FeedbackDetail = () => {
  const [message, setMessage] = useState("");
  const [charCount, setCharCount] = useState(250);
  const [exceeded, setExceeded] = useState(false);

  const { suggestions } = useContext(SuggestionsContext);

  // useEffect(() => {
  //   if (charCount === 0) {
  //     setExceeded(true);
  //   }
  // }, [charCount]);

  const handleInput = (e) => {
    const input = e.target.value;
    let previousMessage = "";

    setMessage((prevState) => {
      previousMessage = prevState;
      // console.log("Input:" + input);
      // console.log("previous message:" + previousMessage);
      return input;
    });

    setCharCount((prevState) => {
      // console.log("Input length: " + input.length);
      // console.log("Previous message length: " + previousMessage.length);
      return prevState - (input.length - previousMessage.length);
    });
  };

  const [comments, setComments] = useState(0);
  const { id } = useParams();
  const feedbackItem = suggestions[id - 1];

  const addComments = (feedbackItem) => {
    let comLength = feedbackItem.comments.length;

    feedbackItem.comments.forEach((comment) => {
      if (comment.replies) {
        comLength += comment.replies.length;
      }
    });

    setComments(comLength);

    return comLength;
  };

  useEffect(() => {
    addComments(feedbackItem);
  }, []);


  return (
    <Container>
      <Nav>
        <BackButton as={Link} to="/" color="var(--gray)">
          Go Back
        </BackButton>
        <EditButton as={Link} to="/" bgcolor="var(--royalBlue)">
          Edit Feedback
        </EditButton>
      </Nav>

      {/* Feedback goes here */}

      <Feedback feedback={feedbackItem} />

      {/* {console.log(feedbackItem)} */}

      {/* COMMENTS SHOULD GO HERE */}
      {/* {console.log(feedbackItem.comments[1].replies)} */}

      {/* {console.log(feedbackItem.comments.length)} */}
      {/* ----------------------------------- */}
      <CommentList id={id} comments={comments} />

      <AddComment>
        <h3>Add comment</h3>

        <TextArea
          name="message"
          onChange={handleInput}
          value={message}
          placeholder="Type your comment here"
        ></TextArea>
        <EndSection>
          <p>{charCount} characters left</p>
          <StyledButton as={Link} to="/" bgcolor="var(--brightPurple)">
            Post Comment
          </StyledButton>
        </EndSection>
      </AddComment>
    </Container>
  );
};

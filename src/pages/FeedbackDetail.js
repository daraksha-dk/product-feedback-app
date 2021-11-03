import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { BackButton, StyledButton, EditButton } from "../components/Button";
import Container from "../components/Container";
import Feedback from "../components/Feedback/Feedback";
import { Link, useParams } from "react-router-dom";
import CommentList from "../components/Comments/CommentList";

// import { SuggestionsContext } from "../contexts/SuggestionsContext";

import { useLocation } from "react-router-dom";

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
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const FeedbackDetail = () => {
  const MAX_LENGTH = 250;
  const [message, setMessage] = useState("");
  const [charCount, setCharCount] = useState(MAX_LENGTH);
  const [comments, setComments] = useState(0);
  const [isToggled, setIsToggled] = useState(false);
  const { id } = useParams(); //correct

  const location = useLocation();
  const { feedbackData } = location.state;

  const handleInput = (e) => {
    const input = e.target.value;
    let previousMessage = "";

    setMessage((prevState) => {
      previousMessage = prevState;
      return input;
    });

    setCharCount((prevState) => {
      return prevState - (input.length - previousMessage.length);
    });
  };

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
    if (feedbackData.comments) {
      addComments(feedbackData);
    }
  }, []);

  return (
    <Container>
      <Nav>
        <BackButton as={Link} to="/" color="var(--gray)">
          Go Back
        </BackButton>
        <EditButton
          as={Link}
          to={`/edit-feedback/${id}`}
          bgcolor="var(--royalBlue)"
        >
          Edit Feedback
        </EditButton>
      </Nav>

      <Feedback feedback={feedbackData} />

      {feedbackData.comments ? (
        <CommentList
          feedbackData={feedbackData}
          id={id}
          numComments={comments}
        />
      ) : null}

      <AddComment>
        <h3>Add comment</h3>

        <TextArea
          name="message"
          onChange={handleInput}
          value={message}
          placeholder="Type your comment here"
          maxLength={MAX_LENGTH}
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

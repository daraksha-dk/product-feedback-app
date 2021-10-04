import React from "react";
import styled from "styled-components";
import { StyledButton } from "../Button";
import { Link } from "react-router-dom";

const Div = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 4.75em 1.5em;
  text-align: center;
`;

const Image = styled.img`
  margin-bottom: 2.25em;
`;

const Notice = styled.h3`
  margin-bottom: 0.875em;
`;

const Message = styled.p`
  color: #647196;
  font-size: 13px;
  margin-bottom: 1.5rem;
`;

const EmptyFeedbackList = () => {
  return (
    <Div>
      <Image
        src="/assets/suggestions/illustration-empty.svg"
        alt="Empty suggestions"
      />
      <Notice>There is no feedback yet.</Notice>
      <Message>
        Got a suggestion? Found a bug that needs to be squashed? We love hearing
        about new ideas to improve our app.
      </Message>

      <StyledButton as={Link} to="/newfeedback" needsPlus={true} color="#AD1FEA">
        Add Feedback
      </StyledButton>
    </Div>
  );
};

export default EmptyFeedbackList;

import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import Container from "../components/Container";
import {
  StyledButton,
  CancelButton,
  BackButton,
  DeleteButton,
} from "../components/Button";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const Nav = styled.div`
  margin-bottom: 3.5em;
`;

const Card = styled.div`
  background-color: var(--white);
  border-radius: 10px;
  padding: 2.75em 1.5em 0.5rem 1.5em;
  position: relative;
`;

const Image = styled.img`
  position: absolute;
  top: -23px;
`;

const Title = styled.h3`
  margin-bottom: 1.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  color: var(--gray);
`;

const Label = styled.label`
  font-weight: 700;
  font-size: 13px;
  color: var(--lighterDarkBlue);
  margin-bottom: 0.1875rem;
`;

const Description = styled.p`
  font-size: 0.8125em;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  margin-bottom: 1.5rem;
`;

const TextArea = styled.textarea`
  margin-bottom: 2.5rem;
`;

export const EditFeedback = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");

  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    //create component
    const feedback = {
      id: uuidv4(),
      title: title,
      message: message,
      category: category,
      upvotes: 0,
      status: "planned",
    };

    history.push("/");
  };

  return (
    <Container>
      <Nav>
        <BackButton as={Link} to="/" color="var(--gray)">
          Go Back
        </BackButton>
      </Nav>

      <Card>
        <Image
          src="/assets/shared/icon-edit-feedback.svg"
          alt="Edit feedback"
        />
        <Title>Editing 'title'</Title>

        <Form>
          <Label htmlFor="title">Feedback Title</Label>
          <Description>Add a short, descriptive headline</Description>
          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <Label htmlFor="category">Category</Label>
          <Description>Choose a category for your feedback</Description>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Feature">Feature</option>
            <option value="UI">UI</option>
            <option value="Coconut">UX</option>
            <option value="Enhancement">Enhancement</option>
            <option value="Bug">Bug</option>
          </select>

          <Label htmlFor="detail">Feedback Detail</Label>
          <Description>
            Include any specific comments on what should be improved, added,
            etc.
          </Description>
          <TextArea
            name=""
            id=""
            cols="30"
            rows="10"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></TextArea>

          {/* FIXME: Doesnt redirect after clicking */}
          <StyledButton
            onClick={handleSubmit}
            // update the feedback
            bgcolor="var(--brightPurple)"
            margin="true"
          >
            Save Changes
          </StyledButton>

          <CancelButton
            onClick={() => history.push("/")}
            bgcolor="var(--lighterDarkBlue)"
            margin="true"
          >
            Cancel
          </CancelButton>

          <DeleteButton
            // onClick={() => history.push("/")}
            // make the onclick delete the feedback
            bgcolor="var(--brightRed)"
            margin="true"
          >
            Delete
          </DeleteButton>
        </Form>
      </Card>
    </Container>
  );
};

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { CancelButton, StyledButton } from "../Button";

const Container = styled.div`
  background-color: pink;
  height: 100%;
  padding: 1.5em;
`;

const BackButton = styled.p`
  ::before {
    content: url("/assets/shared/icon-arrow-left.svg");
    margin-right: 4px;
  }
`;

const Nav = styled.div`
  margin-bottom: 4em;
`;

const FeedbackLink = styled.a`
  background-color: #4661e6;
  padding: 0.8em 1.25em;
  color: #fff;
  font-weight: 700;
  border-radius: 10px;
  font-size: 13px;
  /* margin: 1.5em 0 2em 0; */
  display: inline-block;
  text-decoration: none;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 1.5em 1.5em 0.5rem 1.5em;
`;

const Title = styled.h3`
  margin-bottom: 1.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  color: #647196;
`;

const Label = styled.label`
  font-weight: 700;
  font-size: 13px;
  color: #3a4374;
  margin-bottom: 0.1875rem;
`;

const Description = styled.p`
  font-size: 0.8125em;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  padding: 1em 1rem;
  background-color: #f7f8fd;
  border: none;
  margin-bottom: 1.5rem;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  background-color: #f7f8fd;
  border: none;
  border-radius: 5px;
  margin-bottom: 2.5rem;
`;

const NewFeedback = () => {
  return (
    <Container>
      <Nav>
        <Link to="/">
          <BackButton>Go back</BackButton>
        </Link>
      </Nav>

      <Card>
        <Title>Create New Feedback</Title>

        <Form>
          <Label htmlFor="title">Feedback title</Label>
          <Description>Add a short, descriptive headline</Description>
          <Input type="text" placeholder="Feature" />

          <Label htmlFor="category">Category</Label>
          <Description>Choose a category for your feedback</Description>
          <Input type="select" />

          <Label htmlFor="detail">Feedback Detail</Label>
          <Description>
            Include any specific comments on what should be improved, added,
            etc.
          </Description>
          <TextArea name="" id="" cols="30" rows="10"></TextArea>

          <StyledButton color="#AD1FEA" margin={true}>
            Add Feedback
          </StyledButton>

          <CancelButton color="#3A4374" margin={true}>
            Cancel
          </CancelButton>
        </Form>
      </Card>
    </Container>
  );
};

export default NewFeedback;

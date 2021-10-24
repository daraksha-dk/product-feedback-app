import React, { useState } from "react";
import styled from "styled-components";
import Container from "../components/Container";
import { StyledButton, BackButton } from "../components/Button";
import { useParams } from "react-router";

import { Link } from "react-router-dom";

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin-bottom: 1.5rem; */
  background-color: #373f68;
  height: 100px;
  padding: 1.625rem 1.5rem;
`;

const Title = styled.h3`
  color: #fff;
`;

const Content = styled.div`
  padding: 1.25rem 1.5rem 0;
`;

const Categories = styled.div`
  display: flex;
  justify-content: space-around;
  color: #3a4374;
  position: relative;

  padding: 1.25rem;

  :after {
    content: "";
    height: 1px;
    width: 100%;
    position: absolute;
    bottom: 0px;
    left: 0px;
    background-color: rgba(140, 146, 179, 0.25);
  }
`;

export const RoadmapPage = () => {
  const { id } = useParams();
  return (
    <div>
      <Nav>
        <div>
          <BackButton as={Link} to="/" color="var(--white)">
            Go Back
          </BackButton>
          <Title>Roadmap</Title>
        </div>

        <StyledButton
          as={Link}
          to={`/newfeedback/${id}`}
          bgcolor="var(--brightPurple)"
          plus="true"
        >
          Add Feedback
        </StyledButton>
      </Nav>

      <Categories>
        <h5>Planned (2)</h5>
        <h5>In Progress (3)</h5>
        <h5>Live (1)</h5>
      </Categories>

      <Content></Content>
    </div>
  );
};

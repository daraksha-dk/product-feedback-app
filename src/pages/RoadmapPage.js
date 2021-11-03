import React, { useState, useContext } from "react";
import styled from "styled-components";
import Container from "../components/Container";
import { StyledButton, BackButton } from "../components/Button";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { SuggestionsContext } from "../contexts/SuggestionsContext";
import Feedback from "../components/Feedback/Feedback";

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

const Section = styled.h5`
  cursor: pointer;

  :focus {
    color: red;
  }
`;

export const RoadmapPage = () => {
  const { id } = useParams();
  const { roadmapItems } = useContext(SuggestionsContext);
  const [category, setCategory] = useState("In Progress");
  const categories = ["Planned", "In Progress", "Live"];

  const getInProgressItems = () => {
    const progressItems = roadmapItems.filter(
      (item) => item.status === "in-progress"
    );

    return progressItems.map((item) => {
      return <Feedback feedback={item} />;
    });
  };

  const getPlannedItems = () => {
    const plannedItems = roadmapItems.filter(
      (item) => item.status === "planned"
    );

    return plannedItems.map((item) => {
      return <Feedback feedback={item} />;
    });
  };

  const getLiveItems = () => {
    const liveItems = roadmapItems.filter((item) => item.status === "live");

    return liveItems.map((item) => {
      return <Feedback feedback={item} border={true} />;
    });
  };

  const onOptionClicked = (value) => {
    setCategory(value);
    console.log(value);
  };

  const showSection = () => {
    switch (category) {
      case "Planned":
        return getPlannedItems();

      case "In Progress":
        return getInProgressItems();

      case "Live":
        return getLiveItems();

      default:
        return getInProgressItems();
    }
  };

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
        <Section onClick={() => onOptionClicked("Planned")}>
          Planned (2)
        </Section>
        <Section onClick={() => onOptionClicked("In Progress")}>
          In Progress (2)
        </Section>
        <Section onClick={() => onOptionClicked("Live")}>Live (2)</Section>
      </Categories>

      <Content>{showSection()}</Content>
    </div>
  );
};

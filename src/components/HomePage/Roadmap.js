import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const RoadmapContainer = styled.div`
  background-color: var(--white);
  padding: 1.5em;
  border-radius: 10px;

  @media (min-width: 768px) {
    height: 178px;
    width: 223px;
    border-radius: 20px;
  }
`;

const RoadmapView = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5em;
`;

const ViewLink = styled.a`
  color: #4661e6;
  font-weight: 600;
`;

const ProgressTracker = styled.div`
  //margin-top: 1em;
`;

const ProgressList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-left: 1em;
  font-weight: 400;
  color: var(--lighterDarkBlue);

  ::before {
    padding: inherit;
    content: "";
    position: absolute;
    border-radius: 50%;
    top: 7px;
    left: -15px;
    width: 8px;
    height: 8px;
    background: ${(props) => props.color};
  }
`;

const Span = styled.span`
  font-weight: 700;
  color: #647196;
`;

const Roadmap = () => {
  const [planned, setPlanned] = useState(2);
  const [inProgress, setInProgress] = useState(3);
  const [live, setLive] = useState(1);
  return (
    <div>
      <RoadmapContainer>
        <RoadmapView>
          <h3>Roadmap</h3>
          <ViewLink as={Link} to="/roadmap">
            View
          </ViewLink>
        </RoadmapView>

        <ProgressTracker>
          <ProgressList>
            <ListItem color="var(--orange)">
              Planned <Span>{planned}</Span>
            </ListItem>
            <ListItem color="var(--brightPurple)">
              In Progress <Span>{inProgress}</Span>
            </ListItem>
            <ListItem color="var(--brightBlue)">
              Live <Span>{live}</Span>
            </ListItem>
          </ProgressList>
        </ProgressTracker>
      </RoadmapContainer>
    </div>
  );
};

export default Roadmap;

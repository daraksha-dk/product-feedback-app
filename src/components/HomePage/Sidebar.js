import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FilterButton } from "../Button";

const Menu = styled.div`
  background-color: #f7f8fd;
  height: calc(100vh - (72px));
  width: 72%;
  margin-left: auto;
  padding: 1.5em 1.5em 0 1.5em;
  display: flex;
  flex-direction: column;
  gap: 24px; //subject to change
  position: absolute;
  right: 0;
  z-index: 10;
`;

const Search = styled.div`
  background-color: var(--white);
  padding: 1.5em 1rem 1.5em 1.5em;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 0.9em;
`;

const Roadmap = styled.div`
  background-color: var(--white);
  padding: 1.5em;
  border-radius: 10px;
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

const Sidebar = () => {
  const [planned, setPlanned] = useState(2);
  const [inProgress, setInProgress] = useState(3);
  const [live, setLive] = useState(1);

  return (
    <Menu>
      <Search>
        <FilterButton>All</FilterButton>
        <FilterButton>UI</FilterButton>
        <FilterButton>UX</FilterButton>
        <FilterButton>Enhancement</FilterButton>
        <FilterButton>Bug</FilterButton>
        <FilterButton>Feature</FilterButton>
      </Search>

      <Roadmap>
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
      </Roadmap>
    </Menu>
  );
};

export default Sidebar;
